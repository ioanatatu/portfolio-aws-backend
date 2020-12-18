const express = require("express");
const app = express();
const journal = require("./journal");

console.log("journal", journal);

app.get("/", (req, res) => {
    res.send("<h1>test</h1>");
});
app.get("/hola", (req, res) => {
    res.json({ name: "pajarito", feathers: "colores de españa" });
});

app.get("/brasov", (req, res) => {
    res.json({
        friends: [
            { name: "Rakis", features: ["bearded", "big heart"] },
            { name: "Abra", features: ["happy", "big heart"] },
        ],
    });
});

app.get("/journal", (req, res) => {
    res.json(journal);
});

const PORT = process.env.PORT || 4006;
app.listen(PORT, () => {
    console.log("🍀 server is listening -------------------\n");
});
