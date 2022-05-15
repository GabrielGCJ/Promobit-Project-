import styled from "styled-components"



export const ContainerHeader = styled.div`


@media screen and ( min-device-width : 10px ) and (max-device-width : 249px) {
    display:flex ;
    align-items: center ;
    justify-content:center ;
    height: 20px;
    background-color: rgb(91,22,195); 
    color: white ;
    
    h3{
        padding-left: 3%;
        padding-right: 3px;
    }    

     }

     }


@media screen and ( min-device-width : 250px ) and (max-device-width : 480px) { 

    display:flex ;
    align-items: center ;
    justify-content:center ;
    height: 20px;
    background-color: rgb(91,22,195); 
    color: white ;
    
    h3{
        padding-left: 3%;
        padding-right: 3px;
    }    

     }

@media screen and (min-device-width : 481px) and (max-device-width : 2000px) { 

    display:flex ;
    align-items: center ;
    height: 20px;
    background-color: rgb(91,22,195); 
    color: white ;
    
    h3{
        padding-left: 3%;
        padding-right: 3px;
    }    
     }


    
`

export const DivLogo = styled.div`

    width: 30px;
    height: 12px ;
    background-color: white ;
    border-radius: 20px;
`