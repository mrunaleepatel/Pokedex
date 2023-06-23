const Pokemon = require("../../models/pokemon");

async function index(req, res) {
  const pokemon = await Pokemon.find();
  console.log(pokemon[0])
  res.render("pokemon/index.ejs", { pokemon });
}

module.exports = index;