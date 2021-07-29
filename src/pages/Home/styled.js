import styled from 'styled-components';

export const CardPage = styled.div`
    display:flex;
    margin:0 auto;
    height:100vh;
    background-color:#ebebeb;

    .container {
        margin:0 auto;
        width:60%;
        height:100%;
        display:flex;
        flex-direction:column;

        .menu {
            width:100%;
            background-color:#BE6CE4;
            color:white;
            margin-bottom:12px;
            display:flex;
            justify-content:space-between;

            .title{
                margin-top:17px;
                padding:5px;
                display:flex;
                flex-direction:column;
                
                span{
                    font-size:45px;
                }
                p{
                    font-size:17px;
                    line-height:20px;
                }
                > button{
                    width:50%;
                    border:none;
                    background-color: #ebebeb;
                    cursor:pointer;
                }
            }
            
            .icons {
                display:flex;
                width:55%;
                margin-top:12px;
                text-align:center;

                .icons-items{
                    color: #000000;
                    width:10%;
                    height:47%;
                    margin: 0 auto;
                    text-decoration:none;

                    p{
                        cursor:pointer;
                        width:50px;
                        height:50px;
                        border-radius:50%;
                        background-color:#f3f3f3;
                        color:black;
                        margin-left:5px;

                        b{
                            display:block;
                            transform:translate(0%,35%);
                            font-size:27px;
                        }

                        &:hover{
                            background-color:#dfdfdf;
                        }

                    }
    
                    span{
                        display:block;
                        font-size:17px;
                        margin-top:5px;
                        
                    }
                }

            }

            .menu-mobile{
                display:none;
                flex-direction: column;
                margin-top:20px;
                margin-right: 20px;
                cursor:pointer;
                font-size: 30px;
            }

            .icons-mobile {
                display:flex;
                flex-direction:column;
                margin-right:40px;
                z-index:1;
                margin-top:12px;
                text-align:center;
                

                .close{
                    font-size:27px;
                    color:red;
                    cursor:pointer;
                }

                .icons-items{
                    color: #000000;
                    width:10%;
                    height:47%;
                    margin: 0 auto;
        
                    text-decoration:none;

                    span{
                        display:block;
                        font-size:20px;
                        color:white;
                        margin-right: 30px;
                        
                    }

                }

            }
        }


        .card{
            width:100%;
            display:flex;
            flex-direction:column;
            margin: 0 auto;
            border:1px solid #dddddd;
            background-color: #ffffff;
            margin-bottom:35px;

            &:hover{
                box-shadow:2px 2px 10px #909090;
                cursor:pointer;
            }

            p{
                margin:5px 0;
                margin-left:12px;
            }
            .price{
                font-size:22px;
            }
        }

        .card-publishing{
            width:100%;
            display:flex;
            flex-direction:column;
            margin: 0 auto;
            border:1px solid #dddddd;
            background-color: #f8f8f8;
            margin-bottom:35px;
            padding:17px 0;
            
            h3{
                margin-left:17px;
            }
            b{
                display: block;
                margin: 0 auto;
                text-align:center;
                background-color:yellow;
                width:60%;
            }

            .card-single{
                width:100%;
                display:flex;
                justify-content:space-around;
                margin-top:30px;

                .info{
                    width:45%;
                    display:flex;
                    flex-direction:column;
                    border:1px solid #dddddd;
                    background-color: #f8f8f8;
                    padding:10px;
                    font-size:16px;

                    span{
                        font-size:19px;
                    }

                    button{
                        display:block;
                        margin: 0 auto;
                        width:50%;
                        cursor:pointer;
                        padding:7px;
                        background-color:#BE6CE4;
                        outline:0;
                        border:0;
                        border-radius:7px;
                        color:white;
                        font-size:16px;
                        margin-bottom:17px;

                        &:hover{
                            box-shadow:0px 2px 7px #6b676b;
                        }

                    }

                    &:hover{
                        box-shadow:0px 2px 7px #373737;
                    }
                }
            }
            
        }
    }

    @media screen and (max-width:1550px){

        .container {
            margin:0 auto;
            width:85%;
            display:flex;
            flex-direction:column;
            height:100%;

            .menu {
                width:100%;              
                margin-bottom:12px;
                display:flex;
                justify-content:space-between;

                .icons {
                    display:flex;
                    width:50%;
                    margin-top:12px;
                    text-align:center;

                    .icons-items{
                        width:10%;
                        margin: 0 auto;
        
                        span{
                            display:block;
                            margin-right: 50px;
                            
                        }
                    }

                }
               
            }
        }

    }
    @media screen and (max-width:1290px){

    .container {
        margin:0 auto;
        width:90%;
        height:100%;

        .menu {
                width:100%;              
                margin-bottom:12px;
                display:flex;
                justify-content:space-between;

                .icons {
                    display:flex;
                    width:60%;
                    margin-top:12px;
                    text-align:center;

                    .icons-items{
                        width:10%;
                        margin: 0 auto;
        
                        span{
                            display:block;
                            margin-right: 50px;
                            
                        }
                    }

                }
               
            }
    
        
    }
}

}

    @media screen and (max-width:1024px){
 

        .container{
            display:flex;
            width:100%;
            flex-direction:column;
            align-items:center;
            margin-top:0px;
            padding-bottom: 35px;
            text-align:center;
            height:100%;

            .menu {
                width:95%;    
                margin-bottom:12px;
                display:flex;
                justify-content:space-between;

                .title{
                    padding:12px;
                    display:flex;
                    flex-direction:column;
                    
                    span{
                        font-size:45px;
                    }
                    p{
                        font-size:17px;
                        line-height:25px;
                    }
                }
                .menu-mobile{
                    display:flex;

                }
                
                .icons {
                    display:none;
                    width:50%;
                    margin-top:12px;
                    text-align:center;

                    .icons-items{
                        width:10%;
                        margin: 0 auto;
        
                        span{
                            display:block;
                            margin-right: 50px;
                            
                        }
                    }

                }
            }

            .card{
                width:95%;

            }

            .card-publishing{
                width:95%;
                flex-direction:column;

                b{
                width:100%;
            }
                .card-single{
                    width:100%;


                    .info{
                        width:45%;
                        display:block;

                        span{
                            font-size:19px;
                        }

                        button{
                            display:block;
                            margin: 0 auto;
                            width:70%;
                            margin-bottom:17px;

                        
                    
                        }
                    }
                }
                
      }  }
    

    @media screen and (max-width:830px){

        .container{
            height:100%;

            .card-publishing{
                width:95%;
                margin:0 auto;

                .card-single{
                    width:100%;
                    display:block;
                    margin-top:30px;

                    .info{
                        width:88%;
                        margin: 0 auto;
                        margin-bottom: 20px;
                    
                    }
                }
            }
                
        }
    }
`;