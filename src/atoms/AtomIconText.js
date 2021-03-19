import React from 'react'

const AtomIconText = ({iconText}) => {
    return ( 
        <span style={{color: "grey", paddingLeft: "5px", paddingRight: "5px"}}>{iconText}</span>
     );
}
AtomIconText.defaultProps = {
    iconText: "undefined"
}
 
export default AtomIconText;