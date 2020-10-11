const express = require('express');
const DistrictController = require('../controllers/districtController');
const StreetController = require('../controllers/streetController');
const router = express.Router();


router.post('/district', DistrictController.Insert);
router.get('/district', DistrictController.SelectAll);
router.put('/district/:id', DistrictController.Update);
//router.post('/street', StreetController.Insert);


module.exports = router;