// Setting the use of Model Usuario and dependency http=status
const status = require('http-status');
const { NOT_FOUND } = require('http-status');
const Street = require('../models/street');

exports.Insert = (req, res, next) => {
    const nm_street = req.body.nm_street;

    Street.create({
        nm_street: nm_street
    })
        .then(street => {
            if (street) {
                res.status(status.OK).send(street);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(`An error has ocurred ${error}`));
}


