const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()
const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL, {})

mongoose.connection
.on("open", () => { console.log("Mongoose is connected")})
.on("close", () => { console.log("Mongoose is disconnected")})
.on("error", (error) => { console.log(error)})

module.exports = mongoose