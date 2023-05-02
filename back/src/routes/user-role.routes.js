const express = require('express');
const router = express.Router();
const userRoleController = require("../controllers/user-role.controller");


router.post('/create', userRoleController.Create);

router.get('/', userRoleController.GetAll);

router.get('/:id', userRoleController.GetById);

router.patch('/update', userRoleController.Update);

router.delete('/delete', userRoleController.Delete);


module.exports = router;