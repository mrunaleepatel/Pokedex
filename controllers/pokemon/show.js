const Pokemon = require("../../models/pokedex")

async function show(req, res){
    const id = req.params.id
    const pokedex = await Pokemon.findById(id)
    res.render("pokemon/show.ejs", {pokedex})
}

module.exports = show