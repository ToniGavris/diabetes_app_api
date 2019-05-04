var express = require('express');
var router = express.Router();
var connection = require('../library/connection');

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.select('*')
    .get('logins',(error, result)=>{
       if(error) res.json({"status":"fail","message":"Something went wrong."});
        else res.json({"status":"success","logins":result});
    });
});

module.exports = router;
