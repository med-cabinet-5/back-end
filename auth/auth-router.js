const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../user/user-model');
const generateToken = require('./token-mw');
const { validateUser } = require('./auth-helper');

router.post('/register', (req, res) => {
    const user = req.body;
    // always validate
    const validateRes = validateUser(user);
    // hash the password
    const hash = bcrypt.hashSync(user.password, 14);
    // override the plain text password with the hash
    user.password = hash;
  
    if(validateRes.isSuccessful === true){
      Users.add(user)
        .then(saved => {
          res.status(201).json({
            message: "Successfully registered new user!",
            saved
          });
        })
        .catch(error => {
          res.status(500).json(error.message);
        });
    } else {
      res.status(400).json({
        message: "Invalid information about the user. See errors for more details.",
        errors: validateRes.errors
      });
    }
  });
  
  router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        // check that passwords match
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({ 
            message: `Welcome back, ${user.username}!`, 
            user, 
            token 
          });
        } else {
          // return 401 if the password or username are invalid
          res.status(401).json({ message: 'Invalid credentials!' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  module.exports = router;


/* 

Lexie first-made account: 
{
	"first_name":"Lexie",
	"last_name": "Jiang",
	"username": "Paimon",
	"email": "lexiejiang@yahoo.com",
	"password": "allhails8n"
}

Login:
{
	"username": "Paimon",
	"password": "allhails8n"
}

returned
{
    "message": "Welcome back, Paimon!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6IlBhaW1vbiIsImlhdCI6MTU4MDc1NjI3NywiZXhwIjoxNTgwODQyNjc3fQ.jwcMECgnrpcVFN2lcog2im2JQALM4anVCPp-GEpxys8"
}
*/
