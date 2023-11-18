import React from 'react';
import "../styles/Toolbar.css"
function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className='toolbar'>
      {filters.map((filter) => (
        <button 
          key={filter}
          onClick={() => onSelectFilter(filter)}
          className={`button-card ${filter === selected ? 'active' : ''}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
