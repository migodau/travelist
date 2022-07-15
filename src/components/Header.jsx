import styled from 'styled-components';

export function Header() {
  return (
    <StyledHeader>
      <HeaderContent>
        <h1>Travelist ✈️</h1>
        <HeaderMenu>
          <span>Create a Trip</span>
          <span>My Trips</span>
        </HeaderMenu>
      </HeaderContent>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  border-bottom: 1px solid #E0E0E0;
  width: 100%;
  padding: 4px 34px;
  background-color: #fff;

  h1{
    font-family: 'Pacifico', cursive;
    font-size: 42px;
  }
`;

const HeaderContent = styled.div`
  width: 870px;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
`

const HeaderMenu = styled.div`
  font-size: 20px;
  margin-left: 24px;
  font-weight: bold;

  span {
    margin-left: 26px;
  }
  
`;