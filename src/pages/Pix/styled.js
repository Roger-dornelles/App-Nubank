import styled from 'styled-components';

export const PixPage = styled.div`
    width:50%;
    margin:0 auto;
    transform:translate(0%,50%);


    .close{
        width:35px;
        height:38px;
        font-size:35px;
        margin-left:10px;
        cursor:pointer;
        color: red;
    
    }
    
    .container{
        width:60%;
        margin:0 auto;
        margin-top:50px;

        h3{
            font-size:30px;
        }
        p{
            
            font-size:17px;
            font-weight:bold;
        }
    
        .icons{
            width:100%;
            display:flex;
            flex-direction:rows;
            justify-content:space-between;
            margin:0 auto;
            margin-top:30px;
    
            .icon-item{
                display:flex;
                justify-content:space-around;
                flex-direction:column;
                padding:0 20px;
    
                p{
                    width:50px;
                    height:50px;
                    border-radius:50%;
                    background-color:#e4e4e4;
                    cursor:pointer;
    
                    b{
                        font-size:25px;
                        display:block;
                        transform:translate(25%,45%);
                    }
                }
                span{
                    font-size:19px;
                    font-weight:bold;
                }

            }
        }
            .warning{
                width:100%;
                padding:7px 0;
                text-align:center;
                background-color: #ff3e3e;
                font-weight: bold;
                border-radius:7px;
            }
    }

    @media screen and (max-width:1400px){
        width:95%;
        margin:0 auto;
        transform:translate(0%,0%);

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


            .icons{
                width:100%;
                display:block;
                text-align:center;
                margin-top:30px;

                .icon-item{
                    display:block;
                    margin: 0 auto;
                    width:50%;
                    margin-bottom: 25px;


                    p{
                        width:70px;
                        height:70px;
                        border-radius:50%;
                        margin:0 auto;
                    margin-bottom: 10px;
    
                        b{
                            font-size:32px;
                            transform:translate(0%,55%);
                        }
                    }
                }
                span{
                    font-size:19px;
                    font-weight:bold;
                } 
                
                }
            }
        }
    
`;