var century,year, month, dayOfMonth, dayOfWeek,day;

function getInput(){
    century=parseInt(document.getElementById("century"));
    year=parseInt(document.getElementById("year"));
    month=parseInt(document.getElementById("month"));
    dayOfmonth=parseInt(document.getElementById("date"));
    dayOfWeek=parseInt(document.getElementById("day"));
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

var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var female=["Akosua", "Adwoa", "Abenaa","Akua","Yaa","Afua","Ama"];
var dayOfWeek = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];


function calculateDay() {
    getInput();
    dayOfWeek=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7;
    console.log(dayOfWeek);

    if (dayOfWeek<0){
        dayOfWeek=dayOfWeek;
    }
    else if(dayOfWeek>0) {
        return dayOfWeek;
    }
}
var checkday=function checkDayOfWeek(){
    day = calculateDay();
     checkgender();
     console.log("The day of the week is correct");
}

function checkgender(){
    var gen = document.getElementsByName("radbtn");
    if(gen[0].checked == true){
        var gender = "male";
    }else if(gen[1].checked == true){
        var gender = "female";
    }else {
      console.log("The selected gender is correct");
    }

switch (checkgender){
    case gender="male":
        switch (day){
        case 1:
       document.getElementById("output").innerHTML + "The day is on a "+ day[0] + "the name is "+ male[0];
        break;
        case 2:
        document.getElementById("output").innerHTML + "The day is on a "+ day[1] + "the name is "+ male[1];
            break;
        case 3:
        document.getElementById("output").innerHTML + "The day is on a "+ day[2] + "the name is "+ male[2];
            break;
        case 4:
        document.getElementById("output").innerHTML + "The day is on a "+ day[3] + "the name is "+ male[3];
            break;
        case 5:
        document.getElementById("output").innerHTML + "The day is on a "+ day[4] + "the name is "+ male[4];
             break;
        case 6:
        document.getElementById("output").innerHTML + "The day is on a "+ day[5] + "the name is "+ male[5];
            break;
        case 7:
        document.getElementById("output").innerHTML + "The day is on a "+ day[6] + "the name is "+ male[6];
            break
        default:
            console.log("The gender is male");
    }
}
switch (checkgender){
    case gender="female":
        switch (day){
        case 1:
       document.getElementById("output") + "The day is on a "+ day[0] + "the name is "+ female[0];
        break;
        case 2:
        document.getElementById("output") + "The day is on a "+ day[1] + "the name is "+ female[1];
            break;
        case 3:
        document.getElementById("output") + "The day is on a "+ day[2] + "the name is "+ female[2];
            break;
        case 4:
        document.getElementById("output") + "The day is on a "+ day[3] + "the name is "+ female[3];
            break;
        case 5:
        document.getElementById("output") + "The day is on a "+ day[4] + "the name is "+ female[4];
             break;
        case 6:
        document.getElementById("output") + "The day is on a "+ day[5] + "the name is "+ female[5];
            break;
        case 7:
        document.getElementById("output") + "The day is on a "+ day[6] + "the name is "+ female[6];
            break
        default:
            console.log("The gender is male");
    }
}


