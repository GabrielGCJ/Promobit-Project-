import styled from "styled-components"

export const ContainerFilter = styled.div`

    @media screen and ( min-device-width : 10px ) and (max-device-width : 249px) {
        
        background-color: rgb(45,12,93);
        height:700px ;
        
        p{
            padding-top: 10px;
            color: white;
        }
    }

    @media screen and ( min-device-width : 250px ) and (max-device-width : 480px) {
        
        background-color: rgb(45,12,93);
        height:400px ;
        
        p{
            padding-top: 10px;
            color: white;
        }
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 2000px) {    
        
        background-color: rgb(45,12,93);
        height: 350px ;

        p{
            padding-top: 10px;
            text-align:center ;
            color: white;
        }        
    }
`

export const ContainerApresentaao = styled.div`

    @media screen and ( min-device-width : 10px ) and (max-device-width : 249px) {
        
        h1{
           padding-top:20px ;
           padding-bottom: 20px;
           padding-left: 5px;
           position: relative;
           color: white;
        }
    }

    @media screen and ( min-device-width : 250px ) and (max-device-width : 480px) {        
        
        h1{
            padding-top:20px ;
            padding-bottom: 20px;
            padding-left: 5px;
            position: relative;
            color: white;
        }
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 2000px) { 
        
        display:flex ;
        align-items: center;
        justify-content: center;
        
        h1{
            padding-top:20px ;
            padding-bottom: 20px;
            color: white;
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