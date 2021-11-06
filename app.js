const express = require("express")
const path = require("path")
const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"view","home.html"))
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname,"view","about.html"))
})

app.get("/works", (req, res) => {
    res.sendFile(path.join(__dirname,"view","works.html"))
})

app.get("/photos", (req, res) => {
    res.sendFile(path.join(__dirname,"view","photos.html"))
})

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname,"view","not-found.html"))
})

app.listen(7000, () => console.log("server is running"))