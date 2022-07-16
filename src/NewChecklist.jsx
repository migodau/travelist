import styled from 'styled-components';
import { InputField } from './common.styled'
import { Button } from './components/Button';

export function NewChecklist() {
  const handleButtonClick = () => {
    console.log('Creating...');
  }

  return (
    <>
      <FormCard>
        <form>
          <InputField>
            <input id="name" placeholder="Type your trip name" type="text"/>
          </InputField>
          <FieldGrid>
            <InputField>
              <label htmlFor="purpose">Purpose</label>
              <div className='select-box'>
                <select id="purpose">
                  <option value=""></option>
                  <option value="work">Work</option>
                  <option value="leisure">Leisure</option>
                </select>
              </div>
            </InputField>
            <InputField>
              <label htmlFor="environment">Environment</label>
              <div className='select-box'>
                <select id="environment">
                  <option value=""></option>
                  <option value="beach">Beach</option>
                  <option value="mountains">Mountains</option>
                  <option value="city">City</option>
                </select>
              </div>
            </InputField>
            <InputField>
              <label htmlFor="weather">Weather</label>
              <div className='select-box'>
                <select id="weather">
                  <option value=""></option>
                  <option value="snowy">Snowy</option>
                  <option value="cold">Cold</option>
                  <option value="mid-season">Mid-season</option>
                  <option value="hot">Hot</option>
                </select>
              </div>
            </InputField>
          </FieldGrid>
          <FormFooter>
            <ButtonWrapper>
              <Button label="Create" onClick={handleButtonClick}/>
            </ButtonWrapper>
          </FormFooter>
        </form>
      </FormCard>
    </>
  );
}

const FormCard = styled.div`
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
