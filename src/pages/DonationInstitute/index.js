import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import { DonationInstitutePage} from './styled';
import { FaTimes } from "react-icons/fa";

const DonationInstitute = ()=>{
    const history = useHistory();

const handleClose = ()=>{
    history.replace('/Home');
}

    return(

        <DonationInstitutePage>
            <div className="close" onClick={handleClose}><FaTimes /></div>
            <div className="container">
                <h2>Para qual instituição  você gostaria de doar?</h2>
                <div className="select">

                <label><input type="radio" /> Ação da Cidadania</label><br/>
                <label><input type="radio" /> Cruz Vermelha</label><br/>
                <label><input type="radio" /> Hospital das Clinicas</label><br/>
                <label><input type="radio" /> Central Única das Favelas</label>
                </div>
                <Link to="/DonationValue">Continuar</Link>
            </div>
        </DonationInstitutePage>
    )
};

export default DonationInstitute;