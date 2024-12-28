import * as d3 from "https://esm.sh/d3";

document.addEventListener("DOMContentLoaded", () => {
  const url =
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const w = 800;
      const h = 500;
      const padding = 60;
      const dataset = data;
      const xScale = d3
        .scaleLinear()
        .domain([
          d3.min(dataset, (d) => d.Year) - 2,
          d3.max(dataset, (d) => d.Year) + 2,
        ])
        .range([padding, w - padding]);
      const yScale = d3
        .scaleLinear()
        .domain([
          d3.min(
            dataset,
            (d) => +d.Time.split(":")[0] * 60 + +d.Time.split(":")[1]
          ),
          d3.max(
            dataset,
            (d) => +d.Time.split(":")[0] * 60 + +d.Time.split(":")[1]
          ) + 5,
        ])
        .range([h - padding, padding]);
      const svg = d3
        .select("div")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
      svg
        .append("text")
        .attr("x", w / 2)
        .attr("y", padding / 2)
        .attr("font-size", "30px")
        .attr("text-anchor", "middle")
        .attr("id", "title")
        .text("Doping in Professional Bicycle Racing");
      svg
        .selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("data-xvalue", (d) => d.Year)
        .attr("data-yvalue", (d) => d.Time)
        .attr("class", "dot")
        .attr("fill", "navy")
        .attr("r", 5)
        .attr("cx", (d, i) => xScale(d.Year))
        .attr("cy", (d, i) =>
          yScale(+d.Time.split(":")[0] * 60 + +d.Time.split(":")[1])
        )
        .append("title")
        .text(
          (d) =>
            `${d.Name}: ${d.Nationality}\nYear: ${d.Year}, Time: ${d.Time}\n\n${d.Doping}`
        );

      const xAxis = d3.axisBottom(xScale);
      svg
        .append("g")
        .attr("id", "x-axis")
        .attr("transform", "translate(0, " + (h - padding) + ")")
        .call(xAxis);

      const yAxis = d3.axisLeft(yScale).tickFormat((d) => {
        const minutes = Math.floor(d / 60);
        const seconds = d % 60;
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
      });
      svg
        .append("g")
        .attr("id", "y-axis")
        .attr("transform", "translate(" + padding + ", 0)")
        .call(yAxis);
    });
});
