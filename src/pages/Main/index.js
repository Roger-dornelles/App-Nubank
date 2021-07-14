import React from 'react';
import { Link } from 'react-router-dom';

import {MainPage} from './styled';

const Main = ()=>{

    return (
        <MainPage>
            <div className="logo">NuBank</div>
            <p>Um mundo financeiro sem complexidades</p>
            <Link to='/CreateAccount'>começar</Link>
            <Link to='/Signin'>entrar</Link>
        </MainPage>
    )
};

export default Main;