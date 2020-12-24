import { v4 as uuid } from "uuid";
import AWS from "aws-sdk";

// middleware
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function createProject(event, context) {
    const { title } = event.body;
    console.log("_____title_____", title);

    const queryKey = "title";

    const params = {
        TableName: process.env.PROJECTS_TABLE_NAME,
        IndexName: "title-index",
        KeyConditionExpression: `${queryKey} = :hkey`,
        ExpressionAttributeValues: {
            ":hkey": title,
        },
    };

    try {
        const res = await dynamodb.query(params).promise();

        console.log("res", res);

        return {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Origin": "*",
            },
            statusCode: 200,
            body: JSON.stringify(res.Items),
        };
    } catch (error) {
        console.error(error);
        throw Error("Error while fetching data");
    }
}

export const handler = middy(createProject).use(jsonBodyParser());
