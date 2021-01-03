import AWS from "aws-sdk";

// middleware
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";

// lib
const Responses = require("../lib/API_Responses");
const pass = require("../../secrets");

// dynamoDB
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function deleteProject(event) {
    const projectId = event.pathParameters.projectId;
    const { password } = event.body;

    if (password === pass) {
        try {
            await dynamodb
                .delete({
                    TableName: process.env.PROJECTS_TABLE_NAME,
                    Key: { ID: projectId },
                })
                .promise();
            return Responses._200("Project was successfully deleted");
        } catch (error) {
            console.error(error);
            return Responses._DefaultResponse();
        }
    } else {
        return Responses._401();
    }
}

export const handler = middy(deleteProject).use(jsonBodyParser());
