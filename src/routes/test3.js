const { Router } = require('express');
const router = Router();


const { veiculosTest3 } = require('../controllers/Test3Controller');

router.post('/Test3', veiculosTest3)

module.exports = router;