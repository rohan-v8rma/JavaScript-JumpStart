// Execute in ITOP grade history.

function gradeSum() {
		
	const gradeObj = {}
	
	// Two elements with the same class :p
	const tableElement = document.querySelectorAll('.customTable')[1];

	// Getting the body of the table.
	const tBody = tableElement.querySelector('tbody');


	const tableContentElements = tBody.querySelectorAll('.tableContent');

	for(tableContentElement of tableContentElements) {

		// Checking if grade of the course is mentioned.
		if(tableContentElement.children[5]) {
			if(gradeObj[tableContentElement.children[5].innerText] === undefined) {
				// Initializing the newly found grade
				gradeObj[tableContentElement.children[5].innerText] = 0.0;
			}
			
			gradeObj[tableContentElement.children[5].innerText] += parseFloat(tableContentElement.children[4].innerText);
			
			if(tableContentElement.children[5].innerText === 'P') {
				console.log(tableContentElement.children[2].innerText);
			}
		}
	}

	for (const [key, value] of Object.entries(gradeObj)) {
		console.log(`${key}: ${value}`);
	}
}
