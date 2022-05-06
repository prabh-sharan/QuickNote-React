import React from "react";
import NoteList from "./components/NoteList";
import SearchNote from "./components/SearchNote";
import Header from "./components/Header"
import { nanoid } from "nanoid";

const App= ()=>{

  const [searchText, setSearchText]=React.useState("")
  const [darkMode, setDarkMode]= React.useState(false)

  const [notes, setNotes]= React.useState(
    () => JSON.parse(localStorage.getItem("notesData")) || 
    [{
     id:nanoid(),
     text:"This is my first note!",
     date:"05/05/2022"
    },
    {
    id:nanoid(),
    text:"This is my second note!",
    date:"25/05/2022"
   },
   {
    id:nanoid(),
    text:"This is my third note!",
    date:"05/01/2021"
   },
   {
    id:nanoid(),
    text:"This is my last note!",
    date:"25/05/2022"
   }

    ])


    // save to localStorage
    React.useEffect(()=>{
        localStorage.setItem("notesData", JSON.stringify(notes))
    },[notes])


    const addNote=(text)=>{
        
        const date= new Date()
        const newNote={
          id:nanoid(),
          text:text,
          date:date.toLocaleDateString()
        }
        //newNotes array with new note added
        const newNotes=[...notes, newNote]
        // updating state setter func to newNotes array
        setNotes(newNotes)
    }

    const deleteNote=(id)=>{
        // updated array without deleted note
        const newNotes=notes.filter((note)=> note.id !== id)
        setNotes(newNotes)
    }
    const handleSearchNote=(event)=>{
      setSearchText( () => event.target.value)
    }

    const handleDarkMode=()=>{
      
      setDarkMode(prevState => !prevState)
    }

  return(
    <main className={`${darkMode && "dark-mode toggled"}`}>
      <div className="container">
        <Header handleDarkMode={handleDarkMode} />
        <SearchNote handleSearchNote={handleSearchNote} />
        <NoteList 
          notes={notes.filter(
            (note)=>note.text.toLowerCase().includes(searchText.toLowerCase())
            )} 
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            />
      </div>
    </main>
    
  )
}

export default App;
