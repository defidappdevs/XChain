import React, { useState } from 'react';
import { Text, Button, LinkExternal,Flex,ButtonProps, ConnectorId, useWalletModal,ChevronDownIcon,ChevronUpIcon} from '@pantherswap-libs/uikit'

import TranslatedText from 'components/TranslatedText'
import {FarmsCard} from 'components/Card'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'connectors'
import useI18n from 'hooks/useI18n'
import RoiModal from '../RoiModal'
import QuestionHelper from '../QuestionHelper'
import { getBscScanLink } from '../../utils'

const CardPools : React.FC<ButtonProps> = props => {

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
           "id":"0",
           "url": "images/coins/panther.png",
           "Coin": "CROSSCHAIN",
          "APR" :"$0.586",
          "Earn" :"Crosschain",
          "Deposite" :"$0",
          "Hours": "2 Hour(s)",
          "output": "10X",
          "earn"  : "0",
          "cbsd"  : "Crosschain",
          "compound": "compound",
          "DDeposite":"CROSSCHAIN"
        },
        {
            "id":"1",
            "url": "images/coins/bnb.png",
            "Coin": "BNB",
            "APR" :"$0.586",
            "Earn" :"Crosschain",
            "Deposite" :"$0",
            "Hours": "8 Hour(s)",
            "output": "2X",
            "earn": "0",
            "cbsd"  : "BUSD",
            "DDeposite":"BUSD"

        },
        {
            "id":"2",
            "url": "images/coins/BUSD.png",
            "Coin": "BUSD",
            "APR" :"$0.586",
            "Earn" :"Crosschain",
            "Deposite" :"$0",
            "Hours": "8 Hour(s)",
            "output": "2X",
            "earn": "0",
            "cbsd"  : "WBNB",
            "DDeposite":"WBNB"

        }];

        const TranslateString = useI18n()
        const { account, activate, deactivate } = useWeb3React()
      
        const handleLogin = (connectorId: ConnectorId) => {
          if (connectorId === 'walletconnect') {
            return activate(walletconnect)
          }
          return activate(injected)
        }
        const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)
 

    return (
        <> 
          {
            data.map((value,index)=>{
                return(
                  <FarmsCard >
                  <img src={value.url} style={{width:"60px", height:"60px", marginBottom:"5px"}} alt=""/>
                <div style={{float:"right"}}><Text style={{ fontSize :"15px",marginLeft:"20px",fontWeight:"bold"}}>{value.Coin}</Text></div>
                <Button style={{ height:"25px", width:"30px"}}>{value.output}</Button>
                 <Text style={{fontSize:"17px",marginBottom:"5px"}}>APR: <RoiModal />{value.APR}</Text>
                <Text style={{fontSize:"17px",marginBottom:"5px"}} > Earn:<span style={{float:"right"}}>{value.Earn}</span></Text>
                <Text style={{fontSize:"17px",marginBottom:"5px"}} >Deposite Fee:<span style={{float:"right"}}>{value.Deposite}</span></Text>
                <Text style={{fontSize:"17px",marginBottom:"5px"}} >Harvest Lockup:<span style={{float:"right"}}>{value.Hours}</span>
                <QuestionHelper text={"How soon can you harvest or compound again'."} /></Text>
                {/* <Text style={{fontSize:"17px",marginBottom:"5px"}} >LP Type:<span style={{float:"right"}}>{value.LPType}</span></Text> */}
                <Text  style={{fontSize:"17px",marginBottom:"5px",marginTop:"10px"}}>Crosschain <span style={{color:"#058665"}}>Earned</span></Text>
                
                <Text style={{fontSize:"20px",marginBottom:"5px",marginTop:"10px",fontWeight:"bold",color:"#058665"}}>0
                <Button id="join-pool-button" style={{float:"right"}}>
                <TranslatedText translationId={100}>Harvest</TranslatedText>
                </Button></Text>
                <Text style={{fontSize:"15px",marginTop:"25px",letterSpacing:"1px"}}>{value.cbsd} <span style={{color:"#058665"}}>STAKED</span></Text>
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
                    <Text style={{fontSize:"14px",marginBottom:"5px"}} > Deposite:<LinkExternal style={{float:"right",color:"#FFFFFF"}}>{value.DDeposite}</LinkExternal></Text>
                    <Text style={{fontSize:"14px",marginBottom:"5px"}} >Total Liquidity:<span style={{float:"right"}}>{value.Deposite}</span></Text>
                    <Text style={{fontSize:"14px",marginBottom:"5px"}} >Token Price:<span style={{float:"right"}}>{value.Deposite}</span></Text>
                    
                      <LinkExternal>View on BscScan</LinkExternal>
                  </div>
              </FarmsCard>              
                    ) 
            })
        }
        </>
        )
        }

    
    export default CardPools