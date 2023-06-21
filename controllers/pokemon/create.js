const Pokedex = require("../../models/pokemon")

async function create(req, res){
    const pokedex = await Pokedex.create(req.body)
    res.redirect("/pokedex")
}

module.exports = create