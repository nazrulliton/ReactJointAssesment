import React from 'react'
import AtomBrandingText from '../atoms/AtomBrandingText'
import MoleculeAboutUsNav from '../molecule/MoleculeAboutUsNav'
import MoleculeHomeIconNav from '../molecule/MoleculeHomeIconNav'
import MoleculeRegisterNav from '../molecule/MoleculeRegister'
import MoleculeSearchNav from '../molecule/MoleculeSeachNav'

const OrganismNaviagationHeader = () => {
    return ( 
        <div style={{height: "50px", backgroundColor: "#353945", display: "flex"}}>
            <AtomBrandingText/>
            
            <MoleculeHomeIconNav/>
            <MoleculeRegisterNav/>
            <MoleculeAboutUsNav/>
            
            

            <MoleculeSearchNav/>
            
        </div>
     );
}
 
export default OrganismNaviagationHeader;