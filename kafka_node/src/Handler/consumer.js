const kafka = require('../Handler/kafka.js');

const getCommand = async () => {
    const consumer = kafka.consumer({ groupId: 'ScrapingCmd' })

    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

    await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log({
            value: message.value.toString(),
        })
    },
    })
}

module.exports = getCommand;
