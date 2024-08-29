const express = require("express")
const userController = require('../Controller/useController')

const router=new express.Router()

router.post('/login',userController.login);
router.post('/register',userController.register);
router.get('/users', userController.getUsers); 


module.exports = router