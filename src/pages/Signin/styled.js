import styled from 'styled-components';

export const SigninPage = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    

    .container {
        width:50%;
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:150px;

        h2{
            font-size:25px;
        }
        form{
            width:50%;
            input{
                width:100%;
                margin-top:120px;
                border:0;
                border-bottom:1px solid #CCC;
                font-size:19px;
                text-align:center;
                outline:0;
            }
            span{
                display:flex;
                justify-content:center;
                width: 100%;
                background-color: #f13636;
               margin-top:5px;
            }
    
            button{
                cursor: pointer;
                display:block;
                margin:0 auto;
                width:100%;
                text-align:center;
                padding:9px 5px;
                background-color:#CC66F0;
                color:black;
                margin-top:100px;
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
        p{
            margin-top: 50px;
            font-size:19px;
            display:flex;
            justify-content:center;
            align-items:center;
            width:40%;
            flex-direction: row;

            a.btn{
                display:block;
                font-size:20px;
                padding:0;
                background-color:white;
                margin-bottom: 3px;
                margin-left: 5px;
                text-align: left;

                 &:hover{
                box-shadow:none;
                text-decoration:underline;
            }
            }
        }
    }

    @media screen and (max-width:1024px){

        .container {
            width:100%;
            margin-top:50px;


            input{
                width:95%;
                margin-top:70px;
            }
            p{
                font-size:19px;
                display:flex;
                justify-content:center;
                align-items:center;
                width:40%;
                flex-direction: row;
            
                a.btn{
                    width:50%;
                    display:block;
                    font-size:20px;
                    padding:0;
                    background-color:white;
                    margin-bottom: 31px;
                    text-align: left;

                    &:hover{
                        box-shadow:none;
                    }
                }
            }
            a{

                width:80%;
                margin-top:30px;
            
            }
        }

    }

    @media screen and (max-width:770px){

.container {
    width:100%;
    margin-top:50px;


    input{
        width:70%;
        margin-top:70px;
    }
    p{
        font-size:19px;
        display:flex;
        justify-content:center;
        align-items:center;
        width:70%;
        flex-direction: row;
    
        a.btn{
            width:70%;
            display:block;
            font-size:20px;
            padding:0;
            background-color:white;
            margin-bottom: 31px;
            text-align: left;

            &:hover{
                box-shadow:none;
            }
        }
    }


}

}

    @media screen and (max-width:690px){

        .container {
            width:100%;
            margin-top:50px;


            input{
                width:90%;
                margin-top:70px;
            }
            p{
                font-size:19px;
                display:flex;
                justify-content:center;
                align-items:center;
                width:80%;
                flex-direction: row;
            
                a.btn{
                    width:50%;
                    display:block;
                    font-size:20px;
                    padding:0;
                    background-color:white;
                    margin-bottom: 31px;
                    text-align: left;

                    &:hover{
                        box-shadow:none;
                    }
                }
            }

            a{

                width:70%;
                margin-top:30px;
            
            }
        }

    }
   
`;