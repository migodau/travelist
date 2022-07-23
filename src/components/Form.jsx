import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

export function Form({ children, onSubmit }) {
  const { handleSubmit } = useFormContext();

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
     {children}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  border-radius: 5px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  border: 1px solid #ccc;
  padding: 0 32px 32px 32px;
`;