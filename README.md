<h1 align="center" style="font-size: 30px">This repo contains the backend code for the portfolio project</h1>

### I am using the `AWS services` and the `serverless framework` to create a `RESTful API` which provides data for my client.

#

#### `lambda functions` &#8212; `api gateway` &#8212; `cloud watch` &#8212; `yaml` are a few of the things I learnt while developing this project
#### I also employed Postman extensively for making requests to endpoints when testing.

#

## AWS resources included so far

-   S3 for image storage
-   DynamoDB for data storage

#

See also frontend repo: https://github.com/ioanatatu/portfolio-client \
Or visit the webpage: https://ioanatatu.com

<hr style="margin-bottom: 40px">
<h1 align="center" style="font-size: 30px">What is this project about?</h1>

&#8212; I am - what you would call in German - a "Quereinsteiger" in this profession and therefore take learning very seriously. I have a daily routine of coding and work on different projects, but nothing is fully finished at the moment. This is why I wanted to build a project where I could log the tasks that I am working on every day, their resources (images, links with articles etc), how long I spend on each one and how much time I use working with a particular technology (react, nodeJS, styling...). And because this app tracks my coding progress, I would also be using it as a portfolio, to showcase my skills to potential enployers.

&#8212; As a first step, I developed the React component architecture, tracked my tasks in a json object and was importing that in React. I decided I needed a backend and database, where I could store data properly and where my client could make requests to. I chose the **RESTful API** approach and **AWS**, so I could learn more about these topics. Becoming familiar with (a tiny part of) the AWS ecosystem was a nightmare, but every step forward felt like the sweetest victory.

&#8212; At the moment I have the **projects** and **journal-entries** tables in my DynamoDB and I can perform **create, read and remove operations** on them from the client-side. I am using these features to add my projects and journal entries (these are the tasks I am working on every day) and validate the input with forms I built in React. At the same time I also wanted to demo these features to visitors, without really deleting data from the database. I decided to mimick these actions on the client-side (create and delete) if no password would be entered. No password - no request to the backend. However, if a password is entered, it will be validated on the backend and very likely - I hope... :) - will throw an error as I am the only holder of the magic key. 🔑

&#8212; An interesting challenge I am facing is switching between the different technologies and perspectives, jumping from configuring the serverless yaml file for the backend, to setting state for a tiny button in React, when the audio file has finished playing. It's a trip 👩🏻‍💻 
