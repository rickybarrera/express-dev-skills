var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
// GET /todos/:id
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create); 
router.delete('/:id', skillsCtrl.delete);
module.exports = router;
