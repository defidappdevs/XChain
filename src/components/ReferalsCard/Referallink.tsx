import React from 'react';
import styled from 'styled-components';
import { Text,Button } from '@pantherswap-libs/uikit';
import { background } from 'styled-system';


const CardReferal = styled.div`
height:180px;
width:95%;
background-color: #171b21;
 color: rgb(255, 255, 255);
 position: aboslute;
 border-radius: 20px;
 overflow: hidden;
 margin:30px;
 border: 1px solid ${({ theme }) => theme.colors.invertedContrast};


 `



const Referallink = () =>{
    return(
        <>
        <CardReferal>
            <div>
            <Text  style={{fontSize:"20px",fontWeight:400,marginTop:"20px",marginBottom:"30px",marginLeft:"20px"}}>Your Referral Link Copy
            <Button style={{float:"right",height:"40px",width:"90px",background:"transparent",border:"1px solid #058665",marginRight:"20px"}}>Copy</Button></Text>
            <hr />
            </div>
        </CardReferal>
        
        </>
    )
}

export default Referallink