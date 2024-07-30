const express = require('express')
const router = express.Router()
const controllers = require("../../controllers/client/chat.controller")


router.get('/',controllers.index )
router.post('/create',controllers.post )
router.get('/:id',controllers.getById )
router.post('/update',controllers.update )
router.patch("/delete",controllers.delete)



module.exports = router;