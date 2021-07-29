import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';

import { useForm } from "react-hook-form";
import { SchemaValidationName } from '../../components/Schema';
import { yupResolver } from '@hookform/resolvers/yup';

import api from '../../api';
import { doLogin } from '../../helpers/AuthHandler';

import {CreateNamePage} from './styled';

const CreateName = ()=>{
    const history = useHistory();
    const dispatch = useDispatch();

    const password = useSelector(state=>state.usuario.password);
    const cpf = useSelector(state=>state.usuario.cpf);
    const email = useSelector(state=>state.usuario.email);

    const [ name, setName ] = useState('');
    const [ alert, setAlert ] = useState('');

    const {handleSubmit,register,formState:{errors}} = useForm({
        resolver:yupResolver(SchemaValidationName)
    });
    const onSubmit = async(data) =>{
       let name = data.name;
        const json = await api.signup(password, email,cpf, name);
        let newName = '';
        for(let i in json) {
            newName = json[i].name;
        }

        if(json.error){
            setAlert("Ocorreu um erro tente mais tarde!!!");
            setTimeout(() =>{
                history.replace('/')
            },2500)
        }
        if(json){
            for(let i in json) {
                console.log('TOKEN: ',json[i].token)

                doLogin(json[i].token);
            }
            dispatch({
                type:'SET_NAME',
                payload: {name:newName}
            });
            window.location.href = '/Home';
        }
    };
        

    return(
        <CreateNamePage>
            <h2>Para terminarmos o seu Cadastro, precisamos saber seu nome?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Digite seu nome..." {...register("name")} value={name} onChange={e=>setName(e.target.value)} />
                {errors && <span>{errors.name?.message}{alert}</span>}
                <button>Continuar</button>
            </form>
        </CreateNamePage>

    )
};

export default CreateName;