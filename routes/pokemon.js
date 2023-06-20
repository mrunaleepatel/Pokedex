const Router = require("express").Router
const router = Router()

// INDEX 
app.get('/pokemon', (req, res) => {
    // render a list of images for all Pokémon
    res.render('index', { pokemonList: Pokemon });
  });


// SHOW
app.get('/:id', (req, res) => {
res.render('show.ejs', { data: Pokemon[req.params.id] });
});

// NEW 
app.get('/pokemon/new', (req, res) => {
    res.send('Form for creating a new Pokémon');
  });

// EDIT
app.get('/pokemon/:id/edit', (req, res) => {
    const pokemonId = req.params.id;
    res.send(`Form for editing Pokémon with ID ${pokemonId}`);
});

// CREATE 
app.post('/pokemon', (req, res) => {
    res.send('Create a new Pokémon');
});

// UPDATE 
app.put('/pokemon/:id', (req, res) => {
    const pokemonId = req.params.id;
    res.send(`Update Pokémon with ID ${pokemonId}`);
});

// DESTROY 
app.delete('/pokemon/:id', (req, res) => {
    const pokemonId = req.params.id;
    res.send(`Delete Pokémon with ID ${pokemonId}`);
});

module.exports = router