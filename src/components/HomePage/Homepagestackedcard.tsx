import React from 'react';
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'connectors'
import useI18n from 'hooks/useI18n'
import TranslatedText from 'components/TranslatedText'
import { HomeCard } from 'components/Card';
import { Text, Button, LinkExternal,Flex,ButtonProps, ConnectorId, useWalletModal,ChevronDownIcon,ChevronUpIcon} from '@pantherswap-libs/uikit'
 





const Homepagestackedcard : React.FC<ButtonProps> = props =>{
    const  data = [
        { 
            "id" : "0",
            "locked": "~0.000",
            "cwallet" :  "~0.000"

        }
    ]
    const TranslateString = useI18n()
    const { account, activate, deactivate } = useWeb3React()
  
    const handleLogin = (connectorId: ConnectorId) => {
      if (connectorId === 'walletconnect') {
        return activate(walletconnect)
      }
      return activate(injected)
    }
    const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)

    return(
        <>
       
        <HomeCard>
               <Text style={{fontSize:"35px",fontWeight:"bold",letterSpacing:"1px"}}>Farms & Stacking</Text>
               <div>
                 <img src="images/coins/panther.png" style={{width:"70px",height:"70px",marginTop:"10px",marginBottom:"10px"}} alt=""/>
               </div>
               {
                   data.map ((value,index) =>{
                       return(
                           <>
                                <Text style={{color:"#058665",fontSize:"14px",marginBottom:"10px"}}>Crosschain to Harvest</Text>
                                <Text style={{color:"#FFFFFF",marginBottom:"10px",fontSize:"15px"}}>LOCKED</Text>
                                <Text style={{color:"#058665",marginBottom:"10px",fontSize:"15px"}}>{value.locked}</Text>
                                <Text style={{color:"#058665",fontSize:"14px",marginBottom:"10px"}}>Crosschain in Wallet</Text>
                                <Text style={{color:"#FFFFFF",marginBottom:"10px",fontSize:"15px"}}>LOCKED</Text>
                                <Text style={{color:"#058665",marginBottom:"10px",fontSize:"15px"}}>{value.cwallet}</Text>
                             </>

                          )

                   })
                 
               }
                <Button  style={{width:"100%",marginTop:"10px"}}onClick={onPresentConnectModal} {...props}>
                    {TranslateString(292, 'Unlock Wallet')}
                </Button>
              

        </HomeCard>

      
       
           

       
        </>
    )
}

export default Homepagestackedcard