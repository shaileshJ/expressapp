const express = require('express');
const routes = require('./routes');
const cors = require('cors'); // Import the cors package
require('dotenv').config();

//for swagger documentations
const YAML = require('yamljs');
const swaggerui = require('swagger-ui-express');
const swaggerdocument = YAML.load('./utils/api.yaml');

const app = express();

//const PORT = 3001;
console.log(process.env.APP_PORT);
const PORT = process.env.APP_PORT || 3001;

// Use the cors middleware
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Your other routes and configurations

app.use('/api', routes);
//for swagger documentaqtions
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerdocument));

app.listen(PORT, () => {
    console.log(`Server is listening ${PORT}`);
});