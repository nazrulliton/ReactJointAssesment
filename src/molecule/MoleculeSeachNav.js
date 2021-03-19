import React from 'react'
import AtomSeachbarButton from '../atoms/AtomSeachbarButton'
import AtomSearchInput from '../atoms/AtomSearchInput'

const MoleculeSearchNav = () => {
    return ( 
        <div style={{position: "absolute", right: 100, top: 15}}>
            <AtomSearchInput/><AtomSeachbarButton buttonText="Search"/>
        </div>

     );
}
 
export default MoleculeSearchNav;