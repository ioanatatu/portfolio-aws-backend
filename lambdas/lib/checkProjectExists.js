import AWS from "aws-sdk";
const dynamodb = new AWS.DynamoDB.DocumentClient();

export default async (value, queryKey) => {
    const params = {
        TableName: process.env.PROJECTS_TABLE_NAME,
        IndexName: "title-index",
        KeyConditionExpression: `${queryKey} = :hkey`,
        ExpressionAttributeValues: {
            ":hkey": value,
        },
    };

    try {
        const res = await dynamodb.query(params).promise();
        return !!res.Items.length;
    } catch (error) {
        console.error(error);
        throw Error("Error while querying for attribute");
    }
};
