const express = require("express");
const app = express();

app.use(express.static(__dirname))
app.get("/getdata", (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": "*"
    })
    res.json({data:"跨域ok"})
})
app.listen(3001, () => {
    console.log("port is at 3000");
})