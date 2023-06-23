const mongoose = require("./connection")
const {Schema, model} = mongoose

const pokemonSchema = new Schema({
    name: String,
    img: String,
    type: [String],
    stats: {
      hp: Number,
      attack: Number,
      defense: Number,
      spattack: Number,
      spdefense: Number,
      speed: Number
  },
    damages: {
          normal: String,
          fire: String,
          water: String,
          electric: String,
          grass: String,
          ice: String,
          fight: String,
          poison: String,
          ground: String,
          flying: String,
          psychic: String,
          bug: String,
          rock: String,
          ghost: String,
          dragon: String,
          dark: String,
          steel: String
        },
});
const Pokemon = model("pokemon", pokemonSchema)

module.exports = Pokemon