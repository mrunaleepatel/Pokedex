const Pokemon = require("../../models/pokemon")

async function create(req, res){
    let newPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.type,
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed
        },
        misc: {
            height: req.body.height, 
            weight: req.body.weight
        }
    }
    const pokemon = await Pokemon.create(newPokemon) 
    res.redirect("/pokemon")
}

module.exports = create