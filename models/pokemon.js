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
    misc: {
          height: Number,
          weight: Number,
        },
});
const Pokemon = model("pokemon", pokemonSchema)

module.exports = Pokemon