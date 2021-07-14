import styled from 'styled-components';

export const SigninConfirmPage = styled.div`
    display:flex;
    justify-content:center;
    
    .container{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:150px;
        text-align:center;

        h2{
            font-size:25px;

        }

        input{
            width:70%;
            margin-top:120px;
            font-size:19px;
            text-align:center;
            border:0;
            border-bottom:1px solid #CCC;
        }
        a{
            display:block;
            margin:0 auto;
            width:100%;
            text-align:center;
            padding:9px 5px;
            background-color:#CC66F0;
            color:black;
            margin-top:230px;
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

    @media screen and (max-width:1400px){

        .container{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:100px;
        padding-bottom: 35px;
        text-align:center;

        input{
            width:90%;
            margin-top:120px;
            font-size:19px;
            text-align:center;
            border:0;
            border-bottom:1px solid #CCC;
        }
        a{
            width:90%;
            margin-top:90px;

        }
    }

}
`;