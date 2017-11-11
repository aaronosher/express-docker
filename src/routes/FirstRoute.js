import bodyParser from "body-parser"
// import multer from "multer"

function firstRoute(app) {
    // Body Parser
    app.use(bodyParser.json())
    // Multer
    // let upload = multer()
    // Get all delegates
    app.get("/", function (req, res) {
        res.send("hello world")
    })
}

export default firstRoute