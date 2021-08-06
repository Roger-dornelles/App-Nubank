import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaValidationPassword } from '../../components/Schema';
import {useDispatch} from 'react-redux';


import { SigninConfirmPage } from './styled';

import api from '../../api';
import { doLogin } from '../../helpers/AuthHandler';


const SigninConfirm = ()=>{
    const dispatch = useDispatch();

    const cpf = useSelector(state=>state.usuario.newCpf)
    const [ alert, setAlert ] = useState('');

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(SchemaValidationPassword)

    });

    const onSubmit = async(data,e)=>{
        e.preventDefault()
        const password = data.password;
        const json = await api.signin(password,cpf);
        

        if(json.error){
            setAlert("Senha incorreta!");
            setTimeout(()=>{setAlert('')},2000)
            return;
        }

        if(json){
            doLogin(json.token);
            dispatch({
                type:'USER_NAME',
                payload:{userName:json.name}
            });
            dispatch({
                type:'CONFIRM_PASS',
                payload:{password:data.password}
            })
            window.location.href = '/Home';
        }
    

    }     

    return (

        <SigninConfirmPage>
            <div className="container">

                <h2>Bom te ver novamente! Para entrar, Digite sua senha.</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Senha"  {...register('password')}/>
                    {errors &&
                        <span>{errors.password?.message}{alert}</span>
                        
                    }
                    <button>Entrar</button>
                </form>
            </div>
        </SigninConfirmPage>
    )
};

export default SigninConfirm;