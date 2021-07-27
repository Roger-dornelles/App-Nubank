import styled from 'styled-components';

export const CreateEmailPage = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    margin:0 auto;

    .container{
        width:70%;
        display:flex;
        align-items:center;
        flex-direction:column;
        margin:0 auto;
        margin-top:120px;
        
        h2{
            font-size:25px;
        }

        p{
            font-size:18px;
            line-height:28px;
        }
        form{
            width:70%;
            input{
                display:flex;
                justify-content:center;
                margin:0 auto;
                margin-top:75px;
                margin-bottom:15px;
                width:100%;
                height:30px;
                border:none;
                border-bottom:1px solid #CCC;
                text-align:center;
                outline:none;
                font-size:19px;
            }

            span{
                width:100%;
                display:flex;
                justify-content:center;
                border-radius: 5px;
                background-color:rgb(255,0,0);
                margin: 0 auto;
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
        width:100%;

        .container{
        width:90%;
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