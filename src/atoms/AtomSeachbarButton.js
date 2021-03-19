import React from 'react'

const AtomSeachbarButton = ({buttonText}) => {
    return ( 
        <>
        <button class="btn success">{buttonText}</button>
        </>
     );
}
AtomSeachbarButton.defaultProps= {
    buttonText: "please add text"

}
 
export default AtomSeachbarButton;