import React from 'react';
import { CrossCard } from 'components/Card';

import { Text } from '@pantherswap-libs/uikit';

const LpWorth = () =>{
    return(
        <>
        <CrossCard>
           <Text style={{fontSize:"24px",fontWeight:600}}>CROSSCHAIN LP WORTH </Text>
           <Text style={{fontSize:"16px",fontWeight:400,marginTop:"15px",marginBottom:"5px"}}>CROSSCHAIN-BNB<span style={{float:"right",fontSize:"16px"}}>$1467</span></Text>
           <Text style={{fontSize:"16px",fontWeight:400,marginTop:"15px"}}>CROSSCHAIN-BUSD<span style={{float:"right",fontSize:"16px"}}>$2450</span></Text>

        </CrossCard>

        </>

    )
}

export default LpWorth;