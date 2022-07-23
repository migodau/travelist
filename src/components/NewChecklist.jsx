import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Form } from './Form';
import { Input } from './Input';
import { Select } from './Select';
import { Button } from './styles/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required('fill in the name').min(3),
  purpose: yup.string().required('select the purpose'),
  environment: yup.string().required('select the environment'),
  weather: yup.string().required('select the weather'),
}).required();

export function NewChecklist() {


  const methods = useForm({ resolver: yupResolver(schema)});

  const handleSubmit = (data) => {
    console.log('Creating...', data);
  }

  return (
    <FormProvider { ...methods }>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Type your trip name" />

        <FieldGrid>
          <Select name="purpose" label="Purpose">
            <option value=""></option>
            <option value="work">Work</option>
            <option value="leisure">Leisure</option>
          </Select>
          <Select name="environment" label="Environment">
            <option value=""></option>
            <option value="beach">Beach</option>
            <option value="mountains">Mountains</option>
            <option value="city">City</option>
          </Select>
          <Select name="weather" label="Weather">
            <option value=""></option>
            <option value="snowy">Snowy</option>
            <option value="cold">Cold</option>
            <option value="mid-season">Mid-season</option>
            <option value="hot">Hot</option>
          </Select>
        </FieldGrid>

        <FormFooter>
          <ButtonWrapper>
            <Button type="submit">Create</Button>
          </ButtonWrapper>
        </FormFooter>
      </Form>
    </FormProvider>
  );
}

const FieldGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const ButtonWrapper= styled.div`
  width: 180px;
`;
