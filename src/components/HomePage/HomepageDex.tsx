import React from 'react';
import { TvlCard } from 'components/Card';
import { Text } from '@pantherswap-libs/uikit';

const HomepageDex =() =>{
    return(
        <>
        <TvlCard>
           <Text style={{fontSize:"24px",fontWeight:600}}>DEX Stats </Text>
           <Text style={{fontSize:"16px",fontWeight:400,marginTop:"15px",marginBottom:"5px"}}>Total Liquidity <span style={{float:"right",fontSize:"16px"}}>$0</span></Text>
           <Text style={{fontSize:"16px",fontWeight:400,marginTop:"15px"}}>24H Volume<span style={{float:"right",fontSize:"16px"}}>$0</span></Text>

        </TvlCard>

        </>
    )
}

export default HomepageDex