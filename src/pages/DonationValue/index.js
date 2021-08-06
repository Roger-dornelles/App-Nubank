import React,{useState} from 'react';
import { useHistory} from 'react-router-dom';
import { DonationValuePage } from './styled';
import { FaTimes } from 'react-icons/fa';

const DonationValue = ()=>{
    const [warning,setWarning] = useState('');

    const history = useHistory();
    const handleClose = ()=>{
        history.replace('/Home');
    };
    const handleDonation = ()=>{
        setWarning('Obrigado pela sua doação.');

        setTimeout(()=>{
            history.replace('/Home');
            setWarning('');
        },3000)
    }

    return(

        <DonationValuePage>
            <div className="close" onClick={handleClose}><FaTimes /></div>
            <div className="container">
                <h2>Qual o valor da doação?</h2>
                    {warning && <span className="warning">{warning}</span>}<br/>
                <div className="select">
                    <label><input type="radio" />R$ 5,00</label><br/>
                    <label><input type="radio" />R$ 10,00</label><br/>
                    <label><input type="radio" />R$ 20,00</label><br/>
                    <label><input type="radio" />R$ 30,00</label><br/>
                    <label><input type="radio" />R$ 50,00</label><br/>
                    <label><input type="radio" />R$ 100,00</label>
                </div>
                <button onClick={handleDonation}>Doar</button>
            </div>
        </DonationValuePage>
    )
};

export default DonationValue;