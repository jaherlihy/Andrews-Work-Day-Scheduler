var timeDisplayEl = $('#time-display');
var blockTime = [0900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700];

var blockTime = $("#0900, #1000, #1100, #1200, #1300, #1400, #1500, #1600, #1700");


function displayTime() {
  var rightNow = moment().format('MMM DD YYYY[,] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}




$(".saveBtn").on("click", function () {
	
	console.log(this);
	var text = $(this).siblings(".description").val();
	var time = $(this).parent().attr("id"); 

	   localStorage.setItem(time, text);
    })



//this uses peristent memory to display saved user notes from previous sessions
 $("#0900 .description").val(localStorage.getItem("0900"));
 $("#1000 .description").val(localStorage.getItem("1000"));
 $("#1100 .description").val(localStorage.getItem("1100"));
 $("#1200 .description").val(localStorage.getItem("1200"));
 $("#1300 .description").val(localStorage.getItem("1300"));
 $("#1400 .description").val(localStorage.getItem("1400"));
 $("#1500 .description").val(localStorage.getItem("1500"));
 $("#1600 .description").val(localStorage.getItem("1600"));
 $("#1700 .description").val(localStorage.getItem("1700"));


setInterval(displayTime, 1000);



var currentTime = moment().hour();
//if then statement that sets the timeblock colors according to current time
if (currentTime < blockTime) {
	$(this).addClass("past");	
	$(this).removeClass("present");
	$(this).removeClass("future");
	
} else if (rightNow === blockTime) {

	$(this).addClass("present");
	$(this).removeClass("future");
	$(this).removeClass("past");

} else {

	$(this).addClass("future");
	$(this).removeClass("present");
	$(this).removeClass("past");	

}



// var arr = [13, 14, 15, 16, 17, 18, 19, 20];


// var fizzBuzz = function(arr) {

//     for (let i = 0; i < arr.length; i++) {


//         if (arr[i] % 5 && arr[i] % 3 === 0 ){
//             console.log ("Fizz Buzz");

//         } else if (arr[i] % 5 === 0) {

//             console.log("Buzz");

//         } else if (arr[i] % 3 === 0) {
            
//             console.log("Fizz");
//         }
//     }
// };
