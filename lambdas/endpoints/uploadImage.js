import { v4 as uuid } from "uuid";
import { uploadPictureToS3 } from "../lib/uploadPictureToS3";
import * as fileType from "file-type";

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

    let imageData = body.img;

    if (imageData.startsWith("base64")) {
        imageData = imageData.replace("base64,", "");
    }

    const buffer = Buffer.from(imageData, "base64");

    const fileInfo = await fileType.fromBuffer(buffer);

    const detectedMime = fileInfo.mime;
    const detectedExt = fileInfo.ext;

    if (detectedMime !== body.mime) {
        return Responses._400({ message: "mime types do not match" });
    }

    const name = new Date()
        .toISOString()
        .replace(":", "")
        .replace(":", "")
        .split(".")[0];
    const key = `${name}.${detectedExt}`;

    try {
        const url = await uploadPictureToS3(key, buffer, body.mime);

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
