import React from 'react';
import { useHistory } from 'react-router-dom';
import {CreateEmailPage} from './styled';

import { SchemaValidationEmail } from '../../components/Schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateEmail = ()=>{
    const history = useHistory();

    const { register, handleSubmit, formState: {errors}}= useForm({
        resolver: yupResolver(SchemaValidationEmail)
    });

    const onSubmit = (data)=>{
        if(data){
            history.replace('/CreatePassword');
        }else{
            alert('ocorreu um erro tente mais tarde');
        }
    }

    return (
        <CreateEmailPage>
            <div className="container">
                <h2>Qual o seu e-mail pessoal?</h2>
                <p>Ele sera usado como a principal forma de comunicação Nubank com você.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="E-mail" {...register('email')} />
                    {errors &&
                        <span>{errors.email?.message}</span>
                    }
                    <button>Confirmar</button>

                </form>

              
            </div>
        </CreateEmailPage>
    )
};

export default CreateEmail;