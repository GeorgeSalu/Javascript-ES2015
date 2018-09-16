let express = require('express');
let routes = express.Router();

routes.get('/users', (req, res) => {
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

module.exports = routes;