// imports
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

// allows app to run from anywhere on the internet
const app = express()
app.use(express.json());
app.use(cors({ origin: true}));

// authentication of user on app
app.post("/authenticate", async(req,res) => {
    const{ username} = req.body;
    // gets user from chat engine if they exist, if not, creates a new onex
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key":"e875a61e-c4f4-4eb0-9f72-a2c6764c3feb" }}
        )
        return res.status(r.status).json(r.data)
    } catch(e) {
        return res.status(e.response.status).json(e.response.data);
    }
})

app.listen(3001)


// Project ID: 97004b8c-0424-4e3e-a3ca-42a9b0f517dc
// Private key: e875a61e-c4f4-4eb0-9f72-a2c6764c3feb