const express = require("express");

// Constants
const PORT = 8080;
const HOST = "127.0.0.1";

// App
const app = express();
app.get("/", (req, res) => {
    res.send({
        message: "Hello from Express Server"
    });
});

app.get("/api/v1/resourses", (req, res) => {
    res.send({
        data: [
            {
                id: 1,
                name: "resource " + 1
            },
            {
                id: 2,
                name: "resource " + 2
            }
        ]
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);