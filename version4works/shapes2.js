const data = [1, 2, 3, 6, 12, 8];

const svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");
const spaceBetween = 30;

svg.selectAll("rect")
	.data(data)
	.enter().append("rect")
		.attr("height", (d,i) => d * 10)
		.attr("width", "4")
		.attr("x", (d,i) => (i * spaceBetween) + spaceBetween)
		.attr("y", (d,i) => 200 - (d * 10))