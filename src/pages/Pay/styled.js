import styled from 'styled-components';

export const PayPage = styled.div`
    width:50%;
    margin:0 auto;
    transform:translate(0%,30%);

    .close{
        color: red;
        width:35px;
        height:38px;
        font-size:35px;
        margin-left:10px;
        cursor:pointer;
    }

    .container{
        width:70%;
        display:flex;
        margin:0 auto;
        flex-direction:column;

        .item-container{
            border-bottom:1px solid #c1c1c1;
            padding:17px 0;
            display:flex;
            width:100%;
            justify-content:center;
            align-items:center;

            span{
                font-size:39px;
                margin-left:15px;
            }

            .text{
                display:flex;
                flex-direction:column;
                width:70%;
                margin:0 auto;

            }
            &:hover {
                cursor:pointer;
            }
        }
    }

    @media screen and (max-width:1000px) {
        width:100%;
        margin:0 auto;
        transform:translate(0%,10%);

        .container{
            width:90%;
          
        }

    }

    @media screen and (max-width:655px) {
        transform:translate(0%,0%);
        .container{
            width:90%;
            display:flex;
            margin:0 auto;
            flex-direction:column;

            .item-container{
                border-bottom:1px solid #c1c1c1;
                padding:17px 0;
                display:flex;
                width:100%;
                justify-content:center;
                align-items:center;

                span{
                    font-size:39px;
                    margin-left:0px;
                }

                .text{
                    display:flex;
                    flex-direction:column;
                    width:70%;
                    margin:0 auto;

                }
                &:hover {
                    cursor:pointer;
                }
            }
        }


    }

   
`;