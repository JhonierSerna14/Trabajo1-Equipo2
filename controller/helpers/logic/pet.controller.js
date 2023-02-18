/** Dto */
const petDto = require("../../model/dto/pet.dto");
const breedDto = require("../../model/dto/breed.dto");

exports.createPet = (req, res, next) => {
    let pet = {
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        color: req.body.color,
        weight: req.body.weight,
        feeding: req.body.feeding,
        contactInformation: req.body.contactInformation,
        breed_id: req.body.breedId
    };
    petDto.create(pet, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(201).json({
            info: data,
        });
    });
}

exports.updatePet = (req, res, next) => {
    let pet = {
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        color: req.body.color,
        weight: req.body.weight,
        feeding: req.body.feeding,
        contactInformation: req.body.contactInformation,
        breed_id: req.body.breedId,
    };
    petDto.update({ name: req.body.name }, pet, (err, data) => {
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
    petDto.getAll({}, (err, data) => {
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
    petDto.getByCode({ _id: req.params.code }, (err, data) => {
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

exports.deletePet = (req, res, next) => {
    petDto.delete({ name: req.body.name }, (err, data) => {
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