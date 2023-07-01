import {useState} from 'react'

import {
  PasswordContainer,
  CardContainer,
  Title,
  CheckText,
  PasswordInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [text, setText] = useState('')
  const [isError, setError] = useState(true)

  const onInputPassword = event => {
    setText(event.target.value)
    if (event.target.value.length < 8) {
      setError(true)
    } else {
      setError(false)
    }
  }
  return (
    <PasswordContainer>
      <CardContainer>
        <Title>Password Validator</Title>
        <CheckText>Check how strong and secure is your password</CheckText>
        <PasswordInput
          type="password"
          value={text}
          onChange={onInputPassword}
        />
        {isError && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </CardContainer>
    </PasswordContainer>
  )
}

export default PasswordValidator
