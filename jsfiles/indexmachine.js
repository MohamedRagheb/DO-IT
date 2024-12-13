let newbox = document.getElementById('box');
let overlay = document.getElementById('overlay');
let noteform = document.getElementById('noteform');
let noteconti = document.getElementById('notediv')
let notesDiv = document.getElementById('notes');
let reminds = document.getElementById('reminds');
let notename = document.getElementById('nametext')
let notetitle = document.getElementById('titlletext')
let noteFetch = document.getElementById('note')
let reminderform = document.getElementById('reminderform')
let textarea = document.querySelector('.farah')
let remindercolor = document.getElementById('remindercolor')
let reminders = document.getElementById('reminders')
let filter = document.getElementById('filter')
let notedivclass = document.getElementsByClassName('note');
let noteFormInputs = document.querySelectorAll(".noteform input")



newbox.style.display = "none"
// beta bootstrap modal
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



function cancel(){
    overlay.style.display = "none"
    noteform.style.display = "none"
    newbox.style.display = "none"
    reminderform.style.display = "none"
}

function addDataToLocalStorageFrom(arrayOfTasks,where) {
    window.localStorage.setItem(where, JSON.stringify(arrayOfTasks));
    getDataFromLocalStorageNote(noteStore)
    getDataFromLocalStorageRemides(reminderStore)

  }
//add note
let noteStore = []
window.onload = getDataFromLocalStorageNote()
function getDataFromLocalStorageNote() {
    let data = window.localStorage.getItem("notes");
    if (data) {
       noteStore = JSON.parse(data);
      windowRefreshNote(noteStore);
      console.log(noteStore)
    }
}

function addnewnote() {
    if(notename.value != ""&&notetitle.value != "" && notetitle.value.length <15 && notename.value.length <15){
    overlay.style.display = "none";
    noteform.style.display = "none";
    newbox.style.display = "none";
    noteStore.push({id:Date.now(),sender:notename.value,title:notetitle.value,contant:noteFetch.value});
    // console.log(noteStore)
    addDataToLocalStorageFrom(noteStore,"notes")
    notename.value = "";
    notetitle.value = "";
    noteFetch.value = "";
}else{
   let erorBox = document.getElementById("errorHelperText");
   for(let input of noteFormInputs){
       if(input.value == ""){
           input.style.border = "3px solid red"
           erorBox.innerHTML = "There Is Empty Input";
        }
        if(input.value.length > 15){
            input.style.border = "3px solid red";
            inputAttribute = input.getAttribute("vaild-name")
            erorBox.innerHTML =  `Too Long ${inputAttribute}`;
        }
   }
}
}

function windowRefreshNote(arre){
    notesDiv.innerHTML = " ";
    if(arre.length == 0){
        notesDiv.innerHTML =
                            `<center><font style="position: relative; top: 25%;  text-align: center;"> There Is No Notes </font></center>`
    }
    for(i=0; i<arre.length; i++){
        let noteDiv = document.createElement("div")
        noteDiv.className = "note"
        noteDiv.setAttribute("data-set",arre[i].id)
        // top section creation
        let noteTopSection = document.createElement("div")
        noteTopSection.classList.add("topsection");
            // Top Section Childs  creation And Add data
                // Sender Section Creation
                let topH4Create = document.createElement("h4");
                let boldTextversionSender = document.createElement("b")
                  // Add sender To Top Section
                    boldTextversionSender.append(document.createTextNode(arre[i].sender))
                    topH4Create.appendChild(boldTextversionSender)
                    noteTopSection.append(topH4Create)
                // Title Section Creation
                let topH6create = document.createElement("h6");
                let boldTextversionTitle = document.createElement("b");
                    // Add Title To Top Section
                    boldTextversionTitle.append(document.createTextNode(arre[i].title));
                    topH6create.appendChild(boldTextversionTitle);
                    noteTopSection.append(topH6create);
                // control div creation
                let controlDivCreation = document.createElement("div")
                controlDivCreation.classList.add("control")
                            controlDivCreation.innerHTML = `
                            <div class="delfun">Delete<div>
                            `
                        noteTopSection.append(controlDivCreation)
        noteDiv.appendChild(noteTopSection);
        //  down section creation
        let downSection = document.createElement("div");
        downSection.classList.add("downsection");
                // noteContentSection
                    let noteContentSection = document.createElement("div");
                    noteContentSection.classList.add("notecontent");
                    let pSpan = document.createElement("span");
                    pSpan.appendChild(document.createTextNode(arre[i].contant));
                    noteContentSection.appendChild(pSpan);
                    downSection.prepend(noteContentSection);
        noteDiv.append(downSection);
        notesDiv.append(noteDiv)
    }
    // noteClickfunctions
    for(const note of notedivclass ){
        note.addEventListener("click",(e)=>{
            let dateid =e.target.parentElement.parentElement.parentElement.getAttribute("data-set");
            let noteStore2 = noteStore.filter(note => note.id != dateid)
            addDataToLocalStorageFrom(noteStore2,"notes")
        })
    }
}
//add reminder
let reminderStore = [];
function addnereminder(){
    overlay.style.display = "none";
    reminderform.style.display = "none";
    newbox.style.display = "none";
    reminderStore.push({id:Date.now(),importance:remindercolor.value,contant:textarea.value,done:false})
    addDataToLocalStorageFrom(reminderStore,"reminds")
    // windowRefreshReminds(reminderStore);
    textarea.value = "";
}
function getDataFromLocalStorageRemides() {
    let data = window.localStorage.getItem("reminds");
    if (data) {
       reminderStore = JSON.parse(data);
      windowRefreshReminds(reminderStore);
    }
}
window.onload = getDataFromLocalStorageReminds()
function getDataFromLocalStorageReminds() {
    let data = window.localStorage.getItem("reminds");
    // console.log(data)
    if (data) {
       reminderStore = JSON.parse(data);
    //    console.log(noteStore)
    windowRefreshReminds(reminderStore);
    }
}
function windowRefreshReminds(arree){
    reminders.innerText =" ";
    if(reminderStore.length == 0){
        reminders.innerHTML =  `<center><font style="position: relative; top: 25%;  text-align: center; font-weight: bold;"> There Is No Reminds </font></center>`;
    }
    //array sorting function
    let arreed = arree.sort(
        function (a, b) {
            return a.done - b.done;
        }
    )
   for(i=0;i<arreed.length;i++){
        // li creation
                let li = document.createElement("li");
                li.classList.add("reminder");
                li.setAttribute("data-id",arreed[i].id);
                // create font element
                    let font = document.createElement("p")
                     font.style.color = "black";
                    font.appendChild(document.createTextNode(arreed[i].contant));
                    li.appendChild(font);
                     //create del buuton
                     let  dlSpanReminder = document.createElement("span");
                     dlSpanReminder.className = "del";
                     dlSpanReminder.appendChild(document.createTextNode("Delete"));
                     li.appendChild(dlSpanReminder);
                    li.style.color = arreed[i].importance
            reminders.append(li);
            if(arreed[i].done==true){
                font.style.textDecoration = " line-through";
                font.style.textDecorationColor = "red";
                li.style.backgroundColor = "#C0C0C0";
                li.style.borderRadius = "4px";
            }
   }
let reminder = document.querySelectorAll('.reminder')

   for(const oreminder of reminder){
    oreminder.addEventListener("click", (e) =>{
        if(e.target.classList.contains("del")){
            let reminderAttr = e.target.parentElement.getAttribute("data-id")
            let nreminderStore = reminderStore.filter(reminder => reminder.id != reminderAttr)
            addDataToLocalStorageFrom(nreminderStore,"reminds")
        }
        if(!e.target.classList.contains("del")){
            let reminderAttr = e.target.parentElement.getAttribute("data-id")
            let objId = reminderStore.findIndex(obj => obj.id == reminderAttr);
            reminderStore[objId].done = true;
            addDataToLocalStorageFrom(reminderStore,"reminds")
        }
    })
   }
}

// filter Notes or reminder
filter.oninput = function pagefilter(){switch(filter.value){
    case "note" :
    reminds.style.display = "none";
    noteconti.style.display = 'block';
    break;
    case "Reminders":
    noteconti.style.display = "none";
    reminds.style.display = "block"
    break;
    case "all":
     noteconti.style.display = "block";
    reminds.style.display = "block"
    break
}}
