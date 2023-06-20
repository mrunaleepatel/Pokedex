const morgan = require("morgan")
const methodOverride = require("method-override")

function middleware(app){
    app.use(morgan("dev"))
    app.use(methodOverride("_method"))
    app.use(express.static("public"))
    app.use(express.urlencoded({extended: false}))
}