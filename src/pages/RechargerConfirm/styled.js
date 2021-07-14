import styled from 'styled-components';

export const RechargerConfirmPage = styled.div`
width:50%;
margin:0 auto;
transform:translate(0%,50%);

.close{
    width:35px;
    height:38px;
    font-size:30px;
    margin-left:10px;
    cursor:pointer;
    margin-bottom:30px;
    color: red;
}

    .container{
        display:flex;
        width:70%;
        align-items:center;
        margin:0 auto;
        flex-direction:column;
        text-align:center;

        input{
            width:55%;
            outline:none;
            border:0;
            border-bottom:1px solid #d6d6d6;
            margin-top:47px;
            font-size:17px;
            text-align:center;

        }

        button{
            cursor:pointer;
            width:30%;
            font-size:17px;
            display:block;
            margin:0 auto;
            background-color:white;
            box-shadow:1px 3px 3px 2px #d8d8d8;
            border:1px solid #CCC;
            border-radius:7px;
            outline:none;
            padding:5px 0;
            margin-top:35px;
            

            &:hover{
                background-color:#f9f9f9;
                box-shadow:1px 3px 3px 2px #a7a7a7;
            }
        }
    }

    @media screen and (max-width:1400px){
            width:65%;
            margin:0 auto;
            transform:translate(0%,50%);

            .close{
                margin-left:0px;
                cursor:pointer;
        
            }

            .container{
                display:flex;
                width:95%;
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
            width:95%;
            margin:0 auto;
            transform:translate(0%,30%);

            .close{
                margin-left:0px;
                cursor:pointer;
        
            }

            .container{
                display:flex;
                width:95%;
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
`;