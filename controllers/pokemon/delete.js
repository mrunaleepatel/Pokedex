const Pokedex = require("../../models/pokedex")

async function destroy(req, res){
    const id = req.params.id
    await Pokedex.findByIdAndRemove(id)
    res.redirect("/pokedex")
}

module.exports = destroy