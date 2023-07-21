import {MdDeleteForever} from "react-icons/md"

const Note=({id, date, text,handleDeleteNote,handleEditNote})=>{
   
    return(
        <div className="note">
            <p>{text}</p>
            <div className="note-footer">
                <small>{date}</small>
                
                <MdDeleteForever
                onClick={ ()=>handleDeleteNote(id) }
                className="delete-icon" size="1.5em"
                />
            </div>
        </div>
    )
}

export default Note