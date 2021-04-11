import React from 'react';

export default function AccordionPanel({ children, group }) {
  return (
    <div className="accordion" id={ group }>
        { children }
    </div>
  ); 
}
