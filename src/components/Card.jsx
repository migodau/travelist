import styled from 'styled-components';
import { Button } from './Button';

export function Card({ title, description, buttonLabel }) {
    const handleButtonClick = () => {
        console.log(`Card selected: ${title}`);
    }
    
    return (
        <StyledCard>
            <CardHeader>{ title }</CardHeader>
            <CardBody>{ description }</CardBody>
            <CardFooter>
                <Button label={buttonLabel} onClick={handleButtonClick}/>
            </CardFooter>
        </StyledCard>
    );
}

const StyledCard = styled.div`
    border-radius: 5px;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CardHeader = styled.div`
    border-radius: 5px 5px 0 0;
    text-align: center;
    background-color: #dee2e6;
    font-weight: bold;
    font-size: 20px;
    padding: 12px;
`;

const CardBody = styled.div`
    padding: 24px;
    text-align: center;
    font-size: 14px;
`;

const CardFooter = styled.div`
    padding: 0 16px 16px;
`;
