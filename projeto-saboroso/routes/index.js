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

module.exports = router;
