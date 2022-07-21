import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 5px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  border-radius: 5px 5px 0 0;
  text-align: center;
  background-color: #dee2e6;
  font-weight: bold;
  font-size: 20px;
  padding: 12px;
`;

export const CardBody = styled.div`
  padding: 24px;
  text-align: center;
  font-size: 14px;
`;

export const CardFooter = styled.div`
  padding: 0 16px 16px
`;