//An Example of Destructuring assignment syntax: destructure objects

var instructor = {
    fact: {
      moreFacts: {
        homeTown: "West Orange",
        state: "NJ"
      }
    }
}

var {homeTown} = instructor.fact.moreFacts;
var {state: somethingNew} = instructor.fact.moreFacts; //


homeTown;  //"West Orange"
somethingNew;  //"NJ"


// An example of destructure array
var arr = [1,2,3,4];
var [a,b,c,d] = arr;

a; // 1
b; // 2
c; // 3
d; // 4

var [first,second] = [1,2];

first; // 1
second; // 2
