import styled from 'styled-components';

export const DonationInstitutePage = styled.div`
width:50%;
margin:0 auto;
transform:translate(0%,30%);

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
    display:flex;
    flex-direction:column;
    align-items:center;
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
    .select{
        width:50%;
        text-align:left;

        input{
            margin-bottom:20px;
            font-size:20px;
        }
    }
  

    a{
        cursor:pointer;
        width:60%;
        margin:0 auto;
        margin-top:25px;
        padding:7px 0;
        text-decoration:none;
        font-size:19px;
        background-color:#4f4fff;
        border:0;
        border-radius:7px;
        color:white;
        text-align:center;

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
                width:90%;

                .select{
                    width:100%;

                    input{
                        margin-bottom:30px;
                        font-size:20px;
                    }
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