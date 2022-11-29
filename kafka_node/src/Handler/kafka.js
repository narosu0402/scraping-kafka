const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId : "ScrapingCmd",
    brokers : ['kafka1:9092', 'kafka2:9092'],
})

module.exports = kafka;

