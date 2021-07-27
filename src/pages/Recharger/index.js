import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { RechargerPage } from './styled';
import { FaTimes } from "react-icons/fa";

const Recharger = ()=>{
    const history = useHistory();
    const [value, setValue ] = useState('');
    const [ warning, setWarning ] = useState('');
    const handleClose = ()=>{
        history.replace('/Home');
    }

    const handleConfirm = (e)=>{
        e.preventDefault();
        if(!value){
            setWarning('Digite um valor para recarga!');
            setTimeout(() => {setWarning('')},2000)
            return;
        }
        history.replace('/RechargerConfirm');
    }

    return (
        <RechargerPage>
            <div className="close" onClick={handleClose}><FaTimes /></div>
            <div className="container">
                <h3>Qual o número você quer recarregar?</h3>
                <form onSubmit={handleConfirm}>
                    <input type="text" placeholder="(DDD) + TELEFONE" value={value} onChange={e=>setValue(e.target.value)} />
                    {warning && <span>{warning}</span>}
                    <button>Confirmar</button>
                </form>
            </div>
        </RechargerPage>
    )
};

export default Recharger;