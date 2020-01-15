let express = require('express');
    // mongoose = require('mongoose');

let app = express();

let url = 'mongodb://localhost:27017';
// mongoose.connect(url)

// app.use(express.static('public'));

let port = '3000'
let ip = '127.0.0.1'

app.get('/', function(req, res) {
    res.send('INDEX')
}
)
app.listen(port, function(){
    console.log("Server has started");
})