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
<div align="center" style="margin: 0 50px">
  <div style="margin: 0 50px">
    <p>I am - what you would call in German - a "Quereinsteiger" in this profession and therefore take learning very seriously. I have a daily routine of coding and work on different projects, but nothing is fully finished at the moment. This is why I wanted to build a project where I could log the tasks that I am working on every day, their resources (images, links with articles etc), how long I spend on each and how much time I use working with a particular technology (react, nodeJS, styling...).</p>
    <br/>
    <p>As a first step, I developed the React component architecture, tracked my tasks in a json object and importing that in React. I decided I needed a backend and database, where I could store data properly and where my client can make requests to. I chose the RESTful API approach and AWS, so I could learn more about these topics.</p>
    <p>At the moment I have two tabled in my DynamoDB: projects and journal-entries.</p>
  </div>
</div>
