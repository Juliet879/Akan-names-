 function getData(event){
   console.log('function called')
   event.preventDefault()
   let input = document.getElementById('inputD').value
   let res = document.getElementById('response')
    res.innerHTML = `<h1>${input}</h1>`

 <h1>Hello</h1>
// var score = parseInt(prompt("Enter the score: "));
// if (score >=80){
// alert("your grade is A");
// }
// else if (score >=60) {
// alert("your grade is B");
// }
//  else if (score >=40){
// alert ("your grade is C");
// }
//  else if (score >=25){
// alert ("your grade is D");
// }
// else {
// alert ("your grade is E");
// }

