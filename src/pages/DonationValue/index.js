import React from 'react';
import { useHistory} from 'react-router-dom';
import { DonationValuePage } from './styled';
import { FaTimes } from 'react-icons/fa';

const DonationValue = ()=>{
    const history = useHistory();
    const handleClose = ()=>{
        history.replace('/Home');
    }

    return(

        <DonationValuePage>
            <div className="close" onClick={handleClose}><FaTimes /></div>
            <div className="container">
                <h2>Qual o valor da doação?</h2>
                <div className="select">
                    <label><input type="radio" />R$ 5,00</label><br/>
                    <label><input type="radio" />R$ 10,00</label><br/>
                    <label><input type="radio" />R$ 20,00</label><br/>
                    <label><input type="radio" />R$ 30,00</label><br/>
                    <label><input type="radio" />R$ 50,00</label><br/>
                    <label><input type="radio" />R$ 100,00</label>
                </div>
                <button>Doar</button>
            </div>
        </DonationValuePage>
    )
};

export default DonationValue;