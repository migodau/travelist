import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { FieldErrorMessage } from './styles/FieldErrorMessage';

export function Select({ name, label, children }) {

  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <SelectLabel>{label}
        <SelectBox>
          <select {...register(name)} id="weather">
            {children}
          </select>
        </SelectBox>
        <FieldErrorMessage>{errors[name]?.message}</FieldErrorMessage>
      </SelectLabel>
      
    </>
  );
}

const SelectLabel = styled.label`
    font-size: 14px;
    color: #424242;
    margin-bottom: 12px;
    margin-top: 32px;
`;

const SelectBox = styled.div`
    position: relative;
    width: fit-content;
    &::after {
      content: '>';
      color: #9E9E9E;
      font-size: 17px;
      transform: rotate(90deg);
      right: 11px;
      top: 8px;
      padding: 0 0 2px;
      position: absolute;
      pointer-events: none;
    }
    
    select {
        border: 1px solid #ccc;
        padding: 8px;
        outline: none;
        font-weight: 200;
        font-size: 16px;
        appearance: none;
        border-radius: 4px;
        color: #424242;
        min-width: 180px;
    }
`

