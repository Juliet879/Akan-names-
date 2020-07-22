function getDate(){
    var date = getElementById("day").value;
    var month = getElementById("month").value;
    var  year = getElementById("year").value;
    var century = year.slice(0, 1);
    var years= year.slice(2, 3);
}

if (year === '' || year.length > 4 || year.length < 4){
    alert('Fill correct year');
} else if(month === '' || month < 1 || month > 12) {
    alert('Enter the month correctly');
} else if(date === '' || date < 0 || date > 31) {
    alert('Enter the date correctly');
} else {
    var day = Math.floor( ( ( (century/4) -2*century-1) + ((5*years/4) ) + ((26*(month+1)/10)) + date) % 7);
    return day
}
function getGender(){
    var radio = getElementByName("gender").value;
    for (var i = 0;  i< radio.length; i++) {
        if (radio[i].checked) {
            var gender = radio[i].value;
            return gender;
        }
    }
}
function getDay(){
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    if (getGender() === 'male' && getDay() >= 0) {
        document.getElementById('post').innerHTML = ('Hey ') + ('!') + (' You are ') +(' born on a ') + day[getDay(name)] + (',') + (' Your Akan name is ') + male[getDay(name)] + ('.');
    } else if (getGender() === 'female' && getDay() >= 0) {
        document.getElementById('post').innerHTML = ('Hey ') + ('!') + (' You are ') + (' born on a ') + day[getDay(name)] + (',') + (' Your Akan name is ') + female[getDay(name)] + ('.');
    } else {
        alert('Kindly Check your details and enter them correctly then retry');
    }
}