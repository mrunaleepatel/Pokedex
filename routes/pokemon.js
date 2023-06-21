const Router = require("express").Router
const controller = require("../controllers/pokemon")

const router = Router()

router.get("/", controller.index)

router.get("/new", controller.new)

router.delete("/:id", controller.destroy)

router.put("/:id", controller.update)

router.post("/", controller.create)

router.get("/:id/edit", controller.edit)

router.get("/:id", controller.show)

module.exports = router