import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { RechargerConfirmPage } from './styled';
import { FaTimes } from "react-icons/fa";

const RechargerConfirm = ()=>{
    const history = useHistory();

    const [ value, setValue ] = useState('');
    const [ warning, setWarning ] = useState('');

    const handleClose = ()=>{
        history.replace('/Home');
    };

    const handleConfirm = (e)=>{
        e.preventDefault();
        if(value === ""){
            setWarning('Digite um valor para recarga!');
            setTimeout(()=>{setWarning('')},2700)
            return;
        }

        setTimeout(()=>{
            history.replace('/Home');
        },750);
    }

    return (

        <RechargerConfirmPage>
            <div className="close" onClick={handleClose}><FaTimes/></div>
            <div className="container">
                <h2>Qual valor você quer recarregar?</h2>
                <form onSubmit={handleConfirm}>
                    <input type="text" placeholder="R$ 0,00" value={value} onChange={e=>setValue(e.target.value)}  />
                    {warning && <span>{warning}</span>}
                    <button>Confirmar</button>
                </form>
            </div>
        </RechargerConfirmPage>
    )
};

export default RechargerConfirm;