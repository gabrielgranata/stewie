let express = require('express');
let mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('were connected!')
});


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