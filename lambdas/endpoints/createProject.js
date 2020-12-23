import { v4 as uuid } from "uuid";
import AWS from "aws-sdk";

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function createProject(event, context) {
    const {
        name,
        description,
        techStack,
        githubLink,
        externalLink,
        logo,
    } = JSON.parse(event.body);
    const now = new Date();

    const project = {
        ID: uuid(),
        name,
        description,
        techStack,
        githubLink,
        externalLink,
        logo,
        createdAt: now.toISOString(),
    };

    try {
        await dynamodb
            .put({
                TableName: process.env.PROJECTS_TABLE_NAME,
                Item: project,
            })
            .promise();
    } catch (error) {
        console.error(error);
        throw new Error("project not created");
    }

    return {
        statusCode: 201,
        body: JSON.stringify(project),
    };
}

export const handler = createProject;
