module.exports = (app) => {

    app.get('/users', (req, res) => {
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
    
    app.get('/users/admin', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type','text/json');
        res.json({
            users: []
        });
    })

}