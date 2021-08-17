import React from 'react';
import { Text } from '@pantherswap-libs/uikit';

import { UnlockCard, } from 'components/Card';
import styled from 'styled-components';

const UnlockReferal = () =>{
    return(
        <>
        <UnlockCard >
            <Text style={{fontSize:"20px",fontWeight:400,marginTop:"10px",marginBottom:"20px"}}>
              Total Referals
            </Text>
            <hr style={{height:"2px",width:"100%",borderWidth:0,color:"gray",backgroundColor:"gray"}} />
            <Text style={{fontSize:"20px",fontWeight:400,marginTop:"20px",marginBottom:"10px"}}>0</Text>
        </UnlockCard>
        <UnlockCard >
        <Text style={{fontSize:"20px",fontWeight:400,marginTop:"10px",marginBottom:"20px"}}>
              Total Referals Commission
            </Text>
            <hr style={{height:"2px",width:"100%",borderWidth:0,color:"gray",backgroundColor:"gray"}} />

            <Text style={{fontSize:"20px",fontWeight:400,marginTop:"30px",marginBottom:"10px"}}>00000 CROSSCHAIN</Text>

        </UnlockCard>


       
        

        </>
    )
}
export default UnlockReferal