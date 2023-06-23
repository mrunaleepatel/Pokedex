const Pokemon = require("./pokemon")
const mongoose = require("./connection")
const pokemon = require("./seedData")

async function seed(){
    await Pokemon.deleteMany({})
    const createdPokemon = await Pokemon.create(pokemon)
    console.log(createdPokemon.length)
    console.log(createdPokemon[0])
}

mongoose.connection.on("open", () => {seed()})