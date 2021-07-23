/* eslint-disable no-unused-vars */
import React from 'react';
import {useHistory} from 'react-router-dom';
import { SchemaValidationPassword } from '../../components/Schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CreatePasswordPage } from './styled';

// api
import api from '../../api';


const CreatePassword = ()=>{
    const history = useHistory();

    const {handleSubmit,register,formState:{errors}} = useForm({
        resolver:yupResolver(SchemaValidationPassword)
    });

    const onSubmit = async (data)=>{
        let name = "TESTE";
        let email = 'teste@testeE.com';
        let cpf = 123456789102;
        let password = 123456;
        
        //let token = "$2a$10$iQoeQy0dgY9Er.Egwdsf6OLNY2Qc4zYzUTqrPOkv/.Q0RWX8LzdFi"
        let json = await api.signup(name,email,cpf,password);
        console.log('TESTE DO RESULTADO: ',json)

        if(json !== ''){
            console.log("ERROR: ",json.error)
        }else{
            console.log("JSON: ",json.data)
        }

        console.log("JSON: ",json)

        //if(json){
            //history.replace('/Home');
       // }

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