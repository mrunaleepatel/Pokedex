const Pokemon = require("../../models/pokemon")

async function edit(req, res){
    const id = req.params.id
    const pokemon = await Pokemon.findById(id)
    res.render("pokemon/edit.ejs", {pokemon})
}

module.exports = edit