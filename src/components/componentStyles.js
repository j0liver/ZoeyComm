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

export const CarouselContainer = styled.div`
    
`
export const HomePageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; 
    
    margin-top: 2%;
    width: 80%; 
    margin 2% auto
`
export const HomeTextContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
export const HomeCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    max-width: 100%;
    margin: 3% 0;
    padding-right: 10px;
    
    background-color: #a9a9a9;
`
export const ReversedHomeCard = styled.div`
    display: flex;
    flex-direction: row-reverse
    justify-content: space-between;
    align-items: center;
    color: black;
    max-width: 100%;
    margin-bottom: 3%;
`

export const ImageContainer = styled.div`
    
    width: 37%;
    object-fit: contain;
    
`
export const HomeCardImage = styled.img`
    max-width: 100%;
    
    
`
export const TextContainer = styled.div`
    width: 60%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    font-size: .8em;
`
export const HomeButton = styled.button`
    background-color: white;
    padding: 0% 2%;
    margin: 1% 0;
    border: 1.75px solid lightblue;
    border-radius: 5px;
    &:Hover:
`

///Footer///////////////////////////////

export const IconsSection = styled.div`
    width: 100%;
    font-size: 2.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: black;
    color: white;
`
export const ContactCards = styled.div`
    display: flex;
    width: 100%
    justify-content: space-evenly;
`
export const ContactCard = styled.div`
    width: 15%;
    border-bottom: 3px solid lightblue;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    border-radius: 5px;
    font-size: 1.6rem;
    
`
export const Box = styled.div`
    border: 1px solid lightblue;
    width: 20%;
    margin-top: 20px;
`
export const SocialContainer = styled.div`
    width: 30%;
    margin: 3%
    display: flex;
    justify-content: space-evenly;

`
export const FooterContainer = styled.div `
    background-color: black;
`


/* About styles*///////////////////////////////////////////////

export const AboutImgContainer = styled.div`

`
export const AboutImg = styled.img`

`
export const AboutTextContainer = styled.div`

`
