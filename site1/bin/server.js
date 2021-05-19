const express = require('express');
const app = express();
var router = express.Router();

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

router.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.listen(8000, () => {
    console.log('server is listening on port 2020');
});
