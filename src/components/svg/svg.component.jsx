import React from 'react';

import './svg.styles.scss';

const SVG = ({name, onClickHandler}) => {

    switch(name){
        case 'plus':
            return(
                <div className="plus-box" onClick={onClickHandler}>
                    <svg className="plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                </div>
            )
        case 'minus':
            return(
                <div className="minus-box" onClick={onClickHandler}>
                    <svg className="minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg>
                </div>
            )
            
        default:
            break;
            
    }
}

export default SVG;