import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';

import { FaBarcode, FaMoneyBillWave, FaSearchDollar, FaTimes } from "react-icons/fa";

import { PixPage } from './styled';

const Pix = ()=>{
    const history = useHistory();

    const [alert,setAlert] = useState('');

    const handleClose = ()=>{
        history.replace('/Home');
    }

    const handleAlert = ()=>{
        setAlert('Desculpe estamos em manutenção')
    }

    return(

        <PixPage>
            <div className="close" onClick={handleClose}><FaTimes /></div>

            <div className="container">
                <h3>Minha área Pix.</h3>
                <p>Tudo o que você precisa pagar, Transferir ou cobrar.</p>

                {alert && <div className="warning">{alert}</div>}
                <div className="icons">
                    <div className="icon-item" onClick={handleAlert}>
                        <p><b><FaBarcode /></b></p>
                        <span>Pagar</span>
                    </div>
                    <div className="icon-item" onClick={handleAlert}>
                        <p><b><FaSearchDollar/></b></p>
                        <span>Transferir</span>
                    </div>
                    <div className="icon-item" onClick={handleAlert}>
                        <p><b><FaMoneyBillWave /></b></p>
                        <span>Cobrar</span>
                    </div>
                </div>
            </div>
        </PixPage>
    )
};

export default Pix;