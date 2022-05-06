
import React from "react"

const AddNote=({handleAddNote})=>{

    const [noteText, setNoteText]=React.useState("");
    const charLimit=250;

    const handleChange=(event)=>{
        //update state only if charLimit is postive/limit has not been reached
        if(charLimit- event.target.value.length >=0){
            setNoteText(event.target.value)
        }
       
    }

    const handleSaveClick=()=>{
        //if note text is not empty create and save new note
        if(noteText.trim().length> 0){
            handleAddNote(noteText)
            setNoteText("")
        }
    }

    return(
        <div className="note note-new">
            <textarea 
            rows="10"
            cols="10"
            placeholder="Start typing your note.."
            value={noteText}
            onChange={handleChange} 
             >  
            </textarea>

            <div className="note-footer">
                <small>{charLimit-noteText.length} words remaining</small>
                <button className="note-save-btn" onClick={handleSaveClick}>
                Save
                </button>
            </div>

        </div>
    )
}

export default AddNote