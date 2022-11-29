const express = require('express')
const getCommand = require('../src/Handler/consumer.js')
const sendCommand = require('../src/Handler/producer.js')

const app = express();

app.get('/', (req, res) => {
    res.send("kafka test");
})

app.get('/consumer', (req, res) => {
    getCommand();
})

app.get('/producer', (req, res) => {
    sendCommand();
})

module.exports = app;
