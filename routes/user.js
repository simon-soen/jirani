const router = require('express').Router(); // Add parentheses here
const userController = require('../controllers/userController');


router.delete('/:id', userController.deleteUser);
router.get('/:id', userController.getUser);



module.exports = router;
