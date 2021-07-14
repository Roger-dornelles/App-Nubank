import styled from 'styled-components';

export const MainPage = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    height:98vh;
    flex-direction:column;
    background-color: #BE6CE4;
    color:#000000;

    .logo{
        align-self:flex-start;
        margin-left:15%;
        margin-top:90px;
        font-size:27px;
    }
    p{
        display:flex;
        margin-right:11%;
        margin-top:190px;
        font-size:30px;
        width:220px;
        line-height:42px;
    }

    a{
        display:flex;
        justify-content:center;
        width:22%;
        height:3%;
        background-color:white;
        color:black;
        border-radius:7px;
        font-size:19px;
        text-decoration:none;
        padding:5px 7px;
        margin-top:25px;
    }

    @media screen and (max-width:1400px){


a{

    width:30%;

}


}

    @media screen and (max-width:1024px){


        a{

            width:50%;

        }


    }

    @media screen and (max-width:800px){

        p{
            margin-top:90px;
    
        }

        a{
            width:50%;
            width:280px;

        }
    }

    @media screen and (max-width:650px){

        a{
            width:90%;
        }
    
    }

`;