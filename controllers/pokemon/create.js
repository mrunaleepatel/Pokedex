const Pokedex = require("../../models/pokedex")

async function create(req, res){
    const pokedex = await Pokedex.create(req.body)
    res.redirect("/pokedex")
}

module.exports = create