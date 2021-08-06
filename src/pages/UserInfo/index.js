import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Cookies from 'js-cookie';

import {UserInfoPage} from './styled'

import api from '../../api';

const UserInfo = ()=>{
    const token = Cookies.get('token');

    const NewPassword = useSelector(state => state.usuario.newPass);

    const [blocked,setBlocked] = useState(true);
    const [blocked1,setBlocked1] = useState(true);
    const [blocked2,setBlocked2] = useState(true);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const [userName,setUserName ] = useState('');
    const [userCpf, setUserCpf ] = useState('');
    const [userEmail,setUserEmail] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [userConfirmPassword, setUserConfirmPassword ] = useState('');

    const [editPass, setEditPass ] = useState(true);
    const [editName, setEditName] = useState(true);
    const [editEmail, setEditEmail ] = useState(true);
     useEffect(()=>{
        const user = async ()=>{
            setBlocked(true);
            let token = Cookies.get('token');
            let json = await api.info(token);
           setUserName(json.name);
           setUserEmail(json.email);
           setUserCpf(json.cpf)
         }
         user();
     },[]);
    

    const handleEditName = async ()=>{
        setBlocked(false);
        setEditName(false);
    }

    const handleSaveName = async (e)=>{
        e.preventDefault();
        let json = await api.editName(token, userName);
        
        if(json.error){
            alert('Ocorreu um erro...');
        }else{
            setSuccess('Nome atualizado com sucesso...');
            setTimeout(()=>{
                setSuccess('');
            },2500)
        }
        setBlocked(true);
        setEditName(true);
    }

    const editCancelName = ()=>{
        setEditName(true);
       
        setBlocked(true);
    }

    const handleEditEmail = ()=>{
        setBlocked1(false);
        setEditEmail(false);    
    }

    const handleSaveEmail = async(e)=>{
        e.preventDefault();
        setEditEmail(false);
        let json = await api.editEmail(token,userEmail);
        if(json.error){
            setError(json.error);
            setTimeout(()=>{
                setError('');
            },2500);
            return;
        }else{
            setSuccess('Email cadastro com sucesso...');
            setTimeout(()=>{
                setSuccess('');
            },2500);
        };
        setEditEmail(true);
        setBlocked1(true);
    }

    const handleCancelEmail = ()=>{
        setEditEmail(true);
        setBlocked1(true);

    }

    const editPassword = ()=>{
        setBlocked2(false)
        setEditPass(false);
        //setEdit(false)
    }
    const editCancelPassword = ()=>{
        setEditPass(true);
        setBlocked2(true);
        setUserPassword(NewPassword);
        setUserConfirmPassword('');
    }

    const handleSavePassword = async(e)=>{
        e.preventDefault();
        if(userPassword === userConfirmPassword){

            let json = await api.editPassword(token,userPassword);
            if(json.error){
                setError(json.error);
                setTimeout(()=>{
                    setError('');
                },2500);
                return;
            }else{
                setSuccess('Senha atualizada...');
                setEditPass(true);
                setBlocked2(true);
                setUserConfirmPassword('');
                setTimeout(()=>{
                    setSuccess('');
                },2500);
                
            }
        }else{
            setError('Senhas diferentes');
            setTimeout(()=>{
                setError('');
            },2500);
            return;
        }
        
    }

    
    
    return (
        <UserInfoPage>
            <div className="user-info">
                <h2>Informações do Usuario.</h2>
                <form>
                    {error && <span className="error">{error}</span>}
                    {success && <span className="success">{success}</span>}
                    <label>
                        Nome: <input type="text" disabled={blocked} value={userName} onChange={e=>setUserName(e.target.value)} />
                        {editName && <button onClick={handleEditName}>Editar</button>}
                        {!editName && 
                            <> 
                                <button onClick={handleSaveName}>Salvar</button>
                                <button className="cancel" onClick={editCancelName}>Cancelar</button>
                            </>
                        }
                    </label>

                    <label>
                        Cpf:<input type="text" disabled value={userCpf}  onChange={e=>setUserCpf(e.target.value)} />
                    </label>

                    <label>
                        Email: <input type="text" disabled={blocked1} value={userEmail}  onChange={e=>setUserEmail(e.target.value)} />
                        {editEmail && <button onClick={handleEditEmail}>Editar</button>}
                        {!editEmail && 
                            <> 
                                <button onClick={handleSaveEmail}>Salvar</button>
                                <button className="cancel" onClick={handleCancelEmail}>Cancelar</button>
                            </>
                        }
                    </label>

                    <label>
                        Senha: <input type="text" disabled={blocked2} placeholder={NewPassword} value={userPassword} onChange={e=>setUserPassword(e.target.value)} />
                        {editPass && <button onClick={editPassword}>Nova senha</button>}
                        {!editPass && 
                            <> 
                                <button onClick={handleSavePassword}>Salvar</button>
                                <button className="cancel" onClick={editCancelPassword}>Cancelar</button>
                            </>
                        }
                    </label> 
                    {!editPass && 
                        <label>
                            Confirmar senha: <input type="text"  className='inputPass' value={userConfirmPassword} onChange={e=>setUserConfirmPassword(e.target.value)} />
                        </label> 
                    }

                    <div className="buttons">
                        <Link to="/Home">Cancelar</Link>
                    </div>
                </form>

            </div>
        </UserInfoPage>
    )
}

export default UserInfo;