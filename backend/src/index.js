const express = require ('express');
const mongoose = require ('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://everton:34773132@cluster0-gl5nx.mongodb.net/omnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);



app.listen(3333);