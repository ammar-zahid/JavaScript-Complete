// Question: Write a function called filterByValue that takes an object and a value as parameters and returns a new object that contains only the properties with the given value.

function filterByValue(obj, value) {
    var filteredObj = {};

    for (var key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === value) {
            filteredObj[key] = obj[key];
        }
    }

    return filteredObj;
}

var obj = {
    name: 'John',
    age: 25,
    city: 'New York',
    occupation: 'Engineer'
  };
  
  var filteredObject = filterByValue(obj, 25);
  console.log(filteredObject);
