let express = require('express');
let routes = express.Router();

routes.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type','text/json');
    res.json({
        users: [{
            name: 'Hcode',
            email: 'contato@gmail.com',
            id: 1
        }]
    });
})

routes.get('/admin', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type','text/json');
    res.json({
        users: []
    });
})

module.exports = routes;