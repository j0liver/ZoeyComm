import React from 'react'
import styled from 'styled-components'

// export const StyledLink = styled(Link)`
//     color: #23293B;
//     text-decoration: none;
//     &:focus, &:visited, &:link, &:active {
//         text-decoration: none;
//         color: #23293B;
//     }
//     &:hover {
//         text-decoration: underline;
//         color: #23293B;
//     }
// `
export const HomePageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; 
    border: 1px solid blue;
    margin-top: 2%;
    width: 80%; 
    margin 2% auto
`
export const HomeTextContainer = styled.div`
    margin-bottom: 4%;
`
export const HomeCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: green;
    max-width: 100%;
    margin-bottom: 3%;
`
export const ReversedHomeCard = styled.div`
    display: flex;
    flex-direction: row-reverse
    justify-content: space-evenly;
    align-items: center;
    color: green;
    max-width: 100%;
    margin-bottom: 3%;
`

export const ImageContainer = styled.div`
    min-width: 10px;
    width: 37%;
    object-fit: contain;
    border: 1px solid blue;
`
export const HomeCardImage = styled.img`
    max-width: 100%;
    border: 1px solid blue;
    
`
export const TextContainer = styled.div`
    width: 60%;
`

///Footer///////////////////////////////

export const IconsSection = styled.div`
    width: 100%;
    font-size: 2.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid pink;
`
export const ContactCards = styled.div`
    display: flex;
    width: 100%
    justify-content: space-evenly;
`
export const ContactCard = styled.div`
    width: 25%;
    border-bottom: 3px solid purple;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    border-radius: 5px;
    
    
`
export const Box = styled.div`
    border: 1px solid black;
    width: 20%;
    margin-top: 20px;
`
export const SocialContainer = styled.div`
    width: 30%;
    margin: 3%
    display: flex;
    justify-content: space-evenly;

`
