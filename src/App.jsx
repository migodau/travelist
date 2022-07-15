import styled from 'styled-components'
import { Card } from './components/Card'
import { Header } from './components/Header'
import { NewTrip } from './NewTrip'

function App() {

  return (
    <>
      <Header/>
      <PageWrapper>
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
          <NewTrip/>
        </PageSection>
      </PageWrapper>
    </>
  )
}

const PageWrapper = styled.main`
  padding: 24px 68px;
  max-width: 680px;
  margin: 0 auto;
  border: 1px solid #E0E0E0;
  border-top: none;
  background-color: #fff;
  height: calc(100vh - 120px);
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 12px;
`;

const PageSection = styled.div`
  padding-top: 24px;
`;

export default App
