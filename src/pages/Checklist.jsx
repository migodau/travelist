import styled from 'styled-components';
import { Header } from '../components/Header'
import { PageContainer } from '../components/styles/PageContainer'

export function Checklist() {
    return(
        <>
            <Header/>
            <PageContainer>
                <h2>Checklist</h2>
                <ChecklistSection>
                    <h3>General</h3>
                    <ul>
                        <li>Get flight tickets</li>
                        <li>Get hotel reservations / Address / Phone number</li>
                        <li>Cash</li>
                    </ul>
                </ChecklistSection>
            </PageContainer>
        </>
    );
}

const ChecklistSection = styled.div`
    
`;