const Pokemon = require("../../models/pokemon")

async function destroy(req, res){
    const id = req.params.id
    await Pokemon.findByIdAndRemove(id)
    res.redirect("/pokemon")
}

module.exports = destroy