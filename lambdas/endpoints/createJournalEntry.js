import AWS from "aws-sdk";

// middleware
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";

// lib
import checkDateExists from "../lib/checkDateExists";
const Responses = require("../lib/API_Responses");
const pass = require("../../secrets");

// dynamoDB
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function createJournalEntry(event) {
    const { date, project, password } = event.body;

    const dateAsID = date.split("T")[0];
    const projectObject = {
        name: project,
        tasks: { done: [], projectRandomIdeas: [] },
        images: [],
    };

    // check if password in correct
    if (password !== pass) {
        return Responses._401();
    }

    const journalEntry = {
        ID: dateAsID,
        projects: [projectObject],
    };

    const dateExists = await checkDateExists(dateAsID, "ID");

    if (!dateExists) {
        try {
            await dynamodb
                .put({
                    TableName: process.env.JOURNAL_TABLE_NAME,
                    Item: journalEntry,
                })
                .promise();
            return Responses._201(journalEntry);
        } catch (error) {
            console.error(error);
            return Responses._DefaultResponse();
        }
    } else {
        try {
            const res = await dynamodb
                .get({
                    TableName: process.env.JOURNAL_TABLE_NAME,
                    Key: { ID: dateAsID },
                })
                .promise();

            const projects = res.Item.projects;

            const projectExists = projects.filter((proj) => proj.name === project)
                .length;
            console.log("example ", projects, projectExists);

            if (projectExists) {
                return Responses._409(
                    `Project exists in the journal entry of ${dateAsID}`
                );
            } else {
                return {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Methods": "*",
                        "Access-Control-Allow-Origin": "*",
                    },
                    statusCode: 200,
                    body: JSON.stringify(
                        "NEED TO FIGURE OUT HOW TO INSERT PROJECT IN THE DATE OBJ IF THE OBJ DOES NOT INCLUDE THAT PROJECT"
                    ),
                };
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const handler = middy(createJournalEntry).use(jsonBodyParser());
