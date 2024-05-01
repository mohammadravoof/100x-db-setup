const express = require('express');
const db = require('./models/index.js')
const app = express();
const port = 3000;

app.get("/healthcheck", async(req, res)=>{
try {
    await db.sequelize.authenticate();
    await db.sequelize.close();
    res.status(200).send("I'm Healthy!");
} catch (error) {
    await db.sequelize.close();
    res.status(500).send("Unable to connect to database");
}
});

app.listen(port,()=>{
    console.log("App running on port 3000");
});