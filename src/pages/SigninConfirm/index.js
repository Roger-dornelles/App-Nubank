import React from 'react';
import { Link } from 'react-router-dom';

import { SigninConfirmPage } from './styled';


const SigninConfirm = ()=>{

    return (

        <SigninConfirmPage>
            <div className="container">

                <h2>Bom te ver novamente! Para entrar, Digite sua senha.</h2>
                <input type="text" placeholder="Senha" />
                <Link to="/Home">Entrar</Link>
            </div>
        </SigninConfirmPage>
    )
};

export default SigninConfirm;