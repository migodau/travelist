import styled from 'styled-components';

export function Button({ type, label, onClick }) {
    
    return(
        <StyledButton onClick={onClick}>
            {label}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    width: 100%;
    background-color: #0277BD;
    color: #fff;
    border-radius: 5px;
    border: none;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
`;