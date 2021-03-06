d3.csv("data/boxplots.csv", scatterplot)

function scatterplot(data) {

  var xScale = d3.scale.linear().domain([1,8]).range([20,470]);  // Domein = maximale bereik, range is aantal pixels dat beschikbaar is.
  var yScale = d3.scale.linear().domain([0,100]).range([480,20]);

  var yAxis = d3.svg.axis()     // yAxis wordt aangemaaky
                .scale(yScale)  // Schaal op basis van eerder gedeclareerde schaal
                .orient('right')  // Rechts uitgelijnt
                .ticks(8)       // Verdeeld over 8 ticks
                .tickSize(-470);  // ??

  d3.select('svg').append('g')  // Groupeer de as
    .attr('transform', 'translate(470,0)')  // Bepaal de positie van de as
    .attr('id', 'yAxisG')  // Wijst een ID toe aan de as
    .call(yAxis);   // As wordt hier via een call ingeladen en gebonden aan het G element.

  var xAxis = d3.svg.axis()       // Hier wordt de X axis aangemaakt
                .scale(xScale)
                .orient('bottom')
                .tickSize(-470)
                .tickValues([1,2,3,4,5,6,7]);  // Waardes voor de ticks wordt hier meegegeven

  d3.select('svg').append('g')    // X as wordt gegroupeerd en gecalled
    .attr('transform', 'translate(0,480)')
    .attr('id', 'xAxisG')
    .call(xAxis);

  d3.select('svg').selectAll('circle.median')
                  .data(data)
                  .enter()
                  .append('circle')  // append circle to each data point
                  .attr('class', 'tweets')  // add class
                  .attr('r', 5)  // declare radius
                  .attr('cx', function(d){ return xScale(d.day) })  // Position X as based on date
                  .attr('cy', function(d){ return yScale(d.median) })  // Position Y as based on gemiddelde
                  .style("fill", "darkgray");

}
