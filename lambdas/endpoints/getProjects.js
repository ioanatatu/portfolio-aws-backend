const Responses = require("../lib/API_Responses");

exports.handler = async (event) => {
    return data
        ? Responses._200(data)
        : Responses._400({ message: "no ID in data" });
};

const data = [
    {
        name: "thenap",
        description:
            "This is a sandbox project where I test ideas and implement features which I might want to use in future projects. It uses JWT authentication, manages state with Redux and stores data in two databases: PostgreSQL for users and Firebase for the subscribers emails.",
        techStack: ["react", "redux"],
        externalLink: "https://www.thenap.de/",
        githubLink: "https://github.com/ioanatatu/take-a-nap",
        logo: "FALSE",
    },
    {
        name: "sinkplant",
        description:
            "Sinkplant is a task management app dedicated to scheduling tasks in a shared household. It has been developed by a former Spiced colleague as the final project at the end of the bootcamp. I found the idea inspiring and very approachable, so I decided to start contributing. The collaboration is also helping to me get more familiar with the github workflow.",
        techStack: ["react", "redux"],
        externalLink: "FALSE",
        githubLink: "https://github.com/iclogg/sinkplant",
        logo: "FALSE",
    },
];
