import React from "react";
import styled from "styled-components";
import { Text } from "@pantherswap-libs/uikit";

const ReferalContainer = styled.div`
height:180px;
padding: 0px;
width:100%;
background:#058665;
display: flex;
justify-content: center;
 align-items: center;
flex-wrap: wrap;

`


const ReferalsNavContainer = () =>{
    return(
        <>
        <ReferalContainer>
            <div>
            <Text style={{fontSize:"24px",color:"#FFFFFF",fontWeight:"bold",lineHeight: "3",textAlign: "center"}}>Crosschain  Referral Program</Text>
            <Text style={{fontSize:"16px"}}>Share the referral link below to invite your friends and earn 1% of your friends earnings Forever!</Text>
            </div>
        </ReferalContainer>
        </>
    )
}

export default ReferalsNavContainer 

