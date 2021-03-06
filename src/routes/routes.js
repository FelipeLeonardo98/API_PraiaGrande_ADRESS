const express = require('express');
const DistrictController = require('../controllers/districtController');
const StreetController = require('../controllers/streetController');
const router = express.Router();

// District routes list
router.post('/district', DistrictController.Insert);
router.get('/district', DistrictController.SelectAll);
router.put('/district/:id', DistrictController.Update);
router.get('/district/:id', DistrictController.SelectOne);
router.get('/district/name/:search', DistrictController.SelectByName);

// Street routes List
router.post('/street', StreetController.Insert);
router.get('/street', StreetController.SelectAll);
router.get('/street/details', StreetController.StreetDetails);
router.get('/street/name/:searchName', StreetController.SearchName);

// Record's List
router.get('/record/district/group', DistrictController.DistrictGroup);



module.exports = router;