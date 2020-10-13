// Setting the use of Model Usuario and dependency http=status
const status = require('http-status');
const { NOT_FOUND } = require('http-status');
const sequelize = require('../database/database');
const District = require('../models/district');
const Street = require('../models/street');

exports.Insert = async (req, res, next) => {
    const newStreet = req.body.nm_street;
    const districtName = req.body.nm_district;

    const { id_district } = await District.findOne({ where: { nm_district: districtName } });
    //console.log(id_district);

    Street.create({
        nm_street: newStreet,
        districtIdDistrict: id_district,
    })
        .then(street => {
            if (street) {
                res.status(status.OK).send(street);
            } else {
                res.status(status.NOT_FOUND).send(`District  ${districtName}  not found! Register it before`);
            }
        })
        .catch(error => next(`An error has ocurred ${error}`));
};

// Attempt of use Procedure
/* exports.Insert = async (req, res, next) => {
    //sequelize.query('CALL spcName(@param1, @param2, @param3, @param4);',
    // [value1, value2, value3, value4]) 
    const newStreet = req.body.nm_street;
    const districtName = req.body.nm_district;
    //console.log(newStreet + " - " + districtName);
    const returnProcedure = await sequelize.query(`CALL sp_insert_street (@newStreet,@districtName); [${newStreet}, ${districtName}]`)
        .then(returnProcedure => {
            if (returnProcedure) {
                res.status(status.OK).send(returnProcedure);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        }).catch(error => next(`Wait and look this error:  ${error}`));

};*/

exports.SelectAll = (req, res, next) => {
    Street.findAll()
        .then(street => {
            if (street) {
                res.status(status.OK).send(street);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        }).catch(error => next(`Wait and pay attention at this error:  ${error}`));
};