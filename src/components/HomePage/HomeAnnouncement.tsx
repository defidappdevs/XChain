import React from 'react';
import { HomeAnnocementCard,CrossCard} from 'components/Card';
import { Text } from '@pantherswap-libs/uikit';


const  HomeAnnouncement = () => {
    return(
        <>
       
        <HomeAnnocementCard>
            <Text style={{fontSize:"24px",fontWeight:600}}>Announcements </Text>
            <div>
             <img src="images/coins/panther.png" style={{width:"40px",height:"40px",marginTop:"10px",marginBottom:"10px",float:"left"}} alt="" />
             <Text style={{fontSize:"16px",fontWeight:400,paddingTop:"10px",paddingLeft:"50px"}}>Crosschain</Text>
             <Text style={{fontSize:"16px",fontWeight:400,paddingLeft:"50px"}}>@CrossSwap</Text>
             </div>
             <Text style={{display:"flex",fontSize:"17px"}}>The emission rate has been reduced to 50 CROSSCHAIN/block #BSC #BinanceSmartChain #Binance #DeFi #cake #YieldFarming #pancakeswap #crosschainswap</Text>

            
        </HomeAnnocementCard>
        <CrossCard>
           <Text style={{fontSize:"24px",fontWeight:600}}>CROSSCHAIN LP WORTH </Text>
           <Text style={{fontSize:"16px",fontWeight:400,marginTop:"15px",marginBottom:"5px"}}>CROSSCHAIN-BNB<span style={{float:"right",fontSize:"16px"}}>$1467</span></Text>
           <Text style={{fontSize:"16px",fontWeight:400,marginTop:"15px"}}>CROSSCHAIN-BUSD<span style={{float:"right",fontSize:"16px"}}>$2450</span></Text>
         </CrossCard>

     
      
        </>
    )
}

export default HomeAnnouncement;