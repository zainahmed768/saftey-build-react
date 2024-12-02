import React, { useState } from 'react';
import "../AccordionComman/Accordion.css"
import up from "../../assets/images/up.png"
import down from "../../assets/images/down.png"
// AccordionItem Component
const AccordionComman = ({ title, content, isOpen, onClick }) => {
    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <div className="accordion-header" onClick={onClick}>
                <h4>{title}</h4>
                <span>{isOpen ? <>
                    <img src={up} alt="up-arrow" className='img_arrow' />
                </> : <>
 
                    <img src={down} alt="down-arrow" className='img_arrow' /></>}</span>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};



export default AccordionComman;
