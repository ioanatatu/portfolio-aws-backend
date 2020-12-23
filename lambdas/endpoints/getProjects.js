import AWS from "aws-sdk";
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getProjects(event, context) {
    let projects;

    const params = {
        TableName: process.env.PROJECTS_TABLE_NAME,
    };

    try {
        const result = await dynamodb.scan(params).promise();

        projects = result.Items;
    } catch (error) {
        console.error(error);
        throw Error("Error while fetching data");
    }

    return {
        statusCode: 200,
        body: JSON.stringify(projects),
    };
}

export const handler = getProjects;
