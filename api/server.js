const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
// const strainsRouter = require('../strains/strains-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/user', authenticate, usersRouter)
// server.use('/api/strains', authenticate, strainsRouter);

server.get("/", (req, res) => {
    res.json({ message: "ARJGJKSDHFKJSDHFSDHG. It's alive!!!!!!! THE API IS ONLINE." });
});

module.exports = server;