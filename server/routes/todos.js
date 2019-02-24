var express = require('express');
var connection = require('../connection');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query ("SELECT * FROM todos",  function (err, result, fields) {
        if (err) {
            return "error";
        }
        res.json({ "todos" : result});
    });
});

router.get('/:id', function(req, res, next) {
    connection.query ("SELECT * FROM todos WHERE id = " + req.params.id,  function (err, result, fields) {
        if (err) {
            return "error";
        } 
        res.json({ "todos" : result});
    });
});

module.exports = router;