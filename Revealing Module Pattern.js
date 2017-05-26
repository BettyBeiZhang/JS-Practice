//An Example of Revealing Module Pattern
var Module = (function() {
  var rosterObj = {};

  // Get a sorted list of all students in all grades. Grades should sort as 1, 2, 3, etc..
  var roster = function() {
    return rosterObj;
  }

 // Add a student's name String to the roster for a grade
  var add = function(student, grade) {
    if (rosterObj[grade] === undefined) rosterObj[grade] = [];
     rosterObj[grade].push(student);
  };

  //Get a list of all students in alphabetically ordered name enrolled in a grade
  var grade = function(grade) {
    if (rosterObj[grade] !== undefined) return rosterObj[grade].sort();
    else return rosterObj[grade] = [];
  };

  return {
    roster: roster,
    add: add,
    grade:grade
  };
})();

Module.add("Bei",1); //underfined
Module.add("Betty",2); //underfined
Module.add("Rose",2); //underfined
Module.roster(); // {'1':['bei'], '2':['Betty', 'Rose']}
Module.grade(2); // ['Betty','Rose']
