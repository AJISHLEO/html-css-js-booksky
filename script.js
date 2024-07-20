var addbutton=document.getElementById("add-popup")
var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popup-box")

addbutton.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
}) 
var cancelbook = document.getElementById("Cancel-book")
cancelbook.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var bookdescription=document.getElementById("book-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdescription.value}</p>
           <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
     overlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}