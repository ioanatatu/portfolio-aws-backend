import AWS from "aws-sdk";

// lib
const Responses = require("../lib/API_Responses");

// dynamoDB
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getJournalEntry(event) {
    const pathParam = event.pathParameters;
    console.log("pathParam", pathParam);

    let journalEntry;
    const queryKey = "#d";
    let params = {};

    if (!pathParam) {
        // TODO: find a solution for querying the last entry from the db
        const today = new Date().toISOString().split("T")[0];

        params = {
            TableName: process.env.JOURNAL_TABLE_NAME,
            IndexName: "date-index",
            ExpressionAttributeNames: { "#d": "date" },
            KeyConditionExpression: `${queryKey} <= :hkey`,
            ExpressionAttributeValues: {
                ":hkey": today,
            },
            ScanIndexForward: "false",
            Limit: 1,
        };
    } else {
        params = {
            TableName: process.env.JOURNAL_TABLE_NAME,
            IndexName: "date-index",
            ExpressionAttributeNames: { "#d": "date" },
            KeyConditionExpression: `${queryKey} = :hkey`,
            ExpressionAttributeValues: {
                ":hkey": pathParam.journalEntryDate,
            },
        };
    }
    try {
        const result = await dynamodb.query(params).promise();

        journalEntry = result.Items;
    } catch (error) {
        console.error(error);
        throw Error("Error while fetching the journal entry");
    }

    return Responses._200(journalEntry);
}

export const handler = getJournalEntry;
