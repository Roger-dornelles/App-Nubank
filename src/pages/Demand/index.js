import React,{useState} from 'react';
import { useHistory} from 'react-router-dom';
import { DemandPage } from './styled';
import { FaTimes } from "react-icons/fa";

const Demand = ()=>{
    const history = useHistory();
    const [ value , setValue ] = useState();
    const [ alert , setAlert ] = useState();

    const handleClose = ()=>{
        history.replace('/Home');
    }

    const handleConfirm = (e)=>{
        e.preventDefault();
        setAlert('Ocorreu um erro tente mais tarde!!!');
    }

    return(

        <DemandPage>
            <div className="close" onClick={handleClose}><FaTimes /></div>
            <div className="container">
              {alert && <div className="alert">{alert}</div>}
                <h2>Qual valor você quer receber?</h2>
                <input type="text" placeholder="R$ 0,00" value={value} onChange={e=>setValue(e.target.value)} />
                <button onClick={handleConfirm}>Confirmar</button>
            </div>
        </DemandPage>
    )
};

export default Demand;