import React from 'react'
import styled from 'styled-components'
import { Text } from '@pantherswap-libs/uikit'


const Cards = styled.div<any>`
  width: 100%;
  border-radius: 16px;
  padding: 1.25rem;
`
export default Cards





export const GreenWrapper = styled(Cards)`
  height:200px;
  width:100%;
  textAlign:"center"
  background:red;
  color: ${({ theme }) => theme.colors.binance};
  font-weight: 500;
`


 export const BlueCardStyled = styled(Cards)`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  width: fit-content;
`

export const BlueCard = ({ children, ...rest }: any) => {
  return (
    <BlueCardStyled {...rest}>
      <Text color="#24c7d6">{children}</Text>
    </BlueCardStyled>
  )
}
