const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>test</h1>");
});
app.get("/hola", (req, res) => {
    res.json({ name: "pajarito", feathers: "colores de españa" });
});

const PORT = process.env.PORT || 4006;
app.listen(PORT, () => {
    console.log("🍀 server is listening -------------------\n");
});
