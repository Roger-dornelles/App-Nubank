import React from 'react';
import {useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {CreatePage} from './styled';

import { SchemaValidationCpf } from '../../components/Schema';

const CreateAccount = ()=>{
    const history = useHistory();

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(SchemaValidationCpf)

    });

    const onSubmit = (data)=>{

        if(data){
            history.replace('/CreateEmail');

        }
    };

    return (
        <CreatePage>
            <div className="container">
                <h2>Boas-Vindas ao Nubank para começar, qual seu CPF?</h2>
                <p>Precisamos dele para dar inicio ao seu cadastro</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder="Cpf" {...register('cpf')} />
                    {errors &&
                        <span>{errors.cpf?.message}</span>
                    }
                    <button>Continuar</button>
                </form>

                
            </div>
        </CreatePage>
    )
};

export default CreateAccount;