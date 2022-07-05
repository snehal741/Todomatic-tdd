import React from 'react';

function FilterButton(Props){
    return (
        <button 
            type="button" 
            data-testid = " filter-button"
            className="btn toggle-btn" 
            aria-pressed={Props.isPressed}
            onClick = {()=> Props.setFilter(Props.name)}>
            <span className="visually-hidden">Show </span>
            <span>{Props.name}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    )
}

export default FilterButton;
