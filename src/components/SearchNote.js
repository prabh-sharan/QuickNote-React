import React from "react";
import {MdSearch} from "react-icons/md"

const SearchNote=({handleSearchNote})=>{
    return(
        <div className="search-note">
            <MdSearch className="search-icon" size="1.8rem" />
            <input 
              onChange={handleSearchNote}
              type="text"
              placeholder="Type to search note.." >
                
            </input>
        </div>
    )
}

export default SearchNote