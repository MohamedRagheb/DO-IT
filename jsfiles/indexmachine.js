let newbox = document.getElementById('box');
let overlay = document.getElementById('overlay');
let noteform = document.getElementById('noteform');
let noteconti = document.getElementById('notediv')
let notes = document.getElementById('notes');
let reminds = document.getElementById('reminds');
let notename = document.getElementById('nametext')
let notetitle = document.getElementById('titlletext')
let note = document.getElementById('note')
let reminderform = document.getElementById('reminderform')
let remindertext = document.getElementById('remindertext')
let remindercolor = document.getElementById('remindercolor')
let reminders = document.getElementById('reminders')

newbox.style.display = "none"

function plus() {
    newbox.style.display = "inline-block"
    overlay.style.display = "block"
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
    reminderform.style.display = "block"
}
function notefilter() {
    reminds.style.display = "none"

}
function cancel(){
    overlay.style.display = "none"
    noteform.style.display = "none"
    newbox.style.display = "none"
    reminderform.style.display = "none"
}
function addnewnote() {
   notes.innerHTML += '<div class="note" > <div class="topsection"><h4><b>'+notename.value+'</b></h4><h6><b>'+notetitle.value+'</b></h6></div> <div class="dwonsection"> <h5><font color="black" >'+note.value+'</font></h5></div></div>'
   overlay.style.display = "none"
    noteform.style.display = "none"
    newbox.style.display = "none"
}
function reminderfilter() {
    noteconti.style.display = "none"
}
function addnereminder(){
   overlay.style.display = "none"
    reminderform.style.display = "none"
    newbox.style.display = "none"
    reminders.innerHTML += '<li class="reminder" style="color:'+remindercolor.value+';"> <font color="black">'+remindertext.value+'</font></li>'
}
