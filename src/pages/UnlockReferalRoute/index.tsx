import React from 'react';
import { Flex } from '@pantherswap-libs/uikit';

import ReferalsNavContainer from 'components/ReferalsNavContainer';
import UnlockReferal from 'components/ReferalsCard/UnlockReferal';
import Referallink from 'components/ReferalsCard/Referallink';

const UnlockReferalRoute = ()=>{
    return(
        <>
            <ReferalsNavContainer />
            <Flex style={{width:"100%"}}>
                <UnlockReferal />
            </Flex>
            <Referallink />

        </>

    )

}

export default UnlockReferalRoute
