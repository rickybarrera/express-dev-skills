const skills = [
    {id: 125223, skill: 'procrastinate', excels: true},
    {id: 127904, skill: 'Learn HTML', done: true},
    {id: 139608, skill: 'Finish SEI', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }
  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }