// Get the modal
var modal = document.getElementById('myModal');
  //declare a variable called "modal"
    //that variable tells the html to look inside
    //the document and find the element called 'myModal'

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
  //declare the variable called "btn"
    //the variable tells the page to look inside the document
    //within the document it tells the page to look for an element
    //by its id. specifically, it tells the page to look for the id "myBtn"

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
  //declare the variable "span" which tells the page
    //to look inside of itself, looking for a class
    //the class "close"
    //I'm not sure what [0] does
  //okay so this variable closes the modal. When I change
    //the property to [1] the modal doesn't close when I
    //hit the x. But when I put it at [1] the modal closes
    //when i hit the x

// When the user clicks on the button, open the modal
btn.onclick = function() {
  //look inside the variable "btn" when the element which
  //btn refers to is clicked on. This calls a function.
    modal.style.display = "block";
    //the function looks within the variable "modal"
    //modal looks into the style of the id which the variable
    //modal refers to, that id being "myModal". Within the style
    //it looks for the attribute of "display" and changes makes
    //the attribute to "block"

    //This happens when the btn is clicked.

}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  //when there is a click on the element described by the variable
  //"span", a function is called.
    modal.style.display = "none";
    //this function looks inside the variable "modal"
    //within the style and within the display attribute and sets
    //it to none.

    //this makes the modal go away.
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  //within the window, when there is a click,
    //a function with the parameter (event) is called
    if (event.target == modal) {
      //checks within the event parameter
      //to see if the target of the event is outside the modal?
        //somehow?
        modal.style.display = "none";
        //if so, then the script goes within the
        //modal's display attribute and
        //switches it to none.

        //closing the modal.
    }
}
