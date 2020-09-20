// Setting the use of Model Usuario and dependency http=status
const status = require('http-status');
const { NOT_FOUND } = require('http-status');
const District = require('../models/district');

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