import AWS from "aws-sdk";
const dynamodb = new AWS.DynamoDB.DocumentClient();

export default async (value, queryKey) => {
    const params = {
        TableName: process.env.JOURNAL_TABLE_NAME,
        KeyConditionExpression: `${queryKey} = :skey`,
        ExpressionAttributeValues: {
            ":skey": value,
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
