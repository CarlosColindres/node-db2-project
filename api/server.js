const express = require("express");

const carsRouter = require('./cars/carsRouter')

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter)

server.get('/', (_, res) => {
    res.json('Welcome to my api')
})

module.exports = server;