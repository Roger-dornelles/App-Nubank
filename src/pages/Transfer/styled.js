import styled from 'styled-components';

export const TranferPage = styled.div`
    width:40%;
    margin:0 auto;
    transform:translate(0%,100%);

    .close{
        font-size:35px;
        margin-left:10px;
        cursor:pointer;
        color: red;
    }
    .container {
        width:60%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin:0 auto;

        .alert {
            width:80%;
            margin:0 auto;
            padding:7px 0;
            font-size:17px;
            border-radius:7px;
            text-align:center;
            background-color:#ff373d;
        }

        h3{
            font-size:25px;
        }
        p{
            font-weight:bold;
        }

        input{

            border:0;
            outline:none;
            font-size:19px;
            border-bottom:1px solid #CCC;
            margin-top:22px;
            text-align:center;
        }

        button{
            width:80%;
            margin:0 auto;
            border:0;
            cursor:pointer;
            background-color:#e043f1;
            font-size:17px;
            padding:7px 0;
            border-radius:7px;
            margin-top:75px;
        }
    }

    @media screen and (max-width:1400px){
        width:95%;
        margin:0 auto;
        transform:translate(0%,40%);

        .close{
            margin-left:20px;
            cursor:pointer;
    
        }

        .container{

            button{
                width:90%;
                margin-top:55px;
            }
        }
        
        }
`;