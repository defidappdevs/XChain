import React from 'react';
import { TvlCard } from 'components/Card';
import { Text } from '@pantherswap-libs/uikit';

const HomepageTvl =() =>{
    return(
        <>
        <TvlCard>
            <Text style={{fontSize:"24px",fontWeight:600}}>TVL</Text>
            <Text style={{fontSize:"32px",fontWeight:600,marginTop:"5px",marginBottom:"5px"}}>$2684093000</Text>
            <Text style={{fontSize:"14px",color:"#058665",fontWeight:400}}>Across all Farms and Pools</Text>
        </TvlCard>

        </>
    )
}

export default HomepageTvl