//assignment:
//To create a single web page that
//demonstrates understanding of when and
//how to use a modal, showcase basic JavaScript
//skills and understanding of concepts.

var thisModal = document.getElementById('myModal');
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

var close = document.getElementsByClassName('close')[0];
//declares a variable "close"


function modal(){
//declares function "modal"
  thisModal.style.display = "block";
} //IT WORKS

close.onclick=function(){
  //look inside variable "close"
  //when it sees a click, it activates a function
    thisModal.style.display = "none";
    //goes inside variable "thisModal"
    //which goes inside the document
    //into the element with the id "myModal"
    //and changes it to "display none"
    //which switches it off and makes it go away.
    clearInterval(myVar);
    //calls the method "clearInterval"
    //its target is put in its parameters,
    //the variable "myVar"
    //clearInterval goes into myVar
    //and switches off its timing interval
      //IT WORKS
}
