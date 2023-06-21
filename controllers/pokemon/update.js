const Pokemon = require("../../models/pokemon")

async function update(req, res){
    const id = req.params.id
    await Pokedex.findByIdAndUpdate(id, req.body)
    res.redirect("/pokemon")
}

module.exports = update