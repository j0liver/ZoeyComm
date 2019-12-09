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
    height: 
    border: 1px solid blue;
    
`
export const TextContainer = styled.div`
    width: 60%;
`

///Footer///////////////////////////////

export const styledFooter = styled.footer`
    font-size: 2.5rem;
    color: blue;
`
