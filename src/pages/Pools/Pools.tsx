import React, {useState}  from 'react';
import {Flex, Text, Toggle } from '@pantherswap-libs/uikit'
import CardNav from 'components/CardNavFarms';
import CardPools  from 'components/CardPools'
import NavContainer from '../../components/NavBarContainer'



const Pools =()=>{
    const [isChecked, setIsChecked] = useState(false);
    const toggle = () => setIsChecked(!isChecked);
    return(
        <>
        <NavContainer />
        <Flex style={{ marginTop: "60px"}}>
            <Toggle checked={isChecked} onChange={toggle} />
            <Text style={{ fontSize: "16px", marginRight: "50px", marginLeft: "7px", marginTop: "8px" }}>Staked Only</Text>
            <CardNav />
      </Flex>
        <Flex style={{ width: "100%",alignItems:"flex-start" }}>
            <CardPools />
        </Flex>
        </>
    )
}

export default Pools 