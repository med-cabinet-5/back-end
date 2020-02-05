const router = require('express').Router();

const Saved = require('./saved-strains-model');

// GET - retrieve all the saved strains from recommendations
router.get('/', (req, res) => {
    Saved.find()
        .then(strains => {
            res.status(200).json(strains)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Could not retrieve all saved strains.'
            })
        })
});

// POST - add rec strain to saved list
router.post('/', (req, res) => {
    Saved.add(req.body)
        .then(strain => {
            res.status(201).json(strain)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error saving the new strain',
                err
            });
        });
});

// DELETE - remove saved rec strain from list
router.remove('/:id', (req, res) => {
    Users
        .remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ 
                    message: 'The saved strain has been deleted.' 
                });
            } else {
                res.status(404).json({ 
                    message: 'The saved strain could not be found.' 
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error removing the saved strain', error
            });
        });
});

module.exports = router;