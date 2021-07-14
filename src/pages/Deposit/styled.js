import styled from 'styled-components';

export const DepositPage = styled.div`
width:50%;
margin:0 auto;
transform:translate(0%,30%);

.close{
    width:35px;
    height:38px;
    font-size:35px;
    margin-left:10px;
    cursor:pointer;
    color: red;

}

    .container{
        width:70%;
        margin:0 auto;
        cursor:pointer;

        .item-container{
            display:flex;
            align-items:center;
            padding:15px 0;
            border-bottom:1px solid #d3d3d3;

            .icon{
                font-size:30px;
                margin-right:22px;
                margin-left:30px;
            }
            .text{
                flex:1;
                p{
                    font-size:17px;
                }
            }
            
        }

    }

    @media screen and (max-width:1400px){
        width:95%;
        margin:0 auto;
        transform:translate(0%,10%);

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