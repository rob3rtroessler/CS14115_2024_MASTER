
// Global variable with 60 attractions (JSON format)
console.log(attractionData);

dataFiltering();

function dataFiltering() {
	let attractions = attractionData;

	console.log('hello from your js file. Good luck with the lab!')

	// sort
	let sortedAttractions = attractions.sort( (a,b) => {
		return b.Visitors - a.Visitors
	})

	console.log(sortedAttractions)

	// filter - top 5
	let topFiveAttractions = sortedAttractions.filter((attraction, i) => {
		return i < 5
	})

	console.log(topFiveAttractions)

	let selectBox = document.getElementById("attraction-category");
	let selectedValue = selectBox.options[selectBox.selectedIndex].value;

	console.log(selectedValue)


	renderBarChart(topFiveAttractions)








	/* **************************************************
	 *
	 * ADD YOUR CODE HERE (ARRAY/DATA MANIPULATION)
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

}