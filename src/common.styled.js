import styled from 'styled-components';

export const PageWrapper = styled.main`
  padding: 24px 68px;
  max-width: 680px;
  margin: 0 auto;
  border: 1px solid #E0E0E0;
  border-top: none;
  background-color: #fff;
  height: calc(100vh - 120px);
`;

export const InputField = styled.div`
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
    font-size: 16px;
    appearance: none;
    border-radius: 4px;
    color: #424242;
    min-width: 180px;
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