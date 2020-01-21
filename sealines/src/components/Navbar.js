import React from 'react';

const Navbar = (props) =>{
    return (
        <>
        <div className="navbar">
            <button
            onClick = {() => props.getData()}
            >
                Search
            </button>
        </div>
        </>
    )
}
export default Navbar