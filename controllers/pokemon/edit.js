const Pokedex = require("../../models/pokemon")

async function edit(req, res){
    const id = req.params.id
    const pokedex = await Pokedex.findById(id)
    res.render("pokemon/edit.ejs", {pokedex})
}

module.exports = edit