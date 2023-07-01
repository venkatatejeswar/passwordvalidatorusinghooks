import styled from 'styled-components'

export const PasswordContainer = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  background-color: #434451;
  min-width: 50vw;
  min-height: 50vh;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const Title = styled.h1`
  font-size: 22px;
  font-family: 'Roboto';
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`
export const CheckText = styled.p`
  color: #edeeff;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const PasswordInput = styled.input`
  width: 90%;
  max-width: 360px;
  height: 25px;
`
export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
