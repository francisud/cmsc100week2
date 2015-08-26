var student = require('./../controllers/student');
var teachers = require('./../controllers/teachers');

module.exports = function(router){
  router.route('/students')
   .get(student.find)
   .post(student.insert);
   
  
  router.route('/students/:id')
   .get(student.findOne)
   .put(student.update)
   .delete(student.remove);
   
  router.route('/teachers')
   .get(teachers.find)
   .post(teachers.add);
   
  return router;
}