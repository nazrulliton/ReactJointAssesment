import React from 'react'
import AtomHomeIcon from '../atoms/AtomHomeIcon'
import AtomIconText from '../atoms/AtomIconText'

const MoleculeHomeIconNav = () => {
    return ( 
        <div style={{ display: "block", top: 20, position: "relative"}}>
        <AtomHomeIcon/><AtomIconText iconText="home"/>
        </div>
     );
}
 
export default MoleculeHomeIconNav;