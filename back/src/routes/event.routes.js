const express = require('express');
const router = express.Router();
const eventContoller = require("../controllers/event.controller");


router.post('/create', eventContoller.Create);

router.get('/', eventContoller.GetAll);

router.get('/:id', eventContoller.GetById);

router.patch('/update', eventContoller.Update);

router.delete('/delete', eventContoller.Delete);


module.exports = router;