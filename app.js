let express = require('express');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('were connected!')
});

let app = express();

let kittySchema = new mongoose.Schema({
    name: String
})

let Kitten = mongoose.model('Kitten', kittySchema);

let silence  = new Kitten({name: 'Silence'})

Kitten.create(silence)

app.use(express.static('public'));

let port = '3000'
let ip = '127.0.0.1'

app.get('/', function(req, res) {
    res.send('INDEX')
}
)
app.listen(port, function(){
    console.log("Server has started");
})