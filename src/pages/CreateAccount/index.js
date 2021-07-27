/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {CreatePage} from './styled';

import {useDispatch} from 'react-redux';

import api from '../../api';

import { SchemaValidationCpf } from '../../components/Schema';

const CreateAccount = ()=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const [ alert ,setAlert ] = useState([]);

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(SchemaValidationCpf)

    });

    const onSubmit = async(data)=>{

     
        const cpf = data.cpf;
        const json = await api.consultCpf(cpf);
        if(json.error){
            setAlert(json.error);
            setTimeout(()=>{
                history.replace('/Signin')
            },3000)
            return;
        };

        dispatch({
            type:'SET_CPF',
            payload:{cpf:cpf}
        });
    
        history.replace('/CreateEmail');
            
         



    };


    return (
        <CreatePage>
            <div className="container">
                <h2>Boas-Vindas ao Nubank para começar, qual seu CPF?</h2>
                <p>Precisamos dele para dar inicio ao seu cadastro</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder="Cpf" cpf="data.cpf" {...register('cpf')} />
                    {errors &&
                        <span>{errors.cpf?.message}{alert}</span>
                        
                    }
                    
                    <button>Continuar</button>
                </form>

                
            </div>
        </CreatePage>
    )
};

export default CreateAccount;