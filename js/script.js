function getAkanName() {
    let yearOfBirth = document.getElementById("year-input").value;
    let monthOfBirth = Number(document.getElementById("month-input").value);
    let dayOfBirth = Number(document.getElementById("day-input").value)
    let genders = document.getElementByName("gender");
}
function getGender() {
    for (gender of genders) {
        if (genders.checked) {
            return genders.value;
        }
    }
}
let myGenderValue = getGender()
console.log(myGenderValue);

// validation functions

function monthValid()
if (monthOfBirth < 1 || monthOfBirth > 12) {
    return false;
} else {
    return true;
}

function dayValid()
if (monthOfBirth === 2 && Number(yearOfBirth) % 4 === 0) {
    if (dayOfBirth > 28 || dayOfBirth < 1) {
        return false;
    } else if (monthOfBirth === 2 && dayOfBirth > 29) {
        return false;
    } else if (monthOfBirth === 2 && dayOfBirth < 1 || dayOfBirth > 31) {
        return false;
    } else {
        return true;
    }
}

// formula to determine day of birth (Sunday=1 , Monday=2)
var a =Math.floor( (14 - month) / 12)
                                  
var y = year - a                   
var m = month + 12 * a - 2
var d = (day + y +Math.floor( y / 4) - Math.floor(y / 100)  + Math.floor( year / 400 ) + Math.floor((31 * m / 12)) % 7)

let daysOfWeek = [
    "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

// Akan names for males and females
let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "kwame"
];

let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
];

if (myGenderValue == "female" && monthValid && dayValid) {
   
    switch (dayOfWeekNumber) {
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + femaleAkanNames[0];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + femaleAkanNames[1];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + femaleAkanNames[2];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + femaleAkanNames[3];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + femaleAkanNames[4];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + femaleAkanNames[5];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + femaleAkanNames[6];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + femaleAkanNames[0];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        default: alert("OOPS NO NAME FOUND")

    }
}
else if (myGenderValue == "male" && monthValid && dayValid) {
   
    switch (dayOfWeekNumber) {
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + maleAkanNames[0];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + maleAkanNames[1];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + maleAkanNames[2];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + maleAkanNames[3];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + maleAkanNames[4];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + maleAkanNames[5];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + maleAkanNames[6];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;
        case 1:
            document.getElementById('result').textContent = "Born on Sunday,Akan name" + maleAkanNames[0];
            document.getElementById('display-name').textContent = "Your Akan name is: ";
            return false;
            break;

    }
}
