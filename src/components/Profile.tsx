import { useContext } from 'react'
import styled from 'styled-components'
import { ChallengesContext } from '../contexts/ChallengesContext'


const ProfileContainer = styled.div`
    display: flex;
    align-items: center;

    & > img {
        width:5.5rem;
        height:5.5rem;
        border-radius:50%;
    }

    & > div {
        margin-left: 1.5rem;
    }

    & > div > strong {
        font-size:1.5rem;
        font-weight:600;
        color:var(--title);
    }
    & > div > p {
        font-size:1rem;
        margin-top:0.5rem;
    }
    & > div > p img {
        margin-right:0.5rem;
    }
`

const Profile = () =>{
const { level } = useContext(ChallengesContext)

    return(
        <ProfileContainer>
            <img src="https://github.com/cassianothurow.png"alt="avatar"/>
            <div>
                <strong>Cassiano Thurow</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </ProfileContainer>
        
    )
}

export default Profile;