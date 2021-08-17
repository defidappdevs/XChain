import React from 'react';
import HomePageHeader from 'components/HomePageHeader';
import Homepagestackedcard from 'components/HomePage/Homepagestackedcard';
import { Flex } from '@pantherswap-libs/uikit';
import Crosschainstates from 'components/HomePage/Crosschainstates';
import HomepageTvl from 'components/HomePage/HomepageTvl';
import HomepageDex from 'components/HomePage/HomepageDex';
import HomeAnnouncement from 'components/HomePage/HomeAnnouncement';

const Homepage =()=>{
    return(
        <>
        <HomePageHeader />
        <Flex style={{width:"100%"}}>
            <Homepagestackedcard />
            <Crosschainstates />
        </Flex>
        <Flex style={{width:"100%"}}>
            <HomepageTvl />
            <HomepageDex />
         </Flex>
         <Flex style={{width:"100%",display:"flex", alignItems:"start"}}>
          <HomeAnnouncement />
         </Flex>
        
       
            
       
            
             
                 

       
        </>
    )
}

export default Homepage 