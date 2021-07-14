import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { TranferPage } from './styled';
import { FaTimes } from "react-icons/fa";

const Transfer = ()=>{
    
    const history = useHistory();
    const [ alert, setAlert ] = useState();
    const handleClose = ()=>{
        history.replace('/Home');
    };

    const handleConfirm = ()=>{
        setAlert('Ocorreu um erro tente mais tarde!!!');

    }
    return (

        <TranferPage>
            <div className="close" onClick={handleClose}><FaTimes /></div>
            <div className="container">
                {alert && <div className="alert">{alert}</div>}
                <h3>Qual é o valor da transferencia?</h3>
                <p>Saldo disponivel em conta R$ 897,21</p>
                <input type="text" placeholder="R$ 0,00"/>
                <button onClick={handleConfirm}>Confirmar</button>
            </div>
        </TranferPage>
    )
};

export default Transfer;