import React from 'react';

const Custom = ( props ) => {
    return (
        <h1 
            className="text-center my-5"
            style={{backgroundColor: props.bgColor, color: props.txtColor }}
            >The word is: hello
        </h1>
    )
}

export default Custom;