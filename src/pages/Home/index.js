import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie';
import  { Link } from 'react-router-dom';


import { CardPage } from './styled';

import api from '../../api';

import { 
    FaUserCircle,
    FaMoneyBillWave,
    FaBarcode,
    FaMobileAlt,
    FaDonate,
    FaExchangeAlt,
    FaHandHoldingHeart,
    FaDollarSign,
    FaAlignJustify,
    FaTimes
  } from "react-icons/fa";

  import {doLogout} from '../../helpers/AuthHandler';

const Home = ()=>{

    const [warnings,setWarnings] =useState('');
    const [openMenu,setOpenMenu] = useState(false);
    const [name, setName] = useState('');

    useEffect(()=>{
        let token = Cookies.get('token');

        const userName = async()=>{
            let json = await api.info(token);
             setName(json.name);
        }
        userName();
    },[name])
        
    const handleLogout = ()=>{
        doLogout();
       window.location.href= '/'
    }
    const handleOpenMenu = ()=>{
       setOpenMenu(true);
    }

    const handleWarning = ()=>{

        setWarnings('Indisponivel no momento.')
        setTimeout(()=>{
            setWarnings('');
        },2000)
    }

    const handleClose = ()=>{
        setOpenMenu(false);
    }


    return (

        <CardPage>
            <div className="container">
                <div className="menu">

                    <div className="user-info">
                        <span><Link to="/UserInfo"><FaUserCircle /></Link></span>
                        <h3>Ola, {name}</h3>
                        <p>Disponivel em Conta <br/>
                            R$ 897,21
                        </p>
                        <button onClick={handleLogout}>Sair</button>
                    </div>

                    <div className="icons">
                        <Link to="/Pix"className="icons-items">
                            <p><b><FaMoneyBillWave/></b></p>
                            <span>Pix</span>
                        </Link>
                        <Link to="/Pay"className="icons-items">
                            <p><b><FaBarcode/></b></p>
                            <span>Pagar</span>
                        </Link>
                        <Link to="/Transfer"className="icons-items" >
                            <p><b><FaExchangeAlt/></b></p>
                            <span>Transferir</span>
                        </Link>
                        <Link to="/Deposit" className="icons-items" >
                            <p><b><FaDonate/></b></p>
                            <span>Depositar</span>
                        </Link>
                        <Link to="/Recharger" className="icons-items">
                            <p><b><FaMobileAlt/></b></p>
                            <span>Recarga</span>
                        </Link>
                        <Link to="/Demand" className="icons-items">
                            <p><b><FaDollarSign/></b></p>
                            <span>Cobrar</span>
                        </Link>
                        <Link to="/Donation" className="icons-items" >
                            <p><b><FaHandHoldingHeart/></b></p>
                            <span>Doação</span>
                        </Link>
                    </div>

                    {openMenu === false &&
                    <div className="menu-mobile" onClick={handleOpenMenu}><FaAlignJustify /></div>
                    }

                    {openMenu && 
                        <div className="icons-mobile">
                        <div className="close" onClick={handleClose}><FaTimes /></div>
                            <Link to="/Pix"className="icons-items">
                                <span>Pix</span>
                            </Link>
                            <Link to="/Pay"className="icons-items">
                                <span>Pagar</span>
                            </Link>
                            <Link to="/Transfer"className="icons-items" >
                                <span>Transferir</span>
                            </Link>
                            <Link to="/Deposit" className="icons-items" >
                                <span>Depositar</span>
                            </Link>
                            <Link to="/Recharger" className="icons-items">
                                <span>Recarga</span>
                            </Link>
                            <Link to="/Demand" className="icons-items">
                                <span>Cobrar</span>
                            </Link>
                            <Link to="/Donation" className="icons-items" >
                                <span>Doação</span>
                            </Link>
                        </div>

                    }
                </div>
                <div className="card">
                    <p>Cartão de crédito</p>
                    <p>Fatura Atual</p>
                    <p className="price">R$ 775,37</p>
                    <p>Limite disponivel R$ 1.224,63</p>
                </div>

                <div className="card">
                    <p>Emprestimo</p>
                    <p>Crie um aviso para saber quando um emprestimo ficar disponivel.</p>
                    
                </div>

                <div className="card">
                    <p>Seguro de vida</p>
                    <p>Conheça Nubank vida: um seguro simples e que cabe no bolso.</p>
                    
                </div>
                <div className="card-publishing">
                    <h3>Descubra mais</h3>
                    {warnings && 
                        <b>{warnings}</b>
                    }
                    <div className="card-single">
                        <div className="info">
                            <span>Indique seus amigos</span>
                            <p>Mostre aos seus amigos como é facil ter uma vida sem burocracia</p>
                            <button onClick={handleWarning}>Indique amigos</button>
                        </div>

                        <div className="info">
                            <span>Rewards</span>
                            <p>Pague contas com pontos que nunca expiram</p>
                            <button onClick={handleWarning}>Conhecer</button>
                        </div>
                        
                    </div>
                   
                </div>
                
            </div>
        </CardPage>
    )
};

export default Home;