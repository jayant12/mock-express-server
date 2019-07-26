var express = require('express');
var router = express.Router();

const array = [
  {name: 'Jayant'},
  {name: 'Aayush'},
]

const exampleUser = {
  login: "jayant12",
  id: 5629829,
  avatar_url: "https://avatars2.githubusercontent.com/u/5629829?v=4",
  type: "User",
  site_admin: false,
  name: "jayant pareek"
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/first', function(req, res, next) {
  res.send(exampleUser);
});

router.post('/second', function(req, res, next) {
  array.push(req.body);
  res.send(array);
});

router.get('/third', function(req, res, next) {
  res.send(array);
});


module.exports = router;
