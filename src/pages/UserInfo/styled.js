import styled from 'styled-components';

export const UserInfoPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fbfbfb;

    .user-info {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        width: 40%;
        height: 50%;
        background-color: #e5e5e5;
        border-radius:18px;

        h2{
            margin-top: 30px;
        }
        form{
            width:80%;
            display: flex;
            flex-direction:column;
            align-items: center;
            margin-top: 30px;
            
            .error, .success{
                width:100%;
                display: flex;
                justify-content: center;
                background: #ff2f2f;
                margin-bottom: 10px;
                padding: 3px 0px;
            }
            .success{
                background-color: #42ff72;
            }

            label{
                display: flex;
                flex-direction:row;
                justify-content: space-between;
                width: 100%;
                font-size:19px;
                margin-bottom: 10px;

                input{
                    
                    font-size:19px;
                    outline: none;
                    width:100%;
                    height:20px;
                    border:none;
                    margin-bottom: 15px;
                    margin-left: 10px;
                    background-color: #e5e5e5;
                }

                button{
                    padding: 0 13px;
                    border:none;
                    outline:none;
                    cursor: pointer;
                    background-color: #00bf60;

                }
                .cancel{
                    margin-left: 5px;
                    background-color: #ff4242;
                }
            }

            .buttons{
                margin-bottom: 15px;

                a{
                    font-size:17px;
                    display: block;
                    text-align: center;
                    background-color: #ff5151;
                    color: black;
                    text-decoration: none;
                    width:150px;
                    padding: 4px 0;
                }
            }
            
        }

       
    }


    @media (max-width: 1024px){

        .user-info {
        width: 70%;
        height: auto;

        form{
            width:100%;
            height:100%;
            label{
                width: 100%;
                padding-left: 7px;

                input{
                    font-size:19px;
                    outline: none;
                    width:100%;
                    height:20px;
                    border:none;
                    margin-bottom: 15px;
                    margin-left: 10px;
                   
                }

            }
            
         
        }

        }
    }


    @media (max-width: 768px){

        .user-info {
        width: 95%;

        form{
            display: flex;
            width:100%;
            height:100%;
            label{
                width: 100%;
                padding-left: 7px;
                
                input{
                    font-size:19px;
                    outline: none;
                    width:60%;
                    height:20px;
                    border:none;
                    margin-bottom: 15px;
                    margin-left: 10px;

                }
                button{
                    padding: 0 3px;
                    border:none;
                    outline:none;
                    cursor: pointer;
                    background-color: #00bf60;
                .cancel{
                    margin-left: 5px;
                    background-color: #ff4242;
                }
                }

            }
            
           
        }

    }
    }

`;