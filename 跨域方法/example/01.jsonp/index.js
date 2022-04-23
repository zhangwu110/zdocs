const express = require("express");
const app = express();

app.get("/app", (req, res) => {
    res.send(`cb('sdsds')`)
})

app.listen(3000, () => {
    console.log("server is listening at post 3000");
})