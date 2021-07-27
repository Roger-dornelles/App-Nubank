import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaValidationCpf } from '../../components/Schema';
import { SigninPage } from './styled';

import api from '../../api';


const Signin = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const [ alert , setAlert ] = useState('')

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(SchemaValidationCpf)

    });

    const onSubmit = async(data)=>{

        
        const cpf = data.cpf;
        const json = await api.consultCpf(cpf);
        if(!json.error){
            setAlert("Cpf invalido");
            setTimeout(()=>{setAlert('')},2000)
            return;
        }
        if(json){
            dispatch({
                type:'REMENBER_CPF',
                payload:{newCpf:data.cpf}
            });
            history.replace('/SigninConfirm')
        }

    }       



    return (
        <SigninPage>
            <div className="container">
                <h2>Bom te ver novamente! Para entrar, digite seu cpf.</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder="Cpf"  {...register('cpf')} />
                    {errors &&
                        <span>{errors.cpf?.message}{alert}</span>
                        
                    }
                    <button>Continuar</button>
                </form>
                <p>É novo aqui?  <Link to="/CreateAccount" className="btn">começar</Link></p>
            </div>
        </SigninPage>
    )
};

export default Signin;