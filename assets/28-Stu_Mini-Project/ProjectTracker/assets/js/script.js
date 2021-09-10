// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
// var projectDisplayEl = $('#project-display');
// var projectModalEl = $('#project-modal');
// var projectFormEl = $('#project-form');
// var projectNameInputEl = $('#project-name-input');
// var projectTypeInputEl = $('#project-type-input');
// var hourlyRateInputEl = $('#hourly-rate-input');
// var dueDateInputEl = $('#due-date-input');

// var projectHeaderEl = $("<tr>");
// var projectDetailEl = $("<td>");

// var projectNameTdEl = $('#project-name-input');
// var projectTypeTdEl = $('#project-type-input');
// var hourlyRateTdEl = $('#hourly-rate-input');
// var dueDateTdEl = $('#due-date-input');

// handle displaying the time
function displayTime() {
  var timeEntry = moment().format("MMM Do, YYYY, hh:mm:ss a");
  timeDisplayEl.text(timeEntry);

}

// // handle printing project data to the page
// function printProjectData(name, type, hourlyRate, dueDate) {
  
//   projectNameTdEl = $("<td>").addClass('ASSSSS').text(name);
//   projectTypeTdEl = $("<td>").addClass('ASSSSS').text(type);
//   hourlyRateTdEl = $("<td>").addClass('ASSSSS').text(hourlyRate);
//   dueDateTdEl = $("<td>").addClass('ASSSSS').text(dueDate);
//   projectHeaderEl.append(projectNameTdEl, projectTypeTdEl, hourlyRateTdEl, dueDateTdEl);
//   projectDisplayEl.append(projectHeaderEl);
  


//   // By listing each `<td>` variable as an argument, each one will be appended in that order
  
// }

// function calculateTotalEarnings(rate, days) {
 
// }

// function handleDeleteProject(event) {
 
// }

// // handle project form submission
// function handleProjectFormSubmit(event) {
 
// }

// projectFormEl.on('submit', handleProjectFormSubmit);
// projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);
// dueDateInputEl.datepicker({ minDate: 1 });

setInterval(displayTime, 1000);
