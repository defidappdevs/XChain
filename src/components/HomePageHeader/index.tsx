import React from 'react';
import styled from 'styled-components';
import { Text } from '@pantherswap-libs/uikit';

const Headerwraper = styled.div`
height: 185px;
width:100%;
background :#058665;
flex-wrap: wrap;
text-align:center;

`

const HomePageHeader = ()=>{
    return(
        <>
        <Headerwraper>
            <Text style={{fontSize:"45px",marginTop:"35px",fontWeight:600}}>CrossChain</Text>
            <Text style={{lineHeight:"3"}}>The First Automatic Liquidity Acquisition Yield Farm & AMM on Binance Smart Chain.</Text>
        </Headerwraper>
        </>
    )
}

export default HomePageHeader