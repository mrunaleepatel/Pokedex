const Poke = require("./poke")
const mongoose = require("./connection")
const pokes = require("./pokeData")

async function pokedex(){
    await Poke.deleteMany({})
    const createdPokes = await Poke.create(pokes)
    console.log(createdPokes.length)
    console.log(createdPokes[0])
}

mongoose.connection.on("open", () => {pokedex()})