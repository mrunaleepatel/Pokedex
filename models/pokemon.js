const mongoose = require("./connection")
const {Schema, model} = mongoose

const pokemonSchema = new Schema({
    name: String,
    img: String,
    type: Array,
    stats: Object
})
const Pokemon = model("Pokemon", pokemonSchema)

module.exports = Pokemon