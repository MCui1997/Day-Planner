// function to get the current time of the day, so we can change background colors of time blocks
//TESTING PURPOSES

// var currentTime = "PM";
// var hourTime = ["10"];

var currentTime = moment().format('LT');
var hourTime = currentTime.split(":");



getCurrentTime();

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