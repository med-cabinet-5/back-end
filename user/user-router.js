const router = require('express').Router();

const Users = require('../user/user-model');

// GET - retrieve all users
router.get('/', (req, res) => {
    Users.getAll()
        .then(user => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ error: 'Cannot retrieve all users' })
        });
});

// PUT - update user by ID
router.put('/:id', (req, res) => {
    Users.update(res.params.id, req.body)
        .then(user => {
            if(user) {
                res.status(200).json({
                    message: 'User has been updated.',
                    user
                });
            } else {
                res.status(404).json({
                    message: 'The user could not be found.'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: 'Error updating the user.',
                error
            });
        });
});

// DELETE - remove user by ID

router.delete('/:id', (req, res) => {
    Users
        .remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ 
                    message: 'The user has been deleted.' 
                });
            } else {
                res.status(404).json({ 
                    message: 'The user could not be found.' 
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error removing the user', error
            });
        });
});

module.exports = router;