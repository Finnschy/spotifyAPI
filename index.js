const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.static("public"))
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get("/", (req, res) => {
    res.render("index", {title: "My Homepage"})
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))