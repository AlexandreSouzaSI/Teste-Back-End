const { Router } = require('express');
const router = Router();


const { veiculosTest3, GetVeiculos } = require('../controllers/Test3Controller');

router.post('/Test3', veiculosTest3)
router.get('/Test3', GetVeiculos)

module.exports = router;