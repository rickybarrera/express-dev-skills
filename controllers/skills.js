const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteOne
};
function index(req,res) {
    res.render('skills/index', {
    skills: Skill.getAll()
    });
};
function newSkill(req, res) {
  res.render('skills/new');
};
function show(req, res) {
    res.render('skills/show', {
      skills: Skill.getOne(req.params.id),
    });
  };
  function deleteOne(req, res) {
    console.log(req.params.id);
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  };
  function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    Skill.create(req.body);
    res.redirect('/skills');
};
