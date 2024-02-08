import React from 'react';
import "./Button.css";

export default function Button({children, handleClick, variant, buttonType}) {
    /*const {children, handleClick} = props;*/
    return (
        <button className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"}`} onClick={handleClick} type={buttonType}>
            {children}
        </button>
    );
}