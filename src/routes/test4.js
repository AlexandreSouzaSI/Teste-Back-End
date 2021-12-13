const { Router } = require('express');
const router = Router();


const { cepTest4 } = require('../controllers/Test4Controller');

router.post('/Test4', cepTest4)

module.exports = router;