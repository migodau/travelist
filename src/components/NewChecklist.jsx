import styled from 'styled-components';
import { Input } from './styles/Input';
import { Button } from './styles/Button';
import { Select } from './Select';

export function NewChecklist() {
  const handleButtonClick = () => {
    console.log('Creating...');
  }

  return (
      <Form>
        <Input id="name" placeholder="Type your trip name" type="text"/>

        <FieldGrid>
          <Select label="Purpose">
            <option value=""></option>
            <option value="work">Work</option>
            <option value="leisure">Leisure</option>
          </Select>
          <Select label="Environment">
            <option value=""></option>
            <option value="beach">Beach</option>
            <option value="mountains">Mountains</option>
            <option value="city">City</option>
          </Select>
          <Select label="Weather">
            <option value=""></option>
            <option value="snowy">Snowy</option>
            <option value="cold">Cold</option>
            <option value="mid-season">Mid-season</option>
            <option value="hot">Hot</option>
          </Select>
        </FieldGrid>

        <FormFooter>
          <ButtonWrapper>
            <Button onClick={handleButtonClick}>Create</Button>
          </ButtonWrapper>
        </FormFooter>
      </Form>
  );
}

const Form = styled.div`
  border-radius: 5px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  border: 1px solid #ccc;
  padding: 0 32px 32px 32px;
`;

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
