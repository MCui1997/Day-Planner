// function to get the current time of the day, so we can change background colors of time blocks


var currentTime = moment().format('LT');
var hourTime = currentTime.split(":");


//If the time is AM
if (currentTime.includes("AM")){

    $("#"+hourTime[0]+"AM").removeClass("future");
    $("#"+hourTime[0]+"AM").addClass("present");

    for(var i =0; i<hourTime[0]; i++){

        $("#"+i+"AM").removeClass("future");
        $("#"+i+"AM").addClass("past");
    }

}


//If the time is PM
if (currentTime.includes("PM")){

    for(var i =9; i<=11; i++){
    $("#"+i+"AM").removeClass("future");
    $("#"+i+"AM").addClass("past");
    }
    
    
    $("#"+hourTime[0]+"PM").removeClass("future");
    $("#"+hourTime[0]+"PM").addClass("present");


    for(var i =0; i<hourTime[0]; i++){

        $("#"+i+"PM").removeClass("future");
        $("#"+i+"PM").addClass("past");
    }

}

