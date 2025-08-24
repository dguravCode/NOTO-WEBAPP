export const renderNotes = (notes) => {
    let newNote = notes.map(({title,note,id,isPinned,isArchived})=>{
        return (
            `<div class="single-note">
                <div class="d-flex align-center title-container">
                <span>${title}</span>
                    <button class="button btn del-btn v-hidden" data-type="del" data-id="${id}"> 
                    <span data-type="del" data-id="${id}" class="ic--baseline-delete"></span>
                    </button>
                </div>
                        
                <p>${note}</p>
                        
                <div class="option d-flex gap-md">
                    <button class="button btn pinned-btn v-hidden" data-type="pinned" data-id="${id}">
                    <span data-type="pinned" data-id="${id}" class="emojione--pushpin"></span>
                    </button>
                        
                    <button class="button btn pinned-btn v-hidden" data-type="archive" data-id="${id}">
                    <span data-type="archive" data-id="${id}" class="ic--outline-archive"></span>
                    </button>
                </div>
            </div>`
                )
            }); 
    newNote=newNote.join("");
    return newNote;
}        