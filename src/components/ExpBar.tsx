import styled from 'styled-components'

const Head = styled.header`
display: flex;
align-items: center;
`
const Start = styled.span`
font-size: 1rem;
`
const Wrapper = styled.div`
flex: 1;
height: 4px;
border-radius: 4px;
background: #dcdde0;
margin: 0 1.5rem;
position: relative;
`
const CurrentProgress = styled.div`
height: 4px;
border-radius: 4px;
background: #4cd62b;
`
const CurrentXp = styled.div`
position: absolute;
top: 12px;
transform: translateX(-50%);
`

const ExpBar = () => {
    return (
        <Head>
            <Start>0 xp</Start>
            <Wrapper>
                <CurrentProgress style={{width:"50%"}}/>
                <CurrentXp style={{left: "50%"}}>300 xp</CurrentXp>
            </Wrapper>
            <Start>600 xp</Start>
        </Head>
    )
}

export default ExpBar
