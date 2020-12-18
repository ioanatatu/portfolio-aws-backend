const journal = {
    projects: [
        {
            name: "thenap",
            description:
                "This is a sandbox project where I test ideas and implement features which I might want to use in future projects. It has JWT authentication, database storage with PostgreSQL and Firebase, state with Redux.",
            externalLink: "https://www.thenap.de/",
            githubLink: "https://github.com/ioanatatu/take-a-nap",
        },
        {
            name: "sinkplant",
            description:
                "This is a sandbox project where I test ideas and implement features which I might want to use in future projects. It has JWT authentication, database storage with PostgreSQL and Firebase, state with Redux.",
            externalLink: "",
            githubLink: "https://github.com/iclogg/sinkplant",
        },
        {
            name: "trasnochando",
            description:
                "This is a sandbox project where I test ideas and implement features which I might want to use in future projects. It has JWT authentication, database storage with PostgreSQL and Firebase, state with Redux.",
            externalLink: "ioanatatu.github.io/trasnochando/",
            githubLink: "https://github.com/ioanatatu/trasnochando",
        },
        {
            name: "lifetracker",
            description:
                "This is a sandbox project where I test ideas and implement features which I might want to use in future projects. It has JWT authentication, database storage with PostgreSQL and Firebase, state with Redux.",
            externalLink: "",
            githubLink: "",
        },
        {
            name: "portfolio",
            description: "",
            externalLink: "https://www.ioanatatu.com",
            githubLink: "",
        },
    ],
    timeline: [
        {
            date: "2020-12-17",
            projects: [
                {
                    name: "portfolio",
                    tasks: {
                        done: [
                            {
                                description:
                                    "Following steps on aws to upload my certificate to my app in the Load Balancer from ACM --> waiting to be applied... Hope it works. Later edit --> self signed SSL certificate not working - noticed that when I made an http request from postman.",
                                duration: 60,
                                image:
                                    "2020-12-18_SelfSignedSSLCertificateNotWorking.png",
                                tags: ["aws", "terminal"],
                                status: "just started",
                                links: [
                                    "https://ostechnix.com/how-to-use-pbcopy-and-pbpaste-commands-on-linux/",
                                ],
                            },
                            {
                                description:
                                    'Using openssl in the terminal to create a self-signed SSL certificate. "However, some commands may not available on all platforms, for example pbcopy and pbpaste. These commands are exclusively available only on Mac OS X platform." So now I need to install... no, nevermind, I can just open the certificate in the terminal with the command less or cat server.crt and terminate wth q.',
                                duration: 120,
                                image: "",
                                tags: ["aws", "terminal"],
                                status: "just started",
                                links: [
                                    "https://ostechnix.com/how-to-use-pbcopy-and-pbpaste-commands-on-linux/",
                                ],
                            },
                            {
                                description:
                                    "Situation: my react client-side is comfortably hosted on netlify, which offers an out-of-the-box ssl certificate, so I don't have to worry about buying and installing one - the way I did with thenap.de on GoDaddy. The consequence is that I don't want to move my entire app to aws, instead only host the REST API server. This requires however, that I install an SSL certificate for the domain name of the server. I just found out that I don't need to get a domain name and that I can just install what's called a \"self-signed certificate for development and testing purposes\". I am now reading a very good article about how to self sign such a certificate.\n Note to self: for a self signed security certificate the common name (aka domain name) must be max 64 bytes. Mine was longer, so I had to delete the app and the code pipeline and create new ones. (Advantage: more practice) On this occasion I also changed the region from US Virginia to EU Frankfurt - I don't know yet what difference this makes.",
                                duration: 120,
                                image: "",
                                tags: ["aws"],
                                status: "just started",
                                links: [
                                    "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https.html",
                                    "https://joedixon.co.uk/installing-a-self-signed-ssl-certificate-on-elastic-beanstalk",
                                ],
                            },
                            {
                                description:
                                    "Implementing react routing with 404 page.",
                                duration: 120,
                                image: "",
                                tags: ["react", "react router"],
                                status: "just started",
                            },
                            {
                                description: "Udemy classes on routing.",
                                duration: 180,
                                image: "",
                                tags: ["learning"],
                                status: "final",
                            },
                        ],
                        projectRandomIdeas: [
                            {
                                idea:
                                    "Build a custom 404 page not found component.",
                                check: false,
                            },
                            {
                                idea:
                                    "How to implement a seach across the entire content of the page if at some point I would like to find out information about a specific topic?!?",
                                check: false,
                            },
                            {
                                idea:
                                    "Add tags in the timeline menu for better orientation.",
                                check: false,
                            },
                        ],
                    },
                    images: [],
                },
            ],
        },
        {
            date: "2020-12-16",
            projects: [
                {
                    name: "portfolio",
                    tasks: {
                        done: [
                            {
                                description: "Build the <Tasks/> component.",
                                duration: 90,
                                image: "",
                                tags: ["css", "JSX"],
                                status: "work in progress",
                            },
                            {
                                description:
                                    "Think about features like adding/ removing/ editing in place (with opening input fields) or external (with popping modals). NEW JOURNAL ENTRY -> form in a modal, ADD NEW TASK -> sliding form from top.",
                                duration: 40,
                                image: "",
                                tags: ["concept"],
                                status: "concept phase",
                            },
                            {
                                description:
                                    "Add EditTask, DeleteTask buttons to <Task/> component and AddTask to the Tasks title in the <ProjectEntry/> component.",
                                duration: 45,
                                image: "",
                                tags: ["css", "react-icons"],
                                status: "work in progress",
                            },
                            {
                                description: "UI coding - <Tasks/> component.",
                                duration: 40,
                                image: "",
                                tags: ["css", "react"],
                                status: "work in progress",
                            },
                            {
                                description:
                                    "Coded project buttons and used a custom hook to determine which project is active and add a css class for styling.",
                                duration: 50,
                                image: "",
                                tags: ["css", "react"],
                                status: "work in progress",
                            },
                            {
                                description:
                                    "Coding Tech labels with rc-progress npm package",
                                duration: 150,
                                image: "",
                                tags: ["react", "vanilla JS", "npm package"],
                                status: "work in progress",
                            },
                        ],
                        projectRandomIdeas: [
                            {
                                idea:
                                    "Build the form as a modal, so that the user can see when the state (and therefore the component) is updating.",
                                check: false,
                            },
                        ],
                    },
                    images: [],
                },
                {
                    name: "sinkplant",
                    tasks: {
                        done: [
                            {
                                description: "Build the <Tasks/> component.",
                                duration: 90,
                                image: "",
                                tags: ["css", "JSX"],
                                status: "work in progress",
                            },
                        ],
                        projectRandomIdeas: [
                            {
                                idea:
                                    "Build the form as a modal, so that the user can see when the state (and therefore the component) is updating.",
                                check: false,
                            },
                        ],
                    },
                    images: [],
                },
            ],
        },
        {
            date: "2020-12-15",
            projects: [
                {
                    name: "portfolio",
                    tasks: {
                        done: [
                            {
                                description:
                                    "Developing the Welcome component and using useViewport custom hook to render different styles based on the window width.",
                                duration: 120,
                                image: "",
                                tags: ["react", "sass"],
                                status: "",
                            },
                            {
                                description:
                                    "Built and styled the <DarkModeToggler/> component and setting new state with prevDarkMode. In order to insure the persistence of the dark mode option across page refreshes, the value of the DarkMode (boolean) is stored in the local storage.",
                                duration: 90,
                                image: "",
                                tags: ["react", "css"],
                                status: "",
                            },
                            {
                                description:
                                    "Built the <JournalEntry/> component.",
                                duration: 40,
                                image: "final",
                                tags: ["react", "scss"],
                                status: "work in progress",
                            },
                            {
                                description:
                                    "Built the <Tasks/> and <Task/> components.",
                                duration: 120,
                                image: "",
                                tags: ["react", "scss"],
                                status: "work in progress",
                            },
                            {
                                description:
                                    "Built the <WorkingTime/> component.",
                                duration: 50,
                                image: "",
                                tags: ["react", "scss"],
                                status: "work in progress",
                            },
                            {
                                description:
                                    "Refactor the line into its own component with default style values. Width, height and color can be passed as props to change those values.",
                                duration: 15,
                                image: "",
                                tags: ["react"],
                                status: "final",
                            },
                            {
                                description:
                                    "Building the <Stats/> component with subcomponents.",
                                duration: 120,
                                image: "",
                                tags: ["react"],
                                status: "work in progress",
                            },
                            {
                                description: "Deployment.",
                                duration: 10,
                                image: "",
                                tags: ["workflow"],
                                status: "final",
                            },
                        ],
                        projectRandomIdeas: [
                            {
                                idea:
                                    "Build the form as a modal, so that the user can see when the state (and therefore the component) is updating.",
                                check: false,
                            },
                        ],
                    },
                    images: [],
                },
            ],
        },
        {
            date: "2020-12-14",
            projects: [
                {
                    name: "portfolio",
                    tasks: {
                        done: [
                            {
                                description:
                                    "!!!!!!!!!!!!!!!!!!!! task about custom hooks",
                                duration: 60,
                                image: "",
                                tags: ["react", "workflow", "css", "sass"],
                                status: "",
                            },
                            {
                                description:
                                    "Prepare fonts, install node-sass@4.14.1, since the latest node-sass v5.0.0 is not yet compatible with create-react-app( which expects node-sass version 4), add replace css with sass file extensions; ",
                                duration: 60,
                                image: "",
                                tags: ["react", "workflow", "css", "sass"],
                                status: "",
                            },
                            {
                                description:
                                    "Improve variable imports by creating an .env file to avoid using relative paths in the imports",
                                duration: 60,
                                image: "",
                                tags: ["react", "workflow", "css", "sass"],
                                status: "",
                            },
                        ],
                        projectRandomIdeas: [],
                    },
                    images: [],
                },
            ],
            generalRandomIdeas: [{}],
        },
        {
            date: "2020-12-13",
            projects: [
                {
                    name: "portfolio",
                    tasks: {
                        done: [
                            {
                                description:
                                    "Implemented smooth scrolling with react-scroll package",
                                duration: 60,
                                image: "",
                                tags: ["react"],
                                status: "final",
                            },
                        ],
                        projectRandomIdeas: [],
                    },
                    images: [],
                },
            ],
            generalRandomIdeas: [
                {
                    idea:
                        "come up with a standard status system to describe in which \"state\" a task is: final (doesn't need changes/ improvements/ development), wip (it's currently being developed) etc",
                    check: false,
                },
                {
                    idea:
                        "convert duration minutes in hours when duration exceeds 60mins",
                    check: false,
                },
                {
                    idea:
                        "Think about how to combine Project Radom Ideas and General Random Ideas into one component...? Maybe Project Radom Ideas and General Random Ideas should share the same space, but be toggled with buttons.",
                    check: false,
                },
                {
                    idea:
                        "Integrate link in the task where relevant (eg.: when I work with an npm package or other online resource)",
                    check: false,
                },
                {
                    idea:
                        "Create an Admin view that would allow me to change the status of the ideas. Not the Tasks, just the ideas and maybe have the date when the idea was implemented.",
                    check: false,
                },
            ],
        },
        {
            date: "2020-12-11",
            projects: [
                {
                    name: "portfolio",
                    tasks: {
                        done: [
                            {
                                description:
                                    "plan and code the <Menu/>, <Timeline/> and <Count/> components",
                                duration: 60,
                                image: "2020-12-11_1.png",
                                tags: ["architecture", "react"],
                                status: "development",
                            },
                            {
                                description:
                                    "sketch, plan and code the <Task/> component",
                                duration: 90,
                                image: "2020-12-11_3.png",
                                tags: ["architecture", "react"],
                                status: "final",
                            },
                            {
                                description: "plan components architecture",
                                duration: 60,
                                image: "2020-12-11_4.png",
                                tags: ["architecture", "react"],
                                status: "final",
                            },
                            {
                                description:
                                    "plan and code components architecture",
                                duration: 180,
                                image: "2020-12-11_5.png",
                                tags: ["architecture", "react"],
                                status: "final",
                            },
                            {
                                description: "build, deploy",
                                duration: 30,
                                image: "",
                                tags: ["workflow"],
                                status: "",
                            },
                        ],
                        projectRandomIdeas: [
                            {
                                idea:
                                    "when user hovers over a box, increase shadow so it looks as if box is flying",
                                check: false,
                            },
                            {
                                idea:
                                    "look into how to load the images from a directory with a function, so that I don't need a hard coded images array to map on the <ImageGallery/>",
                                check: false,
                            },
                        ],
                    },
                    images: [
                        "2020-12-11_1.png",
                        "2020-12-11_2.png",
                        "2020-12-11_3.png",
                        "2020-12-11_4.png",
                        "2020-12-11_5.png",
                    ],
                },
            ],
            generalRandomIdeas: [""],
        },
        {
            date: "2020-12-10",
            projects: [
                {
                    name: "portfolio",
                    tasks: {
                        done: [
                            {
                                description:
                                    "plan <JournalEntry/> component structure in drawio",
                                duration: 30,
                                image: "",
                                tags: [],
                                status: "",
                            },
                            {
                                description:
                                    "create the journal object structure to hold all the data that will be mapped on the <JournalEntry/> component",
                                duration: 90,
                                image: "",
                                tags: [],
                                status: "",
                            },
                            {
                                description:
                                    "code the raw html structure of <JournalEntry/> component from drawio",
                                duration: 90,
                                image: "",
                                tags: [],
                                status: "",
                            },
                        ],
                        projectRandomIdeas: [
                            {
                                idea:
                                    "look into how to insert js code into the html so I can display this object",
                                check: false,
                            },
                            {
                                idea:
                                    "think about how to maybe add tags to each todo or done tasks and gather stats -> use ChartJS",
                                check: false,
                            },
                            {
                                idea:
                                    "think about how to automate this process by building input fields and storing to a db",
                                check: false,
                            },
                            {
                                idea:
                                    "maybe at the end of each day sum up the durations of all tasks and show the time worked on that day -> for transparency and time management purposes",
                                check: false,
                            },
                            {
                                idea:
                                    "how to read the images from the file without manually entering the links in the images array",
                                check: false,
                            },
                            {
                                idea:
                                    "add button at the end of the timeline to link to a form where I can fill in all this data into a database -> I need AWS for that",
                                check: false,
                            },
                        ],
                    },
                    images: [
                        "../../images/journal/2020-12-10/portfolio/2020-12-10_1.png",
                    ],
                },
            ],
            generalRandomIdeas: [""],
        },
    ],
};

module.exports = journal;
