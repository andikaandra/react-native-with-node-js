var express = require('express');
var connection = require('../connection');
var bodyParser = require('body-parser');
var router = express.Router();

var jsonParser = bodyParser.json()

router.get('/', function(req, res, next) {
    connection.query ("SELECT * FROM todos",  function (err, result, fields) {
        if (err) {
            return err;
        }
        res.json({ "todos" : result});
    });
});

router.get('/:id', function(req, res, next) {
    connection.query ("SELECT * FROM todos WHERE id = " + req.params.id,  function (err, result, fields) {
        if (err) {
            return err;
        } 
        res.json({ "todos" : result});
    });
});

router.post('/change-status', jsonParser, function (req, res) {
    connection.query ("UPDATE todos SET status = 1-status WHERE id = " + req.body.id,  function (err, result) {
        if (err) {
            return err;
        }
        res.json({ "todos" : req.body.id});
    });
    console.log(req.body);
})


module.exports = router;