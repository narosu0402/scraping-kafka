const kafka = require('../Handler/kafka.js');

const sendCommand = async () => {
    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
    topic: 'test-topic',
    messages: [
        { value: 'Hello KafkaJS user!' },
    ],
    })

    await producer.disconnect()
}

module.exports = sendCommand;


