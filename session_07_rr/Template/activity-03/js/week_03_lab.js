
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

	console.log("sorted", sortedAttractions)


	let selectBox = document.getElementById("attraction-category");
	let selectedValue = selectBox.options[selectBox.selectedIndex].value;

	console.log("selected value", selectedValue)


	// filter by attraction after sorting
	// BUT ONLY IF selectedValue !== all

	let filteredAndSortedAttractions = sortedAttractions

	if (selectedValue !== 'all'){
		filteredAndSortedAttractions = sortedAttractions.filter((attraction,i) => {
			console.log(attraction.Category, selectedValue)
			return attraction.Category === selectedValue
		})
	}


	console.log('filtered', filteredAndSortedAttractions)




	// filter - top 5
	let topFiveAttractions = filteredAndSortedAttractions.filter((attraction, i) => {
		return i < 5
	})

	console.log("top 5", topFiveAttractions)


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