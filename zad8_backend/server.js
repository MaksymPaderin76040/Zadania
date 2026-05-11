const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.post("/wyslij", (req, res) => {

    const nowaWiadomosc = req.body;

    let wiadomosci = [];

    if (fs.existsSync("messages.json")) {
        const dane = fs.readFileSync("messages.json");
        wiadomosci = JSON.parse(dane);
    }

    wiadomosci.push(nowaWiadomosc);

    fs.writeFileSync(
        "messages.json",
        JSON.stringify(wiadomosci, null, 2)
    );

    res.json({
        sukces: true,
        message: "Dane zostały zapisane!"
    });
});

app.listen(3000, () => {
    console.log("Serwer działa na porcie 3000");
});