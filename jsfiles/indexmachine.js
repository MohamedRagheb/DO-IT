let newbox = document.getElementById('box');
let overlay = document.getElementById('overlay');
let noteform = document.getElementById('noteform');
let notes = document.getElementById('notes');
let reminds = document.getElementById('reminds');
let notename = document.getElementById('nametext')
let notetitle = document.getElementById('titlletext')
let note = document.getElementById('note')
let notecobnt = ' <div class="note" >'+notename+' </div>'

newbox.style.display = "none"

function plus() {
    newbox.style.display = "inline-block"
}
function nonplus() {
    newbox.style.display = "none"
    noteform.style.display = "none"
    overlay.style.display = "none"
}

function newnote(){
    overlay.style.display = "block"
    noteform.style.display = "block"


}
function newreminder(){
    overlay.style.display = "block"
    noteform.style.display = "block"
}
function notefilter() {
    reminds.style.display = "none"

}
function cancel(){
    overlay.style.display = "none"
    noteform.style.display = "none"
    newbox.style.display = "none"
}
function addnewnote() {
   notes.innerHTML += '<div class="note" > <div class="topsection"><h4><b>'+notename.value+'</b></h4><h6><b>'+notetitle.value+'</b></h6></div> <div class="dwonsection"> <h5><font color="black" >'+note.value+'</font></h5></div></div>'
   overlay.style.display = "none"
    noteform.style.display = "none"
    newbox.style.display = "none"
}
