var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/file', function(req, res, next) {
    
    let path = './'+req.query.path;

    if(fs.existsSync()) {

        fs.readFile(path, (err, data) => {
            if(err) {
                res.status(400).json({
                    error: err
                })
            } else {
                res.status(200).end(data);
            }
        })

    } else {
        res.status(404).json({
            erro: 'File not found'
        })
    }

});
  

router.delete('/file', (req, res) => {

    let form = new formidable.IncomingForm({
        uploadDir: './upload',
        keepExtensions: true
    })

    form.parse(req, (err, fields, files) => {

        let path = "./"+fields.path;

        if(fs.existsSync(fields.path)) {

            fs.unlink(path, err => {
                if(err) {
                    res.status(400).json({
                        err
                    });
                } else {
                    res.json({
                        fields
                    });
                }
            })

        }

        res.json({
            fields
        });

    })

})

router.post('/upload', (req, res) => {

    let form = new formidable.IncomingForm({
        uploadDir: './upload',
        keepExtensions: true
    })

    form.parse(req, (err, fields, files) => {

        res.json({
            files
        });

    })

})

module.exports = router;
