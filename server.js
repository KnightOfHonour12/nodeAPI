const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 80;
mongoose.connect('mongodb://dbuser:developer1@ds044989.mlab.com:44989/t6-test', { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.json());

require('./routes/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
