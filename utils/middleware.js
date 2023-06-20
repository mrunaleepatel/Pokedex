const morgan = require("morgan")
const methodOverride = require("method-override")
const express = require("express")

function middleware(app){
    app.use(morgan("dev"))
    app.use(methodOverride("_method"))
    app.use(express.static("public"))
    app.use(express.urlencoded({extended: false}))
}

module.exports = middleware