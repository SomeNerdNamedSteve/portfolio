const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/api/projects', (req, res) => {
    const projects = JSON.parse(fs.readFileSync(path.join(__dirname, "projects.json")));
    res.json(projects);
});

app.listen(5000, () => {
    console.log("Listening");
});