import { Button } from './styles/Button';
import { StyledCard, CardHeader, CardBody, CardFooter } from './styles/StyledCard';

export function Card({ title, description, buttonLabel }) {
    const handleButtonClick = () => {
        console.log(`Card selected: ${title}`);
    }
    
    return (
        <StyledCard>
            <CardHeader>{ title }</CardHeader>
            <CardBody>{ description }</CardBody>
            <CardFooter>
                <Button onClick={handleButtonClick}>{buttonLabel}</Button>
            </CardFooter>
        </StyledCard>
    );
}