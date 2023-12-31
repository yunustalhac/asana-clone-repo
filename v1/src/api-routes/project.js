const express = require("express")
const {create, index} = require("../controllers/project")
const router = express.Router()

router.get("/", index)
router.post("/", create)

module.exports = {
    router
}