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
  // Select the input element & Get the value property of the input element
  let dateInputValue = d3.select("#datetime").property("value");
  let cityInputValue = d3.select("#city").property("value");
  let stateInputValue = d3.select("#state").property("value");
  let countryInputValue = d3.select("#country").property("value");
  let shapeInputValue = d3.select("#shape").property("value");
  // Use the form input to filter the data
  let filteredByDate = tableData.filter(sighting=>{
    return sighting.datetime === dateInputValue });  
  let filteredByCity = tableData.filter(sighting=>{
    return sighting.city === cityInputValue });
  let filteredByState = tableData.filter(sighting=>{
    return sighting.state === stateInputValue });
  let filteredByCountry = tableData.filter(sighting=>{
    return sighting.country === countryInputValue });  
  let filteredByShape = tableData.filter(sighting=>{
    return sighting.shape === shapeInputValue });
// Append to table

  let tbody = d3.select("tbody");

  filteredByDate.forEach((sight) => {
    let row = tbody.append("tr");
    Object.entries(sight).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);}
      );
  });

  filteredByCity.forEach((sight) => {
    let row = tbody.append("tr");
    Object.entries(sight).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);}
      );
  });

  filteredByState.forEach((sight) => {
    let row = tbody.append("tr");
    Object.entries(sight).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);}
      );
  });

  filteredByCountry.forEach((sight) => {
    let row = tbody.append("tr");
    Object.entries(sight).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);}
      );
  });

  filteredByShape.forEach((sight) => {
    let row = tbody.append("tr");
    Object.entries(sight).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);}
      );
  });

  if (filteredByDate.length === 0 
    & filteredByCity.length === 0 
    & filteredByState.length === 0 
    & filteredByCountry.length === 0 
    & filteredByCountry.length === 0) {
    alert("If there is no query or a match, results may not be shown. We suggest trying a placeholder value to get a graspt of the data.");
  }



};