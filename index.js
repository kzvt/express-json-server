const express = require('express');
const server = express();
require('./data/middlewares/test')(server);


server.listen(3000);