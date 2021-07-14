import React from 'react';
import { Link } from 'react-router-dom';

import { SigninPage } from './styled';

const Signin = ()=>{

    return (
        <SigninPage>
            <div className="container">
                <h2>Bom te ver novamente! Para entrar, digite seu cpf.</h2>
                <input type="text" placeholder="cpf" />
                <p>É novo aqui?  <Link to="/CreateAccount" className="btn">começar</Link></p>
                <Link to="/SigninConfirm">continuar </Link>
            </div>
        </SigninPage>
    )
};

export default Signin;