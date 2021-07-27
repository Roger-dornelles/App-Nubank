import styled from 'styled-components';

export const RechargerConfirmPage = styled.div`
width:50%;
margin:0 auto;
transform:translate(0%,50%);

.close{
    width:35px;
    height:38px;
    font-size:30px;
    margin-left:10px;
    cursor:pointer;
    margin-bottom:30px;
    color: red;
}

    .container{
        display:flex;
        width:70%;
        align-items:center;
        margin:0 auto;
        flex-direction:column;
        text-align:center;
        form{
            width:100%;
            input{
                width:75%;
                outline:none;
                border:0;
                border-bottom:1px solid #d6d6d6;
                margin-top:47px;
                font-size:17px;
                text-align:center;
    
            }

            span{
                width:75%;
                background-color:#ff3e3e;
                display: flex;
                justify-content:center;
                margin:0 auto;
                margin-top:5px;
                padding:5px;
            }
    
            button{
                cursor:pointer;
                width:30%;
                font-size:17px;
                display:block;
                margin:0 auto;
                background-color:white;
                box-shadow:1px 3px 3px 2px #d8d8d8;
                border:1px solid #CCC;
                border-radius:7px;
                outline:none;
                padding:5px 0;
                margin-top:35px;
                
    
                &:hover{
                    background-color:#f9f9f9;
                    box-shadow:1px 3px 3px 2px #a7a7a7;
                }
            }
        }
    }

    @media screen and (max-width:1400px){
            width:55%;
            margin:0 auto;
            transform:translate(0%,50%);

            .close{
                margin-left:0px;
                cursor:pointer;
        
            }

            .container{

                width:75%;

                form{
                    width:100%;

                   input{
                    width:100%;
                    }
                    span{
                        width:100%;
                    
                    }
    
    
                    button{
                   
                        width:90%;
                    }
                }


            
            }
        }

        @media screen and (max-width:800px){
            width:95%;
            margin:0 auto;
            transform:translate(0%,30%);

            .close{
                margin-left:0px;
                cursor:pointer;
        
            }

            .container{
                display:flex;


                input{
                    width:100%;

                }


                button{

                    width:90%;


                }


            
            }
        }
`;