import React, {useState} from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'connectors'


import { TranslateString } from 'utils/translateTextHelpers';
import { Text, Button, LinkExternal,Flex,ButtonProps, ConnectorId, useWalletModal,ChevronDownIcon,ChevronUpIcon} from '@pantherswap-libs/uikit'


const CardReferal = styled.div`
height:180px;
width:95%;
background-color: #171b21;
 box-shadow: rgba(25, 19, 38, 0.1) 0px 2px 12px -8px, rgba(25, 19, 38, 0.05) 0px 1px 1px;
 color: rgb(255, 255, 255);
 position: aboslute;
 border-radius: 32px;
 overflow: hidden;
 margin:65px;

`


const ReferalsCard : React.FC<ButtonProps> = props =>{
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
        <CardReferal>
       
       <Button  style={{width:"18%",marginLeft:"41%",marginTop:"40px",alignItems:"center"}}onClick={onPresentConnectModal} {...props}>
            {TranslateString(100, 'Unlock Wallet')}
            
        </Button>
        <Text style={{textAlign:"center",lineHeight:"5"}}>Unlock wallet to get your unique referral link</Text>

      
            
        </CardReferal>
        </>
    )
}
export default ReferalsCard