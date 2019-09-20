var century,year, month, dayOfMonth, dayOfWeek,day;

function getInput(){
    century=parseInt(document.getElementById("century"));
    year=parseInt(document.getElementById("year"));
    month=parseInt(document.getElementById("month"));
    dayOfmonth=parseInt(document.getElementById("dayOfMonth"));
    dayOfWeek=parseInt(document.getElementById("dayOfWeek"));
    day=parseInt(document.getElementById("day"));

if (century == "") {
    alert("Input the correct Century");
    return false;
}
else if (year == ""){
    alert("Input the correct year format");
    return false;
}
else if (month == ""){
    alert("Input the correct month format");
    return false;
}
else if (dayOfMonth == ""){
    alert("Input the correct dayOfMonth");
    return false;
}
else if(dayOfWeek == ""){
    alert("Input the dayOfWeek");
    return false;
}
}
// Function to validate the form
function calculateDay() {
    getInput();
    dayOfWeek=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7;
    console.log(dayOfWeek);

    if (dayOfWeek<0){
        dayOfWeek=dayOfWeek*-1;
    }
    else if(dayOfWeek>0) {
        return dayOfWeek;
    }
}

// Function to check dayOfWeek

function check