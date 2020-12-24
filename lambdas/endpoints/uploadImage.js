import { v4 as uuid } from "uuid";
import { uploadPictureToS3 } from "../lib/uploadPictureToS3";

export async function uploadImage(event, context) {
    const { img } = event.body;
    console.log("body\n\n", img);
    const base64 = img.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64, "base64");

    const key = uuid().slice(0, 8);

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

export const handler = uploadImage;
