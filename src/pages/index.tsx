import ExpBar from "../components/ExpBar"
import styled from 'styled-components'
import GlobalStyle from '../style/globalStyle'
import Profile from "../components/Profile"
import CompletedChallenges from "../components/CompletedChallenges"
import Countdown from "../components/Countdown"


const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
`

const SectionHome = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6.25rem;
  align-content: center;
`

export default function Home() {
  return (
    <>
    <GlobalStyle/>
    <Container>
    <ExpBar />
    <SectionHome>
      <div>
        <Profile/>
        <CompletedChallenges/>
        <Countdown />
      </div>
      <div></div>
    </SectionHome>
    </Container>
    </>
    )
}
