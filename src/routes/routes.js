const express = require('express');
const DistrictController = require('../controllers/districtController');
const router = express.Router();


router.post('/district', DistrictController.Insert);
router.get('/district', DistrictController.SelectAll);


module.exports = router;