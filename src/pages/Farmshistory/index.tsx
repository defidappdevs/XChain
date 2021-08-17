import React, {useState} from  'react';
import { Text,Flex,Toggle } from '@pantherswap-libs/uikit';
import CardNav from 'components/CardNavFarms';
import NavContainer from '../../components/NavBarContainer'





const Farmshistory = () =>{
    const [isChecked, setIsChecked] = useState(false);

    const toggle = () => setIsChecked(!isChecked);
    return(
        <>
       <div style={{width:"100%",marginTop:"-145px"}}>
       <NavContainer />
       </div>
        <Flex style={{ marginTop: "50px"}}>
        <Toggle checked={isChecked} onChange={toggle} />
        <Text style={{ fontSize: "16px", marginRight: "50px", marginLeft: "7px", marginTop: "8px" }}>Staked Only</Text>
        <CardNav />
      </Flex>
        <Text style={{fontSize:"40px"}}>Comming soon</Text>
        </>
    )
}

export default Farmshistory  