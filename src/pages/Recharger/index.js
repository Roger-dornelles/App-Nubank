import React from 'react';
import { useHistory } from 'react-router-dom';
import { RechargerPage } from './styled';
import { FaTimes } from "react-icons/fa";

const Recharger = ()=>{
    const history = useHistory();
    const handleClose = ()=>{
        history.replace('/Home');
    }

    const handleConfirm = ()=>{
        history.replace('/RechargerConfirm');
    }

    return (
        <RechargerPage>
            <div className="close" onClick={handleClose}><FaTimes /></div>
            <div className="container">
                <h3>Qual o número você quer recarregar?</h3>
                <input type="text" placeholder="(DDD) + TELEFONE" />
                <button onClick={handleConfirm}>Confirmar</button>
            </div>
        </RechargerPage>
    )
};

export default Recharger;