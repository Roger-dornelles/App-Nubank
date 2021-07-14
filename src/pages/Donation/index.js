import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { DonationPage } from './styled';
import { FaTimes } from "react-icons/fa";

const Donation = ()=>{

    const history = useHistory();

    const handleClose = ()=>{
        history.replace('/Home')
    }

    return (

        <DonationPage>
            <div className="close" onClick={handleClose}><FaTimes/></div>
            <div className="container">
                <h2>Doe usando seu cartão de crédito.</h2>
                <p>Para fortalecer nossas iniciativas no combate ao coronavirus, estendemos este convite a você tambem.</p>
                <p>Atraves do aplicativo, agora você pode fazer doações para recursos médicos (Cruz Vermelha e Hospital das Clinicas de SP) ou distribuição de alimentos em todo o pais (Ação da Cidadania e Central Única das Favelas).</p>
                <Link to="/DonationInstitute">Quero Doar</Link>
            </div>
        </DonationPage>
    )
};

export default Donation;