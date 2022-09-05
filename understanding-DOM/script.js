
let currentTime = new Date(); // An empty constructor of the Date object


console.log(currentTime.getFullYear()); // Logging the year from the newly created Date object

let originalDate = new Date(2000, 1, 1); // Date from which we need to calculate difference.

let timeDomObject = document.getElementById("time"); // DOM object whose text we need to change.

timeDomObject.innerText = currentTime.getFullYear() - originalDate.getFullYear(); // Changing the text

