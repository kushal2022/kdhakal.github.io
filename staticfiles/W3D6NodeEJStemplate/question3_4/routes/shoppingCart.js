const express = require('express');
const router = express.Router();

const shoppingCartController = require('../controllers/shoppingCartController');

router.get('/', shoppingCartController.get);

module.exports = router;