import { v4 as uuid } from "uuid";
import AWS from "aws-sdk";
import commonMiddleware from "../lib/commonMiddleware";
import createError from "http-errors";

// this is a good example for using the global scope because it is static
// this way we don't have to create the variable for each execution of the fn
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function createProject(event, context) {
    const { name, description } = event.body;
    const now = new Date();

    const project = {
        id: uuid(),
        name,
        description,
        createdAt: now.toISOString(),
    };

    try {
        await dynamodb
            .put({
                TableName: process.env.PROJECTS_TABLE_NAME,
                Item: project,
            })
            .promise();
    } catch (err) {
        console.log(err);
        throw new createError.InternalServerError(err);
    }

    return {
        statusCode: 201,
        body: JSON.stringify(project),
    };
}

export const handler = commonMiddleware(createProject);
