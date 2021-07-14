import styled from 'styled-components';

export const DemandPage = styled.div`
    width:50%;
    padding:50px 0;
    margin:0 auto;
    margin-top:150px;

    .close{
        width:35px;
        height:38px;
        font-size:35px;
        margin-left:50px;
        cursor:pointer;
        margin-bottom:50px;
        color: red;
    }
    
    .container{
        width:60%;
        height:300px;
        margin:0 auto;
        display:flex;
        justify-content:center;
        flex-direction:column;
        text-align:center;
        background-color: #f3f3f3;
        box-shadow:1px 3px 3px 2px  #b0b0b0;
        border-radius:5px;
        padding:50px 12px;

        .alert{
            width:80%;
            margin:0 auto;
            background-color:#ff4856;
            padding:5px 0;
            font-size:16px;
            font-weight:bold;
        }
        

        input{
            width:60%;
            margin:0 auto;
            margin-top:30px;
            border:0;
            border-bottom:1px solid #CCc;
            background-color: #f3f3f3;
            outline:none;
            text-align:center;
            font-size:17px;
        }

        button{
            cursor:pointer;
            width:45%;
            font-size:17px;
            margin:0 auto;
            margin-top:35px;
            border:0;
            border-radius:7px;
            padding:7px 0;
            box-shadow:1px 3px 3px 2px #c1c0bf;
            background-color:#fb64ff;
            &:hover{
                box-shadow:1px 3px 3px 2px #898785;
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
                width:100%;
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
            width:90%;
            margin:0 auto;
            transform:translate(0%,0%);

            .container{
                width:95%;
    
            
            }
        }

       
`;