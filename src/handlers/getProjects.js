import AWS from "aws-sdk";
import validator from "@middy/validator";
import getProjectsSchema from "../lib/schemas/getProjectsSchema";
import commonMiddleware from "../lib/commonMiddleware";
import createError from "http-errors";

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getProjects(event, context) {
    let projects;

    try {
        const result = await dynamodb
            .scan({
                TableName: process.env.PROJECTS_TABLE_NAME,
            })
            .promise();

        projects = result.Items;
    } catch (err) {
        console.log(err);
        throw new createError.InternalServerError(err);
    }
    return {
        statusCode: 201,
        body: JSON.stringify(projects),
    };
}

export const handler = commonMiddleware(getProjects).use(
    validator({ inputSchema: getProjectsSchema, useDefaults: true })
); // eg of functional programming
