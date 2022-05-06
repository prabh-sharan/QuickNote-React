

const Header=({handleDarkMode})=>{
    
    return(
        <div className="header">
            <h1>QuickNote</h1>
            <button 
                className="toggle-btn"
                onClick={handleDarkMode} >
                <div className="inner-circle"></div>
            </button>

        </div>
    )
}
export default Header