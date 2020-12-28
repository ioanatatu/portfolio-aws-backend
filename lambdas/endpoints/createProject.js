import { v4 as uuid } from "uuid";
import AWS from "aws-sdk";

// middleware
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";

// lib
import checkProjectExists from "../lib/checkProjectExists";
const Responses = require("../lib/API_Responses");
const pass = require("../../secrets");

// dynamoDB
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function createProject(event) {
    const {
        title,
        description,
        techStack,
        externalLink,
        githubLinks,
        logo,
        password,
    } = event.body;

    const now = new Date();

    if (password === pass) {
        const project = {
            ID: uuid(),
            title,
            description,
            techStack,
            externalLink,
            githubLinks,
            logo,
            createdAt: now.toISOString(),
        };

        const projectExists = await checkProjectExists(title, "title");

        if (!projectExists) {
            try {
                await dynamodb
                    .put({
                        TableName: process.env.PROJECTS_TABLE_NAME,
                        Item: project,
                    })
                    .promise();
                return Responses._201(project);
            } catch (error) {
                console.error(error);
                return Responses._DefaultResponse();
            }
        } else {
            return Responses._409();
        }
    } else {
        return Responses._401();
    }
}

export const handler = middy(createProject).use(jsonBodyParser());
