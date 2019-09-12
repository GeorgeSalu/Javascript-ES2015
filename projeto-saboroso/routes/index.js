var conn = require('./../inc/db');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  conn.query(`select * from tb_menus order by title`, (err, results) => {
    if(err) {
      console.log(err);
    }
    console.log("result "+results)
    res.render('index', {
       title: 'Restaurante Saborosos!',
       menus: results 
    });

  })
});

router.get('/contacts', function(req, res, next) {
  res.render('contact', {
    title: 'Restaurante Saborosos!'
  });
})

router.get('/menus', function(req, res, next) {
  res.render('menu', {
    title: 'Restaurante Saborosos!'
  });
})

router.get('/reservations', function(req, res, next) {
  res.render('reservation', {
    title: 'Restaurante Saborosos!'
  });
})

router.get('/services', function(req, res, next) {
  res.render('services', {
    title: 'Restaurante Saborosos!'
  });
})

module.exports = router;
