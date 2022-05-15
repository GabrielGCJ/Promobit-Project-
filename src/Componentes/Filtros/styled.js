import styled from "styled-components"

export const ContainerFilter = styled.div`

    @media screen and ( min-device-width : 10px ) and (max-device-width : 249px) {
        background-color: rgb(45,12,93);
        height:300px ;
        
        p{
            padding-top: 20px;
        }
    }

    @media screen and ( min-device-width : 250px ) and (max-device-width : 480px) {
        background-color: rgb(45,12,93);
        height:300px ;
        
        p{
            padding-top: 20px;
        }
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 2000px) {    
        background-color: rgb(45,12,93);
        height:300px ;

        p{
            padding-top: 20px;
            text-align:center ;
        }        
    }
`

export const ContainerApresentaao = styled.div`

    @media screen and ( min-device-width : 10px ) and (max-device-width : 249px) {
        background-color: green;
        h1{
           padding-top:20px ;
        }
    }

    @media screen and ( min-device-width : 250px ) and (max-device-width : 480px) {        
        background-color: green;
        h1{
            padding-top:20px ;
        }
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 2000px) { 
        background-color: green;
        padding-top: 30px ;
        display:flex ;
        align-items: center;
        justify-content: center;
        
        h1{
            padding-top:20px ;
        }
    }
`

export const ContainerTexto = styled.div`

    @media screen and ( min-device-width : 10px ) and (max-device-width : 249px) {
        width: 90%;
        align-items:center ;
    }

    @media screen and ( min-device-width : 250px ) and (max-device-width : 480px) {
        width: 90%;
        align-items:center ;
    }
    

    @media screen and (min-device-width : 481px) and (max-device-width : 2000px) { 
        width: 60%;
        align-items:center ;
        justify-content:center ;
        text-align:center ;    
    }
`