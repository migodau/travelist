import styled from 'styled-components'
import { Header } from '../components/Header'
import { NewChecklist } from '../components/NewChecklist'
import { PageContainer } from '../components/styles/PageContainer'
import { Card } from '../components/Card'

export function Home() {
    return (
        <>
        <Header/>
        <PageContainer>
        <h2>select a pre-defined set</h2>
        <CardsGrid>
          <Card 
            title='Default' 
            description='A basic travel checklits just to get started' 
            buttonLabel="Let's get started" />

          <Card 
            title='Work' 
            description='Make sure you have all essencial thing you need to work from everywhere' 
            buttonLabel="Let's get work done" />

          <Card
            title='Winter' 
            description='Winter is coming, be prepared'
            buttonLabel="Let's freeze" />
        </CardsGrid>
        <PageSection>
          <h2>or create a custom travel checklist</h2>
          <NewChecklist/>
        </PageSection>
      </PageContainer>
      </>
    );
}

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 12px;
`;

const PageSection = styled.div`
  padding-top: 24px;
`;