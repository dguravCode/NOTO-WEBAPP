import { renderNotes } from "./app.js";

let title = document.querySelector(".title");
let note = document.querySelector(".note");
let addNoteBtn = document.querySelector(".add-btn");

let noteDisplay = document.querySelector(".notes-display");
let showUnpinnedNotes = document.querySelector(".notes-container"); //Unpinned
let showPinnedNotes = document.querySelector(".pinned-notes-container"); //pinned
let pinned = document.querySelector(".pin-title") //pinned
let unPinned = document.querySelector(".other-title") //Unpinned

let arrayOfNotes = JSON.parse(localStorage.getItem("notes"))  || []; //JSON.parse --> is used to convert string to array.//keep data even after refresh


//Add button
addNoteBtn.addEventListener("click", () =>{
   if (title.value.trim().length > 0 || note.value.trim().length > 0) {
      arrayOfNotes = [...arrayOfNotes, {title: title.value.trim(), note: note.value.trim(), id: Date.now(), isPinned: false, isArchived: false }];
      note.value = title.value = ""; //to clear text from text-area
      showUnpinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned,isArchived}) => !isPinned && !isArchived));
      localStorage.setItem("notes", JSON.stringify(arrayOfNotes)); //JSON.stringify --> is used to do not show object formate for array.
   }
});



//To Dispaly Pinned/Unpinned notes.
if (arrayOfNotes.length > 0) {
   pinned.classList.toggle("d-none");
   unPinned.classList.toggle("d-none");
}


// Delete,Pinned and Archive button
noteDisplay.addEventListener("click",(event) =>{
   let type = event.target.dataset.type; // type = del,pinned,and archive --->(app.js)
   let noteId = event.target.dataset.id;   

   switch (type) {
      case "del":
         arrayOfNotes = arrayOfNotes.filter(({id}) => id.toString() !== noteId); //filter() used to delete object from array. 
         showUnpinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned,isArchived}) => !isPinned && !isArchived)); //update arrayOfNotes//Unpinned notes deleted
         showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned}) => isPinned)); //update arrayOfNotes//pinned notes deleted
         localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
         break;

      case "pinned":
         arrayOfNotes = arrayOfNotes.map(note => note.id.toString() == noteId ? {...note, isPinned: !note.isPinned}: note);
         showUnpinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned,isArchived}) => !isPinned && !isArchived));
         showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned}) => isPinned));
         localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
         break;

      case "archive":
         arrayOfNotes = arrayOfNotes.map(note => note.id.toString() == noteId ? {...note, isArchived: !note.isArchived}: note);
         showUnpinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ isPinned, isArchived }) => !isPinned && !isArchived));// Unpinned (only notes that are NOT pinned AND NOT archived)
         showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ isPinned, isArchived }) => isPinned && !isArchived));// Pinned (only notes that ARE pinned AND NOT archived)
         localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
         break;
         
      default:
         break;
   }
});

showUnpinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned,isArchived}) => !isPinned && !isArchived)); //keep data even after refresh.
showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ isPinned, isArchived }) => isPinned && !isArchived)); //keep data even after refresh.