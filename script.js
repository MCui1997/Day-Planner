// function to get the current time of the day, so we can change background colors of time blocks
//TESTING PURPOSES
// var currentTime = "PM";
// var hourTime = ["10"];

//Initialize variables needed
var currentDay = moment().format('LLLL');
var currentTime = moment().format('LT');
var hourTime = currentTime.split(":");

//Set the current day to show 
$("#currentDay").text(currentDay);

//Call functions to get time
getCurrentTime();
getStorage();

//Function to get all items from local storage at the start
function getStorage(){
    for(var i =0; i<=9; i++){
    
        $("textarea#text"+i).val(localStorage.getItem("description"+i));
    }
}

//MAIN FUNCTION TO GET THE TIME AND THEN ADAPT COLORS OF THE CALENDAR ACCORDINGLY
function getCurrentTime(){
//If the time is AM
if (currentTime.includes("AM")){

    //In case its 12am (midnight) dont change anything just exit
    if(hourTime[0]==12){
        return;
    }

    //Sets the current time to present
    $("#"+hourTime[0]+"AM").removeClass("future");
    $("#"+hourTime[0]+"AM").addClass("present");

    //Sets all times previous to past
    for(var i =0; i<hourTime[0]; i++){

        $("#"+i+"AM").removeClass("future");
        $("#"+i+"AM").addClass("past");
    }

   
}
//If the time is PM
if (currentTime.includes("PM")){

    //Make all the AM times past
    for(var i =9; i<=11; i++){
    $("#"+i+"AM").removeClass("future");
    $("#"+i+"AM").addClass("past");
    }
    
    //Sets current time to present
    $("#"+hourTime[0]+"PM").removeClass("future");
    $("#"+hourTime[0]+"PM").addClass("present");


    //Only if it isn't 12 PM, set all of the times previous to past. If it's 12 PM, our earlier code already set AM to past
    if(hourTime[0]!=12){

        $("#12PM").removeClass("future");
        $("#12PM").addClass("past");

        for(var i =0; i<hourTime[0]; i++){

            $("#"+i+"PM").removeClass("future");
            $("#"+i+"PM").addClass("past");
        }
    }
}
}

//BUTTONS//////////////////////////////////////////////////////////////

$("#1button").on("click", function() {
    event.preventDefault(); 
    //Get id of button
    var buttonID = $("#1button").attr("id");
    // Get the number to match up with textarea
    var textID = parseInt(buttonID);
    //Get the textarea message
    var message = $("textarea#text"+textID).val();
    //store
    localStorage.setItem("description"+textID, message);
  });

  $("#2button").on("click", function() {
   
    event.preventDefault(); 
    var buttonID = $("#2button").attr("id");
    var textID = parseInt(buttonID);
    var message = $("textarea#text"+textID).val();
    localStorage.setItem("description"+textID, message);
  });

  $("#3button").on("click", function() {
   
    event.preventDefault(); 
    var buttonID = $("#3button").attr("id");
    var textID = parseInt(buttonID);
    var message = $("textarea#text"+textID).val();
    localStorage.setItem("description"+textID, message);
  });

  $("#4button").on("click", function() {
   
    event.preventDefault(); 
    var buttonID = $("#4button").attr("id");
    var textID = parseInt(buttonID);
    var message = $("textarea#text"+textID).val();
    localStorage.setItem("description"+textID, message);
  });

  $("#5button").on("click", function() {
   
    event.preventDefault(); 
    var buttonID = $("#5button").attr("id");
    var textID = parseInt(buttonID);
    var message = $("textarea#text"+textID).val();
    localStorage.setItem("description"+textID, message);
  });

  $("#6button").on("click", function() {
   
    event.preventDefault(); 
    var buttonID = $("#6button").attr("id");
    var textID = parseInt(buttonID);
    var message = $("textarea#text"+textID).val();
    localStorage.setItem("description"+textID, message);
  });

  $("#7button").on("click", function() {
   
    event.preventDefault(); 
    var buttonID = $("#7button").attr("id");
    var textID = parseInt(buttonID);
    var message = $("textarea#text"+textID).val();
    localStorage.setItem("description"+textID, message);
  });

  $("#8button").on("click", function() {
   
    event.preventDefault(); 
    var buttonID = $("#8button").attr("id");
    var textID = parseInt(buttonID);
    var message = $("textarea#text"+textID).val();
    localStorage.setItem("description"+textID, message);
  });

  $("#9button").on("click", function() {
   
    event.preventDefault(); 
    var buttonID = $("#9button").attr("id");
    var textID = parseInt(buttonID);
    var message = $("textarea#text"+textID).val();
    localStorage.setItem("description"+textID, message);
  });