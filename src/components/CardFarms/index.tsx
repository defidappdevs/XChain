import React, { useState } from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'connectors'
import useI18n from 'hooks/useI18n'
import { Text, Button, ButtonMenuItem,Flex,ButtonProps, ConnectorId, useWalletModal,ChevronDownIcon,ChevronUpIcon} from '@pantherswap-libs/uikit'
import {FarmsCard} from 'components/Card'
import TranslatedText from 'components/TranslatedText'


   const Farmmodalicon = () => (
    <svg width="24" height="24"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z"
        fill="#058665"
      />
      <path d="M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z"  fill="#058665" />
      <path d="M18.2 15.75H13.2V17.25H18.2V15.75Z"  fill="#058665" />
      <path d="M18.2 13.25H13.2V14.75H18.2V13.25Z"  fill="#058665" />
      <path d="M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z" fill="#1FC7D4" />
      <path
        d="M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z"
        fill="#058665"
      />
    </svg>
  )



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
          "output": "40X"
          
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
            "output": "24X"
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
            "output": "5X"
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
                    <div style={{float:"right"}}><Text style={{ fontSize :"15px",marginLeft:"20px",fontWeight:"bold"}}>{value.Coin}</Text>
                    <Button style={{ height:"25px", width:"30px",marginLeft:"130px"}}>{value.output}</Button></div>
                     <Text style={{fontSize:"17px",marginBottom:"5px"}}>APR:<span style={{marginLeft:"120px"}}><Farmmodalicon /></span><span style={{float:"right"}}>{value.APR}</span></Text>
                    <Text style={{fontSize:"17px",marginBottom:"5px"}} > Earn:<span style={{float:"right"}}>{value.Earn}</span></Text>
                    <Text style={{fontSize:"17px",marginBottom:"5px"}} >Deposite Fee:<span style={{float:"right"}}>{value.Deposite}</span></Text>
                    <Text style={{fontSize:"17px",marginBottom:"5px"}} >Harvest Lockup:<span style={{float:"right"}}>{value.Harvest}</span></Text>
                    <Text style={{fontSize:"17px",marginBottom:"5px"}} >LP Type:<span style={{float:"right"}}>{value.LPType}</span></Text>
                    <Text  style={{fontSize:"17px",marginBottom:"5px",marginTop:"10px"}}>Crosschain <span style={{color:"#058665"}}>Earned</span></Text>
                    
                    <Text style={{fontSize:"20px",marginBottom:"5px",marginTop:"10px",fontWeight:"bold",color:"#058665"}}>0
                    <Button id="join-pool-button" style={{float:"right"}}>
                    <TranslatedText translationId={100}>Harvest</TranslatedText>
                    </Button></Text>
                    <Text style={{fontSize:"12px",marginTop:"25px",fontWeight:"bold"}}>CROSSCHAIN-BUSD LP <span style={{color:"#058665"}}>STAKED</span></Text>
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

                    {/* {
                     elementid === (index.toString())  ?   */}

                    
                     <div id={`${index}|myId`} style={{display:"none"}}>
                     <Text style={{fontSize:"14px",marginBottom:"5px"}} > Deposite:<span style={{float:"right"}}>XRP-BNB LP</span></Text>
                     <Text style={{fontSize:"14px",marginBottom:"5px"}} >Total Liquidity:<span style={{float:"right"}}>{value.Deposite}</span></Text>
                     <Text style={{fontSize:"14px",marginBottom:"5px"}} >Deposite Fee:<span style={{float:"right"}}>{value.Deposite}</span></Text>
                     <Text style={{fontSize:"14px",marginBottom:"5px"}} >Deposite Fee:<span style={{float:"right"}}>{value.Deposite}</span></Text>
                   </div>
                     {/* :
                    <div id={`${index}|myId`} style={{display:"block"}} />
                   } 
                       */}

                  
                             
                   </FarmsCard>


                
                    {/* {
                     display && display === "block" ?  

                    
                     <div id={`${index}|myId`} style={{display:"none"}}>
                     <Text style={{fontSize:"14px",marginBottom:"5px"}} > Deposite:<span style={{float:"right"}}>XRP-BNB LP</span></Text>
                     <Text style={{fontSize:"14px",marginBottom:"5px"}} >Total Liquidity:<span style={{float:"right"}}>{value.Deposite}</span></Text>
                     <Text style={{fontSize:"14px",marginBottom:"5px"}} >Deposite Fee:<span style={{float:"right"}}>{value.Deposite}</span></Text>
                     <Text style={{fontSize:"14px",marginBottom:"5px"}} >Deposite Fee:<span style={{float:"right"}}>{value.Deposite}</span></Text>
                   </div>
                    :
                   <div />
                   } */}

                   
                   
              </>                   

                   
             )      
               
            })
        }
        
       
                 
           
       
        </>
    )
}

export default CardFarms