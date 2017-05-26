/*An Example of Module Pattern
    roster method: Get a sorted list of all students in all grades. Grades should sort as 1, 2, 3, etc..
    add method:  Add a student's name String to the roster for a grade
    grade method: Get a list of all students in alphabetically ordered name enrolled in a grade
*/
var Module = (function School() {
  var rosterObj = {};
  return {
      roster:  function() {
          return rosterObj;
      },
      add: function(student, grade) {
       if (rosterObj[grade] === undefined) rosterObj[grade] = [];
          rosterObj[grade].push(student);
      },
      grade: function(grade) {
       if (rosterObj[grade] !== undefined) return rosterObj[grade].sort();
        else return rosterObj[grade] = [];
      }
 }
})();

Module.add("Bei",1); //underfined
Module.add("Betty",2); //underfined
Module.add("Rose",2); //underfined
Module.roster(); // {'1':['bei'], '2':['Betty', 'Rose']}
Module.grade(2); // ['Betty','Rose']
