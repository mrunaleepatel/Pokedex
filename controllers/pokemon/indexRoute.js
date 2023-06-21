const Pokemon = require("../../models/connection")

async function index(req, res){
    const pokemons = await Pokemon.find({})
    res.render("pokemon/index.ejs", {pokemons})
}

module.exports = index