var student = require('./../controllers/student');
var teachers = require('./../controllers/teachers');

module.exports = function(router){
  router.route('/students')
   .get(student.find);
   
  router.route('/teachers')
   .get(teachers.find)
   .post(teachers.add);
   
  return router;
}