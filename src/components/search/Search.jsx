import React from "react";
import './Search.styles.scss';
import { useNavigate } from "react-router-dom";
import { useRef } from "react";


function Search() {
    const input = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/pokemon/${input.current.value}`);
    }

    return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
                <input type='search' placeholder='Enter the Pokemon Name' ref={input} />
                <button type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    );
};

export default Search; 