const schema = {
    properties: {
        queryStringParameters: {
            type: "object",
            properties: {
                name: {
                    type: "string",
                    // enum: [],
                    // default: "",
                },
                description: {
                    type: "string",
                },
                techStack: {
                    type: "array",
                    items: [{ type: "string" }],
                },
                externalLink: {
                    type: "string",
                },
                githubLink: {
                    type: "string",
                },
                logo: {
                    type: "string",
                },
            },
            required: [
                "name",
                "description",
                "techStack",
                "externalLink",
                "githubLink",
                "logo",
            ],
        },
    },
    required: ["queryStringParameters"],
};

export default schema;
