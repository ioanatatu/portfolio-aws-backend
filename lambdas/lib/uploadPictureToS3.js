import AWS from "aws-sdk";

const s3 = new AWS.S3();

export async function uploadPictureToS3(key, buffer) {
    await s3
        .putObject({
            Body: buffer,
            Key: `${key}.jpg`,
            Bucket: process.env.IMAGES_BUCKET_NAME,
            ContentType: "image/jpeg",
            ContentEncoding: "base64",
            ACL: "public-read",
        })
        .promise();

    const url = `https://${process.env.IMAGES_BUCKET_NAME}.s3-${process.env.REGION}.amazonaws.com/${key}.jpg`;

    return url;
}
