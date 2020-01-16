let amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0
    }
    connection.createChannel(function(error1, channel) {
        let queue = 'hello';

        channel.assertQueue(queue, {
            durable: false
        })
    
        console.log('Waiting for messages');
        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        })
    })
    
})