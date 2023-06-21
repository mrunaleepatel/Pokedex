const pokemonRoutes = require("../routes/pokemon")

function registerControllers(app){
    app.use("/pokemon", pokemonRoutes)
}

module.exports = registerControllers