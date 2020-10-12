// Setting the use of Model Usuario and dependency http=status
const status = require('http-status');
const { NOT_FOUND } = require('http-status');
const District = require('../models/district');
const sequelize = require('../database/database');

// "Insert" method
exports.Insert = (req, res, next) => {
    const nm_district = req.body.nm_district;
    const ds_zone = req.body.ds_zone;

    District.create({
        nm_district: nm_district,
        ds_zone: ds_zone,
    })
        .then(district => {
            if (district) {
                res.status(status.OK).send(district);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(`An error has ocurred ${error}`));
}

// "Select *" method
exports.SelectAll = (req, res, next) => {
    District.findAll()
        .then(district => {
            if (district) {
                res.status(status.OK).send(district);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(`Sorry, an error ocurred with SelectAll:   ${error}`));
};

// "Update" method
exports.Update = (req, res, next) => {
    const id = req.params.id;
    const newDistrict = req.body.nm_district;
    const newZone = req.body.ds_zone;

    District.findByPk(id)
        .then(district => {
            if (district) {
                district.update({
                    nm_district: newDistrict,
                    ds_zone: newZone
                },
                    { where: { id_district: id } }

                ).then(() => {
                    res.status(status.OK).send(`District with id ${id} updated with success`)
                }).catch(error => next(`Ops Attention! Look the following error: ${error}`))
            } else {
                res.status(status.NOT_FOUND).send(`Sorry, District with id ${id} not found!`);
            }
        }).catch(error => next(`Ops Attention! Look the following error: ${error}`));
};

// Select * from where id = ...
exports.SelectOne = (req, res, next) => {
    const id = req.params.id;

    District.findByPk(id)
        .then(district => {
            if (district) {
                res.status(status.OK).send(district);
            } else {
                res.status(status.NOT_FOUND).send(`District with id ${id} not was found.`);
            }
        }).catch(error => next(`Warning! Pay attention on following error: ${error}`));
};

// Select * from table where name = ...
exports.SelectByName = (req, res, next) => {
    const search = req.params.search;

    District.findOne({ where: { nm_district: search } })
        .then(district => {
            if (district) {
                res.status(status.OK).send(district);
            } else {
                res.status(status.NOT_FOUND).send(`We did not find any district with name ${search}`);
            }
        }).catch(error => next(`ATTENTION: ${error} . Do a contact to Support Squad OR read the API's documentation`));
};

exports.DistrictGroup = async (req, res, next) => {
    // Without async/await
    /*sequelize.query('SELECT * FROM vw_zoneGroup;')
        .then(result => {
            if (result) {
                res.status(status.OK).send(result);
            } else {
                res.status(status.NOT_FOUND).send(`Sorry, we did not any result at this requision`);
            }
        }).catch(error => next(`ATTENTION: ${error} . Do a contact to Support Squad OR read the API's documentation`));
        */
    //With async/await
    const [result] = await sequelize.query('SELECT * FROM vw_zoneGroup;');
    if (result) {
        res.status(status.OK).send(result);
    } else {
        res.status(status.NOT_FOUND).send(`Sorry, we did not any result at this requision`);
    }
}; 