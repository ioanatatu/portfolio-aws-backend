const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>test</h1>");
});

const PORT = process.env.PORT || 4006;
app.listen(PORT, () => {
    console.log("🍀 server is listening -------------------\n");
});
