import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import styled, { ThemeContext } from 'styled-components'
import { Button, Flex, Text, Toggle } from '@pantherswap-libs/uikit'
import CardNav from 'components/CardNavFarms';
import CardFarms from 'components/CardFarms'
import NavContainer from '../../components/NavBarContainer'












const Farms = () => {

  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);
  return (
    <>

< NavContainer />
      <Flex style={{ marginTop: "60px"}}>
        <Toggle checked={isChecked} onChange={toggle} />
        <Text style={{ fontSize: "16px", marginRight: "50px", marginLeft: "7px", marginTop: "8px" }}>Staked Only</Text>
        <CardNav />
      </Flex>
      <Flex style={{ width: "100%",alignItems:"flex-start" }}>
        <CardFarms />
       </Flex>

     









    </>
  )
}

export default Farms
