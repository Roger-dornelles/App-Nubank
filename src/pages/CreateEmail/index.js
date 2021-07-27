import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import {CreateEmailPage} from './styled';

import { SchemaValidationEmail } from '../../components/Schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import api from '../../api';

const CreateEmail = ()=>{
    const history = useHistory();
    const dispatch = useDispatch();

    const [warning, setWarning ] = useState('');


    const { register, handleSubmit, formState: {errors}}= useForm({
        resolver: yupResolver(SchemaValidationEmail)
    });

    const onSubmit = async(data)=>{
        let email = data.email;
        const json = await api.consultEmail(email);

        if (json.error){
           setWarning(json.error)
           setTimeout(() => {setWarning('')},2000);
           return;
        }

        dispatch({
            type:'SET_EMAIL',
            payload:{email:data.email}
        });
           
        history.replace('/CreatePassword');
       
    }

    return (
        <CreateEmailPage>
            <div className="container">
                <h2>Qual o seu e-mail pessoal?</h2>
                <p>Ele sera usado como a principal forma de comunicação Nubank com você.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="E-mail" email="data.email" {...register('email')} />
                    {errors &&
                        <span>{errors.email?.message}{warning}</span>
                    }
                    <button>Confirmar</button>

                </form>

              
            </div>
        </CreateEmailPage>
    )
};

export default CreateEmail;