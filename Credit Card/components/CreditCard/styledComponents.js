import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`

export const CreditContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3b4b69;
  width: 50%;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const HorizontalLine = styled.hr`
  width: 100px;
  border-color: #ffd773;
  border-width: 8px;
  border-style: solid;
  margin-bottom: 20px;
`

export const ImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 300px;
  width: 350px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const CardHolderName = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const CardHolderHeading = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  justify-self: flex-end;
  padding-top: 5px;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 50%;
`

export const PaymentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 5px 5px 5px 5px #c3cad9;
  margin: 40px;
  padding: 20px;
`
export const PaymentHeading = styled.h1`
  color: #344e7a;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  text-align: center;
`

export const CardNumberInput = styled.input`
  padding: 15px;
  outline: none;
  border: 2px;
  border-style: solid;
  border-color: black;
  width: 300px;
  margin: 10px;
`

export const CardNameInput = styled.input`
  padding: 15px;
  outline: none;
  border: 2px;
  border-style: solid;
  border-color: black;
  width: 300px;
  margin: 10px;
`
