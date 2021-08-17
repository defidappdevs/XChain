import React, { useState } from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'connectors'
import useI18n from 'hooks/useI18n'
import { Text, Button, LinkExternal,Flex,ButtonProps, ConnectorId, useWalletModal,ChevronDownIcon,ChevronUpIcon} from '@pantherswap-libs/uikit'
import {FarmsCard} from 'components/Card'
import TranslatedText from 'components/TranslatedText'
import RoiModal from '../RoiModal'
import QuestionHelper from '../QuestionHelper'
import { getBscScanLink } from '../../utils'





const CardFarms : React.FC<ButtonProps> = props =>{


  const  [elementid,setElementid] = useState();
  const  [display,setDisplay] = useState("none");
  
    const myFunction = (event) =>{
        const id =event.currentTarget.id;
        const y = "|myId";

        console.log("id",typeof(id))
        // const elemid =parseInt(id)
        
        const x = document.getElementById(id+y) as HTMLElement;
        if(x.style){
           if (x.style.display === "none") {
          x.style.display = "block";
           setElementid(id);
          setDisplay("block");
        } else {
          x.style.display = "none";
          setDisplay("none");

        }

        }
       
      }

    const data =[ 
        {
            "id" :"0",
          "url": "images/coins/panther.png",
          "Coin": "CROSSCHAIN-BUSD LP",
          "APR" :"$0.586",
          "Earn" :"CROSSCHAIN",
          "Deposite" :"$0",
          "Harvest" :"2hours",
          "LPType"  :"Crosschain-LP",
          "output": "40X",
          "cbp"   : "CROSSCHAIN-BUSD LP"
          
          
        },
        {  
            "id" :"1",
             "url": "images/coins/bnb.png",
            "Coin": "CROSSCHAIN BNB LP",
            "APR" :"$0.586",
            "Earn" :"CROSSCHAIN",
            "Deposite" :"$0",
            "Harvest" :"2hours",
            "LPType"  :"Crosschain-LP",
            "output": "24X",
            "cbp"   : "CROSSCHAIN-BNB LP"
        },
        {   
            
            
            "id" :"2",
            "url": "images/coins/BUSD.png",
            "Coin": "BNB-BUSD LP",
            "APR" :"$0.586",
            "Earn" :"CROSSCHAIN",
            "Deposite" :"$0",
            "Harvest" :"2hours",
            "LPType"  :"Crosschain-LP",
            "output": "5X",
            "cbp"   :  "BNB-BUSD LP"
        }
       
      
       
       ];
      
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
        {
            data.map((value,index)=>{
                return(
                  <>
                    <FarmsCard >
                      <img src={value.url} style={{width:"60px", height:"60px", marginBottom:"5px"}} alt=""/>
                    <div style={{float:"right"}}><Text style={{ fontSize :"15px",marginLeft:"20px",fontWeight:"bold"}}>{value.Coin}</Text></div>
                     <Button style={{ height:"25px", width:"30px"}}>{value.output}</Button>
                     <Text style={{fontSize:"17px",marginBottom:"5px"}}>APR: <RoiModal />{value.APR}</Text>
                    <Text style={{fontSize:"17px",marginBottom:"5px"}} > Earn:<span style={{float:"right"}}>{value.Earn}</span></Text>
                    <Text style={{fontSize:"17px",marginBottom:"5px"}} >Deposite Fee:<span style={{float:"right"}}>{value.Deposite}</span></Text>
                    <Text style={{fontSize:"17px",marginBottom:"5px"}} >Harvest Lockup:
                    <QuestionHelper text={"How soon can you harvest or compound again'."} />

                    
                    <span style={{float:"right"}}>{value.Harvest}</span></Text>
                    <Text style={{fontSize:"17px",marginBottom:"5px"}} >LP Type:<span style={{float:"right"}}>{value.LPType}</span></Text>
                    <Text  style={{fontSize:"17px",marginBottom:"5px",marginTop:"10px"}}>Crosschain <span style={{color:"#058665"}}>Earned</span></Text>
                    
                    <Text style={{fontSize:"20px",marginBottom:"5px",marginTop:"10px",fontWeight:"bold",color:"#058665"}}>0
                    <Button id="join-pool-button" style={{float:"right"}}>
                    <TranslatedText translationId={100}>Harvest</TranslatedText>
                    </Button></Text>
                    <Text style={{fontSize:"12px",marginTop:"25px",fontWeight:"bold"}}>{value.cbp} <span style={{color:"#058665"}}>STAKED</span></Text>
                    <Button  style={{width:"100%",marginTop:"10px"}}onClick={onPresentConnectModal} {...props}>
                    {TranslateString(292, 'Unlock Wallet')}
                    </Button>
                    <hr style={{height:"1px",width:"100%", margin: "28px auto",backgroundColor:"rgb(82, 75, 99)"}}/>
                   
                   
                    {
                       elementid === (index.toString()) && display === "block" ? 
                       <Text  id={index.toString()} onClick={myFunction}>
                          <Text style={{fontSize:"15px",textAlign:"center",color:"#058665",cursor:"pointer",letterSpacing:"1px"}}>Hide <ChevronUpIcon />
                          </Text> 
                         </Text>  

                      :
                      <Text  id={index.toString()} onClick={myFunction}>
                      <Text style={{fontSize:"15px",textAlign:"center",color:"#058665",cursor:"pointer",letterSpacing:"1px"}}>Details <ChevronDownIcon />
                      </Text>
                      </Text>   
                    }    
                      <div id={`${index}|myId`} style={{display:"none"}}>
                        <Text style={{fontSize:"14px",marginBottom:"5px"}} > Deposite:<LinkExternal style={{float:"right",color:"#FFFFFF"}}>XRP-BNB LP</LinkExternal></Text>
                        <Text style={{fontSize:"14px",marginBottom:"5px"}} >Total Liquidity:<span style={{float:"right"}}>{value.Deposite}</span></Text>
                        <Text style={{fontSize:"14px",marginBottom:"5px"}} >Lp Worth:<span style={{float:"right"}}>{value.Deposite}</span></Text>
                        
                          <LinkExternal>View on BscScan</LinkExternal>
                      </div>
                  </FarmsCard>
                   
                   
              </>                   

                   
             )      
               
            })
        }
        
       
                 
           
       
        </>
    )
}

export default CardFarms