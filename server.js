require("dotenv").config()
const express = require("express")
const middleware = require("./utils/middleware")
const registerControllers = require("./utils/registerControllers")

const app = express()

middleware(app)
registerControllers(app)

app.listen(process.env.PORT, () => {
    console.log("listening to port: ", process.env.PORT)
})