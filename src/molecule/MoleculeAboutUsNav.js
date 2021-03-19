import React from 'react'
import AtomQuestionIcon from '../atoms/AtomQuestionIcon'
import AtomIconText from '../atoms/AtomIconText'

const MoleculeAboutUsNav = () => {
    return ( 
        <div style={{display: "block", top: 20, position: "relative"}}>
        <AtomQuestionIcon/><AtomIconText iconText="About Us"/>
        </div>
     );
}
 
export default MoleculeAboutUsNav;