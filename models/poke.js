const mongoose = require("./connection")
const {Schema, model} = mongoose
const pokeSchema = new Schema({
    name: String,
    img: String,
    type: Array,
    stats: Object
})
const Poke = model("Poke", pokeSchema)
console.log(Poke)






module.exports = Poke