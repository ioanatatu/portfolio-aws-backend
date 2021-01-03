import AWS from "aws-sdk";

// lib
const Responses = require("../lib/API_Responses");

// dynamoDB
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getJournalEntries() {
    let journalEntries;

    const params = {
        TableName: process.env.JOURNAL_TABLE_NAME,
        ScanIndexForward: false,
    };

    try {
        const result = await dynamodb.scan(params).promise();

        journalEntries = result.Items;
    } catch (error) {
        console.error(error);
        throw Error("Error while fetching the journal entries");
    }

    return Responses._200(journalEntries);
}

export const handler = getJournalEntries;
