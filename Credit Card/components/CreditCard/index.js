import {useState} from 'react'

import {
  MainContainer,
  CreditContainer,
  MainHeading,
  PaymentContainer,
  HorizontalLine,
  ImageContainer,
  CardHolderHeading,
  PaymentHeading,
  CardNameInput,
  CardNumberInput,
  CardHolderName,
  CardNumber,
  PaymentCardContainer,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const onChangeName = event => setName(event.target.value)
  const onChangeNumber = event => setNumber(event.target.value)
  return (
    <MainContainer>
      <CreditContainer>
        <MainHeading>CREDIT CARD</MainHeading>
        <HorizontalLine />
        <ImageContainer data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <CardHolderHeading>CARDHOLDER NAME</CardHolderHeading>
          <CardHolderName>{name.toUpperCase()}</CardHolderName>
        </ImageContainer>
      </CreditContainer>
      <PaymentContainer>
        <PaymentCardContainer>
          <PaymentHeading>PAYMENT METHOD</PaymentHeading>
          <CardNumberInput
            onChange={onChangeNumber}
            placeholder="Card Number"
            value={number}
          />

          <CardNameInput
            onChange={onChangeName}
            placeholder="Cardholder Name"
            value={name}
          />
        </PaymentCardContainer>
      </PaymentContainer>
    </MainContainer>
  )
}

export default CreditCard
