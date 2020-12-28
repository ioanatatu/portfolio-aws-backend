import AWS from "aws-sdk";

const s3 = new AWS.S3();

export async function uploadPictureToS3(key, buffer, contentType) {
    await s3
        .putObject({
            Body: buffer,
            Key: key,
            Bucket: process.env.IMAGES_BUCKET_NAME,
            ContentType: contentType,
            ContentEncoding: "base64",
            ACL: "public-read",
        })
        .promise();

    const url = `https://${process.env.IMAGES_BUCKET_NAME.split("/")[0]}.s3-${
        process.env.REGION
    }.amazonaws.com/projects-logos/${key}`;

    return url;
}
