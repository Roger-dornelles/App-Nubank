import styled from 'styled-components';

export const CreatePasswordPage = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;


    .container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:50%;
        margin-top:120px;

        h2{
            font-size:27px;
        }
        form{
            width:70%;

            input{
                display:flex;
                margin: 0 auto;
                width:80%;
                font-size:19px;
                border:0;
                border-bottom:1px solid #ccc;
                outline:none;
                text-align:center;
                margin-top:90px;
                margin-bottom:15px;
            }

            >span, p{
                width:80%;
                display:block;
                background-color: rgb(255,0,0);
                margin: 0 auto;
                border-radius: 4px;
                text-align: center;

            }

          

            >button{
                cursor: pointer;
                display:block;
                margin:0 auto;
                width:90%;
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

    }

    @media screen and (max-width:1024px){

        .container{
            width:100%;
            margin-top:50px;

            form{
                width:100%;

                input{
                    width:95%;
                
                }

                >button{
                    width:90%;
        
                }
            }

        }
    }
`;