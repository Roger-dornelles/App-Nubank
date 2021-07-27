import styled from 'styled-components';

export const CreateNamePage = styled.div`
    display: flex;
    width: 50%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 150px;


    form{
        width: 100%;
        margin: 0 auto;
        
        input {
            font-size: 16px;
            text-align: center;
            display: flex;
            margin: 0 auto;
            margin-top:70px;
            width: 50%;
            border: none;
            border-bottom:1px solid #CCC;
            outline: none;
        }
        span{
                width:50%;
                display:flex;
                justify-content:center;
                border-radius: 5px;
                background-color:rgb(255,0,0);
                margin: 0 auto;
                margin-top:4px;
                text-align: center;
            }

        button{
                cursor: pointer;
                display:block;
                margin:0 auto;
                width:40%;
                text-align:center;
                padding:9px 5px;
                background-color:#CC66F0;
                color:black;
                margin-top:200px;
                border:0;
                border-radius:8px;
                font-size:22px;
                text-decoration:none;

                &:hover{
                    box-shadow:5px 3px 5px #bbbbbb;
                    background-color:#c751ee;
                }
            }
    }

    @media screen and (max-width:1400px) {
    width: 90%;

    margin-top: 150px;


    form{
        width: 100%;
        margin: 0 auto;
        
        input {

            margin-top:70px;
            width: 50%;

        }
        span{
            width: 50%;
            margin-top:7px;

        }

        button{
                width:40%;
                text-align:center;
                padding:9px 5px;
              
                margin-top:200px;
             
            }
    }

    }

    @media screen and (max-width:768px) {
    width: 100%;

    margin-top: 150px;


    form{
        width: 100%;
        margin: 0 auto;
        
        input {

            margin-top:70px;
            width: 90%;

        }
        span{
            display: flex;
            margin: 0 auto;
            justify-content: center;
            width: 90%;
        }

        button{
                width:80%;
                text-align:center;
                padding:9px 5px;
              
                margin-top:120px;
             
            }
    }

    }
`;