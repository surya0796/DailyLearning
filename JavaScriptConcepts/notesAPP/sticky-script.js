const notesContainer = document.getElementById("app");
const addNoteButton = document.querySelector(".add-button");

// let data = [
//     {
//         id:"unique key",
//         content:"notes"
//     },
//     {
//         id:"uugdhfk",
//         content:"sfjgdanfs"
//     }
// ]
// console.log(JSON.stringify(data))


getNotes().forEach((note) => {
    // function runs and provide a value in return
    // noteElement = <textarea class="note" placeholder="write from here">notes</textarea>
    const noteElement = createNoteElement(note.id, note.content);
    console.log(noteElement);
    notesContainer.insertBefore(noteElement, addNoteButton);
});
  
addNoteButton.addEventListener("click", () => addNote());


//functions 1;
function getNotes () {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]"); //stickynotes?, is notes a class?
}

//functions 2;
function saveNotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

//functions 3;
function createNoteElement(id, content) {  // id? content?
    const element = document.createElement("textarea");  // createElement creates an element node.

    element.classList.add("note");
    element.value = content;  // Element.value property sets or returns the value of an attribute.
    element.placeholder = "write from here";
  

    element.addEventListerner("change", () => {  //change= when the value of input is changed.
        updateNote(id, element.value); // update note`s id and content.
    });

    element.addEventListerner("dblclick", () => {  // on double click , delete the notes.
        const doDelete = confirm("Are you sure?");

        if (doDelete) {
            deleteNote(id, element);
        }
    });

    return element;
}

//functions 4;
//doubt
function addNote() {
    const notes = getNotes();  // purani array ..... saved notes abhi tk ke
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };

    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement, addNoteButton);

    notes.push(noteObject);
    saveNotes(notes);
}


//functions 5;
function updateNote(id, newContent) {
    const notes = getNotes();
    const targetNote = notes.filter((notes) => notes.id != id);
    
    targetNote.content = newContent;
    saveNotes(notes);
}

//functions 6;
function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id);

    saveNotes(notes);
    notesContainer.removeChild(element);
}