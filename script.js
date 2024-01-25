var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var cancelnotes = document.getElementById("cancel-notes")

cancelnotes.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

var container = document.querySelector(".cont")
var notestitleinput = document.getElementById("notes-title-input")
var notesauthorinput = document.getElementById("notes-author-input")
var notesdescriptioninput = document.getElementById("notes-description-input")
var addnotes = document.getElementById("add-notes")

addnotes.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","notes-cont")
    div.innerHTML = `<h1>${notestitleinput.value}</h1>
    <h5>${notesauthorinput.value}</h5>
    <p>${notesdescriptioninput.value}</p>
    <button onclick="deletenotes(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

function deletenotes(event){
    event.target.parentElement.remove()
}