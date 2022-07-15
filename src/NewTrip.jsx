import styled from 'styled-components';

export function NewTrip() {
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
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 24px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  label {
    font-size: 14px;
    color: #424242;
    margin-bottom: 12px;
  }
  
  input {
    border: none;
    border-bottom: 1px solid #E0E0E0;
    color: #212121;
    font-size: 20px;
    outline: none;
    font-weight: 200;
    max-width: 300px;
  }
  ::placeholder,::-ms-input-placeholder {
    color: #757575;
  }

  select {
    border: 1px solid #ccc;
    padding: 8px;
    outline: none;
    font-weight: 200;
    font-size: 18px;
    appearance: none;
    border-radius: 4px;
    color: #424242;
    min-width: 150px;
  }

  .select-box {
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
  }
`;