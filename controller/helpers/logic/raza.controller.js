/** Dto */
const breedDto = require("../../model/dto/breed.dto");

exports.createBreed = (req, res, next) => {
    let breed = {
        name: req.body.name,
        geographicalOrigin: req.body.geographicalOrigin,
        usage: req.body.usage,
        lifeExpectancy: req.body.lifeExpectancy,
        habitat: req.body.habitat,
    };
    breedDto.create(breed, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(201).json({
            info: data,
        });
    });
};

exports.updateBreed = (req, res, next) => {
    let breed = {
        name: req.body.name,
        geographicalOrigin: req.body.geographicalOrigin,
        usage: req.body.usage,
        lifeExpectancy: req.body.lifeExpectancy,
        habitat: req.body.habitat,
    };
    breedDto.update({ name: req.body.name }, breed, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }

        res.status(201).json({
            info: data,
        });
    });
};

exports.getAll = (req, res, next) => {
    breedDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(200).json({
            info: data,
        });
    });
};

exports.getByCode = (req, res, next) => {
    breedDto.getByCode({ _id: req.params.code }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(200).json({
            info: data,
        });
    });
};

exports.deleteBreed = (req, res, next) => {
    breedDto.delete({ name: req.body.name }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(201).json({
            info: data,
        });
    });
};