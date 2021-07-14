import React from 'react';
import { useHistory } from 'react-router-dom';
import { DepositPage } from './styled';
import { FaBarcode, FaDonate, FaMoneyBillWave, FaTimes } from "react-icons/fa";

const Deposit = ()=>{
    const history = useHistory();

    const handleClose = ()=>{
        history.replace('/Home');
    }

    return (
        <DepositPage>
            <div className="close" onClick={handleClose}><FaTimes /></div>
            <div className="container">
                <h2>Como você que depositar na sua conta Nubank?</h2>
                < div className="item-container">
                    <div className="icon"><FaBarcode /></div>
                    <div className="text">
                        <h3>Boleto</h3>
                        <p>Sem custo e pode demorar 3 dias úteis para o dinheiro cair</p>
                    </div>
                </div>
                < div className="item-container">
                    <div className="icon"><FaDonate /></div>
                    <div className="text">
                        <h3>TED/DOC</h3>
                        <p>Pode ter custos e cai somente em horario comercial de dias úteis</p>
                    </div>
                </div>
                < div className="item-container">
                    <div className="icon"><FaMoneyBillWave /></div>
                    <div className="text">
                        <h3>Trazer seu salario.</h3>
                        <p>Receba todo mês aqui na sua conta.</p>
                    </div>
                </div>
            </div>
        </DepositPage>
    )
};

export default Deposit;