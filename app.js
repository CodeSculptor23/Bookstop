var addpopupbutton = document.getElementById("add-popup-button")
var popupoverlay = document.querySelector(".popupoverlay")
var popupbox = document.querySelector(".popup-box")
var cancelbutton = document.getElementById("cancel-popup")

addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

cancelbutton.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display="none";
    popupbox.style.display="none";

})

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description")


addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deleteobject(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none";
    popupbox.style.display="none";


})

function bars(){
    var navbar = document.querySelector(".side-navbar")
    navbar.style.left="0"


}

function cut(){
    var navbar = document.querySelector(".side-navbar")
     navbar.style.left="-60%"
    

}

function deleteobject(event)
{
    event.target.parentElement.remove()
}


