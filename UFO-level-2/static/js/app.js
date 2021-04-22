// Assign the data from `data.js`
let tableData = data;
// Select the button
let button = d3.select("#filter-btn");
// Select the form
let form = d3.select("#form");
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element
  let inputElement = d3.select("#datetime");
  // Get the value property of the input element
  let inputValue = inputElement.property("value");
  // Use the form input to filter the data by date
  let filteredSightings = tableData.filter(sighting=>{
    return sighting.datetime === inputValue });
// Append to table
  let tbody = d3.select("tbody");

  filteredSightings.forEach((sight) => {
    let row = tbody.append("tr");
    Object.entries(sight).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);}
      );
  });
 

};

