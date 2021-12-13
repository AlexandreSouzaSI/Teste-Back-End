const { Router } = require('express');
const router = Router();


const { comprasTest2 } = require('../controllers/Test2Controller');

router.post('/Test2', comprasTest2)

module.exports = router;