/* eslint-disable no-unused-vars */
import React,{ useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SchemaValidationPassword } from '../../components/Schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CreatePasswordPage } from './styled';

// api
import api from '../../api';


const CreatePassword = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [warning, setWarning] = useState([]);

    const {handleSubmit,register,formState:{errors}} = useForm({
        resolver:yupResolver(SchemaValidationPassword)
    });

    const onSubmit = async (data)=>{
        dispatch({
            type:"SET_PASSWORD",
            payload:{password:data.password}
        });
       
        history.replace('/CreateName');

    }

    return (
        <CreatePasswordPage>
            <div className="container">

                <h2>Qual a sua senha de acesso ao aplicativo?</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder="Senha" { ...register('password')} />
                    {errors && <span>{errors.password?.message} {warning}</span>}
                    <button>Entrar</button>
                </form>
            </div>
        </CreatePasswordPage>
    )
};

export default CreatePassword;