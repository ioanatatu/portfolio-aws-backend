import AWS from "aws-sdk";

// lib
const Responses = require("../lib/API_Responses");

// dynamoDB
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getJournalEntry(event) {
    const journalEntryDate = event.pathParameters.journalEntryDate;

    let journalEntry;

    const queryKey = "#d";

    const params = {
        TableName: process.env.JOURNAL_TABLE_NAME,
        ExpressionAttributeNames: { "#d": "date" },
        KeyConditionExpression: `${queryKey} = :skey`,
        ExpressionAttributeValues: {
            ":skey": journalEntryDate,
        },
    };

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
