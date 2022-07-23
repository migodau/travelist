import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { FieldErrorMessage } from './styles/FieldErrorMessage';

export function Input({name, placeholder, value}) {
  
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <>
      <StyledInput {...register(name)} value={value} placeholder={placeholder} type='text' />
      <FieldErrorMessage>{errors[name]?.message}</FieldErrorMessage>
    </>
  );
}

const StyledInput = styled.input`
  margin-top: 32px;
  border: none;
  border-bottom: 1px solid #E0E0E0;
  color: #212121;
  font-size: 20px;
  outline: none;
  font-weight: 200;
  max-width: 300px;

  &:placeholder {
    color: #757575;
  }
`;
