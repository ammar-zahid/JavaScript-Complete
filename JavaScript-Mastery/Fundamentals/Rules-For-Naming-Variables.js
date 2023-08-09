// cannot start with a number.
// we can use number in the end of name or in between.

// var 1name = "ammar"; (invalid)
var name1 = "ammar"; // (valid)
console.log(name1);

// can start with underscore
// can use underscore instead of space
// space not allowed

var first_name = "kichuu"; // (valid)
var _first_name = "chikuu"; // (valid)
console.log(first_name);
console.log(_first_name);

// can use dollar and underscore only

var $name = "dollar";
var name$ = "dollar";
console.log($name);
console.log(name$);

// use camel case for good practice
// avoid small case or snake case

var firstNameOfPerson = "flaana dhimkaana";
console.log(firstNameOfPerson);