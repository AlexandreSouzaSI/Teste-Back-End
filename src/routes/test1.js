const { Router } = require('express');
const router = Router();


const { palindromosTest1 } = require('../controllers/Test1Controller');

router.post('/Test1', palindromosTest1)

module.exports = router;