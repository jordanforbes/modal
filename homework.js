//assignment:
//To create a single web page that
//demonstrates understanding of when and
//how to use a modal, showcase basic JavaScript
//skills and understanding of concepts.

var modal = document.getElementById('myModal');
//declares the variable "modal"
//the variable looks inside the document
//for the element with the id "myModal"

//start a timer that counts down to 3000 milliseconds
var myVar = setInterval(modal, 3000);
//declares a variable "myVar" which
//operates the setInterval function
//which calls the modal function after
//a period of 1000 milliseconds

//when 3000 seconds go by the function "modal" is called

function modal(){
//declares function "modal"
  modal.style.display = "block";

}
