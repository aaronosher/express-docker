import fs from "fs"
import environment from "node-env-file"
import express from "express"

// Routes
import FirstRoute from "./routes/FirstRoute"

let app = express()
let envFile = ""
if (fs.existsSync(".env")) {
    envFile = ".env"
} else {
    envFile = "example.env"
}
let env = environment(envFile)

FirstRoute(app)

app.get("/", function (req, res) {
    res.send("Notts MUN 2017 API. App available at https://app.nottsmun.org")
})

app.listen(env.PORT, env.HOST)
console.log("NottsMUN RESTful API server started on: " + env.HOST + ":" + env.PORT)

if (process.argv.slice(2)[0] == "test") {
    process.exit(0)
}

