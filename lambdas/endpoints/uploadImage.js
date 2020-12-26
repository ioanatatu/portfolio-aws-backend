import { v4 as uuid } from "uuid";
import { uploadPictureToS3 } from "../lib/uploadPictureToS3";

// middleware
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import Responses from "../lib/API_Responses";

// list of allowed mimes
const allowedMimes = ["image/jpeg", "image/jpg", "image/png"];

export async function uploadImage(event) {
    const body = event.body;
    console.log("BODY*** ", body);

    if (!body || !body.img || !body.mime) {
        return Responses._400({ message: "Incorrect body on request." });
    }
    if (!allowedMimes.includes(body.mime)) {
        return Responses._400({ message: "Mime is not allowed." });
    }

    const base64 = body.img.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64, "base64");

    const key = new Date().toISOString();

    try {
        const url = await uploadPictureToS3(key, buffer);

        return {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Origin": "*",
            },
            statusCode: 200,
            body: JSON.stringify({ imageURL: url }),
        };
    } catch (error) {
        console.error(error);
        throw new Error("err when uploading image to aws");
    }
}

export const handler = middy(uploadImage).use(jsonBodyParser());
