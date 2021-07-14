import styled from 'styled-components';

export const DonationPage = styled.div`
width:50%;
margin:0 auto;
transform:translate(0%,30%);
text-align:center;

.close{
    width:35px;
    height:38px;
    font-size:37px;
    margin-left:10px;
    margin-bottom:35px;
    cursor:pointer;
    color:red;
   
}

.container{
    width:60%;
    margin:0 auto;
    padding:60px 15px;
    font-size:18px;
    background-color:#f9f9f9;
    border-radius:12px;
    box-shadow:1px 3px 3px 2px #9a9a9a;

    h2{
        margin-bottom:50px;
    }
    
    p{
        line-height:25px;
        margin-bottom:50px;
    }

    a{
        cursor:pointer;
        padding:10px 25px;
        text-decoration:none;
        font-size:19px;
        background-color:#4f4fff;
        border:0;
        border-radius:7px;
        color:white;

        &:hover{
            box-shadow:1px 3px 3px 2px #a5a5a3;
            background-color:#3333ff;
        }
    }
}

@media screen and (max-width:1400px){
            width:80%;
            margin:0 auto;
            transform:translate(0%,50%);

            .close{
                margin-left:0px;
                cursor:pointer;
        
            }

        .container{
                display:flex;
                width:90%;
                margin: 0 auto;
                flex-direction:column;
                align-items:center;
                margin-top:0px;
                padding-bottom: 35px;
                text-align:center;

                input{
                    width:90%;
                    display:flex;
                    margin:0 auto;
                    font-size:21px;
                    border:0;
                    border-bottom:1px solid #CCC;
                    text-align:center;
                    outline:none;
                    margin-top:50px;
                }


                button{
                    cursor:pointer;
                    width:80%;
                    font-size:17px;
                    display:block;
                    margin:0 auto;
                    background-color:white;
                    box-shadow:1px 3px 3px 2px #d8d8d8;
                    border:1px solid #CCC;
                    border-radius:7px;
                    outline:none;
                    padding:5px 0;
                    margin-top:25px;

                }
        }

            
        }

        @media screen and (max-width:800px){
            transform:translate(0%,0%);

            .container{
                width:95%;
    
            
            }
        }
`;