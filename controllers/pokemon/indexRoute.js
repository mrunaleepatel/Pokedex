const Pokemon = require("../../models/connection")

async function index(req, res){
    const pokemon = await Poke.find({})
    res.render("pokemon/index.ejs", {pokemon})
}

module.exports = index