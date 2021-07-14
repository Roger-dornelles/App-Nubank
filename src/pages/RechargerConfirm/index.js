import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { RechargerConfirmPage } from './styled';
import { FaTimes } from "react-icons/fa";

const RechargerConfirm = ()=>{
    const history = useHistory();

    const [ value, setValue ] = useState('');


    const handleClose = ()=>{
        history.replace('/Home');
    };

    const handleConfirm = ()=>{


        setTimeout(()=>{
            history.replace('/Home');
        },750);
    }

    return (

        <RechargerConfirmPage>
            <div className="close" onClick={handleClose}><FaTimes/></div>
            <div className="container">
                <h2>Qual valor você quer recarregar?</h2>
                <input type="text" placeholder="R$ 0,00" value={value} onChange={e=>setValue(e.target.value)}  />
                <button onClick={handleConfirm}>Confirmar</button>
            </div>
        </RechargerConfirmPage>
    )
};

export default RechargerConfirm;