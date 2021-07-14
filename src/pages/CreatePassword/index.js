import React from 'react';
import {useHistory} from 'react-router-dom';
import { SchemaValidationPassword } from '../../components/Schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CreatePasswordPage } from './styled';


const CreatePassword = ()=>{
    const history = useHistory();

    const {handleSubmit,register,formState:{errors}} = useForm({
        resolver:yupResolver(SchemaValidationPassword)
    });

    const onSubmit = (data)=>{
        
        if(data){
            history.replace('/Home');
        }
    }

    return (
        <CreatePasswordPage>
            <div className="container">

                <h2>Qual a sua senha de acesso ao aplicativo?</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder="Senha" { ...register('password')} />
                    {errors && <span>{errors.password?.message}</span>}
                    <button>Entrar</button>
                </form>
            </div>
        </CreatePasswordPage>
    )
};

export default CreatePassword;