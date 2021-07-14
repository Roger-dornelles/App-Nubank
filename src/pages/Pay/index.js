import React from 'react';
import { useHistory } from 'react-router-dom';
import { PayPage } from './styled';

import {
    FaTimes,
    FaMoneyBillWave,
    FaRegCreditCard,
    FaBarcode
}from "react-icons/fa";

const Pay = ()=>{
    const history = useHistory();
    const handleClose = ()=>{
        history.replace('/Home')
    }

    return(
        <PayPage>
            <div className="close" onClick={handleClose}><FaTimes /></div>
            <div className="container">
                <div className="item-container">
                    <span><FaMoneyBillWave /></span>
                    <div className="text">
                        <h2>Pagar com Pix</h2>
                        <p>Leia um QrCode ou cole o código.</p>
                    </div>
                </div>
                <div className="item-container">
                    <span><FaRegCreditCard /></span>
                    <div className="text">
                        <h2>Pagar Fatura do cartão</h2>
                        <p>Leia um QrCode ou cole o código.</p>
                    </div>
                </div>
                <div className="item-container">
                    <span><FaBarcode /></span>
                    <div className="text">
                        <h2>Pagar um boleto</h2>
                        <p>Leia um QrCode ou cole o código.</p>
                    </div>
                </div>
                
            </div>
        </PayPage>
    )
};

export default Pay;