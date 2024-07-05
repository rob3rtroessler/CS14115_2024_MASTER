
// SVG Size
let width = 700,
	height = 500;


// Load CSV file
d3.csv("data/wealth-health-2014.csv", d => {

	d.Income = +d.Income;
	d.LifeExpectancy = +d.LifeExpectancy;
	d.Population = +d.Population;

	return d;
}).then( data => {

	// Analyze the dataset in the web console
	console.log(data);
	console.log("Countries: " + data.length);

	drawChart(data)

});

function drawChart(data){
	// do whatever

	// margin conventions
	let margin = {top: 40, right: 20, bottom: 40, left: 90},
		width = $('#chart-area').width() - margin.left - margin.right,
		height = 700 - margin.top - margin.bottom;


	let svg = d3.select("#chart-area").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	let circles = svg.selectAll('.country-circle').data(data)

	console.log(circles)



	let incomeScale = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.Income)])
		.range([0, width])

	let lifeExpectancyScale = d3.scaleLinear()
		.domain([d3.min(data, d=>d.LifeExpectancy), d3.max(data, d => d.LifeExpectancy)])
		.range([height, 0])

	let colorScale = d3.scaleOrdinal()
		.domain()
		.range([''])

	circles.enter()
		.append("circle")
		.attr("class", 'country-circle')
		.attr("r", 10)
		.attr("cx", d => incomeScale(d.Income))
		.attr("cy", d => lifeExpectancyScale(d.LifeExpectancy))


}
