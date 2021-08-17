import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Flex, Input, Text,LinkExternal } from '@pantherswap-libs/uikit'
import { useUserSlippageTolerance } from 'state/user/hooks'
import QuestionHelper from '../QuestionHelper'
import TranslatedText from '../TranslatedText'



const StyledSlippageToleranceSettings = styled.div`
  margin-bottom: 16px;
`

const Option = styled.div`
  padding: 0 4px;
`

const Options = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${Option}:first-child {
    padding-left: 0;
  }

  ${Option}:last-child {
    padding-right: 0;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const Label = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  font-size:15px;
`


const RoiCalculation = () => {

  const Roidata =[{
                    

  }]

  return (
    <StyledSlippageToleranceSettings>
      <table style={{width:"100%"}}>
      <tr>
        <th style={{fontSize:"12px",paddingRight:"40px",color:"#058665" }}>TIMEFRAME</th>
        <th style={{fontSize:"12px",paddingRight:"60px",color:"#058665" }}>ROI</th>
        <th style={{fontSize:"12px",color:"#058665" }}>CROSSCHAIN PER $1000</th>
      </tr>
      
     </table>
     <div style={{marginTop:"100px",fontSize:"12px",color:"#058665",lineHeight:" 1.5"}}>
       Calculated based on current rates.Compounding<br/>
        once daily. Rates are estimates.provided for your <br/> 
        convenience only, and by no means represent <br/> guaranteed returns.</div>
       <div style={{justifyContent: "center",margin:"auto"}}> <LinkExternal>Get USDT-BNB LP</LinkExternal> </div>  
    </StyledSlippageToleranceSettings>
  )
}

export default RoiCalculation
