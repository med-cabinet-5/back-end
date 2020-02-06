const router = require('express').Router();

const Saved = require('./saved-strains-model');

// ITS WORKINGGGGG ITS WORKINGGGG
// GET - retrieve all the saved strains from recommendations
router.get('/user/:id', (req, res) => {
    const id = req.params.id;

    console.log(req, req.params);

    Saved.find()
        .then(strains => {
            strains.user_id = id;

            res.status(200).json(strains)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Could not retrieve all saved strains.'
            })
        })
});


// ITS WORKINGGGGG ITS WORKINGGGG
// POST - add rec strain to saved list
router.post('/user/:id', (req, res) => {
    const id = req.params.id;

    req.body.user_id = id;

    Saved.add(req.body)
        .then(strain => {
            res.status(201).json({
                message: 'Successfully added the new strain.',
                strain
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error saving the new strain',
                err
            });
        });
});

// ITS WORKING ITS WORKING
// DELETE - remove saved rec strain from list
router.delete('/user/:id/:kush', (req, res) => {
    const id = req.params.id;

    req.body.user_id = id;

    Saved
        .remove(req.params.kush)
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