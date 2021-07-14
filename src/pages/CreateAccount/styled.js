import styled from 'styled-components';

export const CreatePage = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .container{
        margin-top:120px;
        width:50%;
        justify-content:center;
        align-items:center;
        

        h2,p{
            display:flex;
            width:70%;
            justify-content:center;
            margin:0 auto;
        }

        p{
            font-size:19px;
            margin-top:25px;
        }

        form{
            margin:0 auto;
            display:flex;
            width:50%;
            flex-direction: column;
            input{
                font-size:19px;
                margin-top:85px;
                border:0;
                border-bottom:1px solid #CCC;
                outline:0;
                text-align:center;
                width:100%;
                
            }
            >span{
                width:100%;
                background-color:rgb(255,0,0);
                font-weight:bold;
                margin-top: 15px;
                border-radius: 5px;
                text-align:center;
             
                margin-bottom: 15px;
            }
            >button{
                            cursor: pointer;
                display:block;
                margin:0 auto;
                width:70%;
                text-align:center;
                padding:9px 5px;
                background-color:#CC66F0;
                color:black;
                margin-top:300px;
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
        margin-top:50px;
        width:100%;
   
        form{
            margin:0 auto;
            width:100%;
            input{
                width:95%;
                
            }

            >button{

                width:90%;
                margin-top:100px;
        
            }
        }
    

    }


}
`;
