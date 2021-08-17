import React from 'react';
import styled from 'styled-components';
import { HomeCard } from 'components/Card';
import { Text } from '@pantherswap-libs/uikit';
import { values } from 'lodash';





const Crosschainstates =()=>{

    const Statsdata =[
        {
            "mcap" :"$ 89056",
            "Tminted" : "2356095560",
            "Tburned" : "4563209",
            "Lreward" : "569830",
            "Supply" : "45680",
            "Txamount" : "45609",
            "Cblock"   : "2390",
            "Ttax"     : "20%"
        }
    ]
    return(
        <>
          <HomeCard>

        {

            Statsdata.map((value,index)=>{
                return(
                    <>
                        <Text style={{fontSize:"36px",fontWeight:"bold",letterSpacing:"1px"}}>CrossChain States</Text>
                        <Text style={{color:"#FFFFFF",fontSize:"14px",marginBottom:"20px",marginTop:"25px",fontWeight:400}}>Market Cap<span style={{float:"right",fontWeight:600}}>{value.mcap}</span></Text>
                        <Text style={{color:"#FFFFFF",fontSize:"14px",marginBottom:"20px",fontWeight:400}}>Total Minted<span style={{float:"right",fontWeight:600}}>{value.Tminted}</span></Text>
                        <Text style={{color:"#FFFFFF",fontSize:"14px",marginBottom:"20px",fontWeight:400}}>Total Burned<span style={{float:"right",fontWeight:600}}>{value.Tburned}</span></Text>
                        <Text style={{color:"#FFFFFF",fontSize:"14px",marginBottom:"20px",fontWeight:400}}>Total Locked Rewards<span style={{float:"right",fontWeight:600}}>{value.Lreward}</span></Text>
                        <Text style={{color:"#FFFFFF",fontSize:"14px",marginBottom:"20px",fontWeight:400}}>Circulating Supply<span style={{float:"right",fontWeight:600}}>{value.Supply}</span></Text>
                        <Text style={{color:"#FFFFFF",fontSize:"14px",marginBottom:"20px",fontWeight:400}}>Max Tx Amount<span style={{float:"right",fontWeight:600}}>{value.Txamount}</span></Text>
                        <Text style={{color:"#FFFFFF",fontSize:"14px",marginBottom:"20px",fontWeight:400}}>New CROSSCHAIN/Block<span style={{float:"right",fontWeight:600}}>{value.Cblock}</span></Text>
                        <Text style={{color:"#FFFFFF",fontSize:"14px",marginBottom:"20px",fontWeight:400}}>Transfer Tax<span style={{float:"right",fontWeight:600}}>{value.Ttax}</span></Text>


                
                    </>
                )
            })
        }
       
      
        </HomeCard>

      
       
           

       
        </>
    )
}

export default Crosschainstates