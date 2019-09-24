var century, year, month, dayOfMonth, dayOfWeek, day;


var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var day_name= [ "Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

function calculateDay() {
    // getInput();
    var century = parseInt(document.getElementById("century").value);
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var dayOfMonth = parseInt(document.getElementById("date").value);
    dayOfWeek = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7)-1;
    return Math.floor(dayOfWeek);
    
    
}

function checkDayOfWeek() {
    day = calculateDay();
         checkgender();
}
 
function checkgender(){
var gen = document.getElementsByName("rads");
   
    if (gen[0].checked == true) {
        var gender = "male";
    } 
    else {
        var gender = "female";
       
    }
   
    switch (gender) {
        case gender ="male":
            switch (day) {
                case 1:
                    document.getElementById("output").innerHTML = "The day is on a " + day_name[0] + " " +"the name is " +  male[0];
                    alert("The day is on a " + day_name[0] +" the name is " +  male[0]);
                    break;
                case 2:
                    document.getElementById("output").innerHTML = "The day is on a " + day_name[1] + " " + "the name is " + male[1];
                    alert("The day is on a " + day_name[1] + "the name is " + male[1]);
                    break;
                case 3:
                    document.getElementById("output").innerHTML = "The day is on a " + day_name[2] + ""+ "the name is " + male[2];
                    alert("The day is on a " + day_name[2] + "the name is " + male[2]);
                      break;
                case 4:
                    document.getElementById("output").innerHTML =  "The day is on a " + day_name[3] + " " + "the name is " + male[3];
                    alert("The day is on a " + day_name[3] + "the name is " + male[3]);
                    break;
                case 5:
                    document.getElementById("output").innerHTML = "The day is on a " + day_name[4] + " " + "the name is " + male[4];
                    alert("The day is on a " + day_name[4] + "the name is " + male[4]);
                    break;
                case 6:
                    document.getElementById("output").innerHTML = "The day is on a " + day_name[5] + " " + "the name is " + male[5];
                    alert("The day is on a " + day_name[5] + "the name is " + male[5]);
                    break;
                case 7:
                    document.getElementById("output").innerHTML = "The day is on a " + day_name[6] + " " + "the name is " + male[6];
                    alert("The day is on a " + day_name[6] + "the name is " + male[6]);
                    break;
                default:
                    console.log("The gender is male");
            }
            break;
        case gender = "female":
            switch (day) {
                case 1:
                    document.getElementById("output").innerHTML = "The day is on a " + day_name[0] +"the name is " +  female[0];
                    alert("The day is on a " + day_name[0] +" the name is " +  female[0]);
                    break;
                case 2:
                    document.getElementById("output").innerHTML = "The day is on a " + day_name[1] + "the name is " + female[1];
                    alert("The day is on a " + day_name[1] + "the name is " + female[1]);
                    break;
                case 3:
                    document.getElementById("output").innerHTML = "The day is on a " + day_name[2] + "the name is " + female[2];
                    alert("The day is on a " + day_name[2] + "the name is " + female[2]);
                      break;
                case 4:
                    document.getElementById("output").innerHTML =  "The day is on a " + day_name[3] + "the name is " + female[3];
                    alert("The day is on a " + day_name[3] + "the name is " + female[3]);
                    break;
                case 5:
                    document.getElementById("output").innerHTML = "The day is on a " + day_name[4] +  "the name is " + female[4];
                    alert("The day is on a " + day_name[4] + "the name is " + female[4]);
                    break;
                case 6:
                    document.getElementById("output").innerHTML = "The day is on a " + day_name[5] + "the name is " + female[5];
                    alert("The day is on a " + day_name[5] + "the name is " + female[5]);
                    break;
                case 7:
                    document.getElementById("output").innerHTML = "The day is on a " + day_name[6] + "the name is " + female[6];
                    alert("The day is on a " + day_name[6] + "the name is " + female[6]);
                    break;
                default:
                    console.log("The gender is female");
            }
    }
}
