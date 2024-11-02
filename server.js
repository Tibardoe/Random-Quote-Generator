import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/api/quote", async (req, res) => {
    try {
        const response = await axios.get("https://zenquotes.io/api/random");
        const result = response.data[0];
        res.json(result);
    } catch (error) {
        res.status(500).send("Error fetching quote");
    }
});

app.get("/quote", async (req, res) => {
    const response = await axios.get("https://zenquotes.io/api/random");
    const result = response.data[0];
    res.json({ content: result.q, author: result.a })

});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);

});