const router = require('express').Router();

const Strains = require('./strains-model');

// GET - retrieve all the strains
router.get('/', (req, res) => {
    Strains.find()
        .then(strains => {
            res.status(200).json(strains)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Could not retrieve all strains.'
            })
        })
});

// POST - add strains
router.post('/', (req, res) => {
    Strains.add(req.body)
        .then(strain => {
            res.status(201).json(strain)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error adding the new strain',
                err
            });
        });
});

module.exports = router;