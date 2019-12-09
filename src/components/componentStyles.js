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
export const HomeCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: green;
    max-width: 100%;
    
`
export const ReversedHomeCard = styled.div`
    display: flex;
    flex-direction: row-reverse
    justify-content: space-evenly;
    color: green;
    max-width: 100%;
`

export const ImageContainer = styled.div`
    min-width: 10px;
    width: 37%;
    object-fit: contain;
    border: 1px solid blue;
`
export const HomeCardImage = styled.img`
    max-width: 100%;
    height: 
    border: 1px solid blue;
    
`
export const TextContainer = styled.div`
    width: 60%;
`
