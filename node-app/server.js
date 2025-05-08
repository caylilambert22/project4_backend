const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const userRoutes = require('../routes/users');
const forumRoutes = require('../routes/forum');

const app = express();


app.use(cors());
app.use(bodyParser.json());


app.use('/api/users', userRoutes);
app.use('/api/forum', forumRoutes);


app.listen(3003, () => console.log('Server is running on localhost:3003'));
