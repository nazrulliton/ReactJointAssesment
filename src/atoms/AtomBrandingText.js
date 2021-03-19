import React from 'react'

const AtomBrandingText = ({BrandingText}) => {
    return ( 
        <h2 style={{color: "white", paddingLeft: "15px", paddingRight: "20px", position: "relative", top: -5}}>{BrandingText}</h2>
     );
}
AtomBrandingText.defaultProps = {
    BrandingText: "Student Portal"
}
 
export default AtomBrandingText;