var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var medium = require("../controllers/mediumController");

router.use(bodyParser.urlencoded({
    extended: true
}));

/* GET home page. */
router.get("/", function(req, res, next) {
        res.render('index', { title: 'Medium Parser Docs' });
    });

router.post("/", medium.parse);

module.exports = router;
