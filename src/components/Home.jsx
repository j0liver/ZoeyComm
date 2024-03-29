import React from 'react';

import Nav from './Nav'
import HeroCarousel from './HomeComponents/HeroCarousel'
import HomeText from './HomeComponents/HomeText'
import HomeCards from './HomeComponents/HomeCards'
import Footer from './Footer'
import '../App.css';

import  { HomePageContainer, CarouselContainer }  from './componentStyles'
const Home = () => {

    return(
        <section>
            <Nav />
            <CarouselContainer>
                <HeroCarousel />
            </CarouselContainer>
            <HomePageContainer >
                <HomeText />
                <HomeCards />
                
            </HomePageContainer>
            <Footer />
        </section>
    )
}

export default Home



///Navbar
///HeroCarousel
//HomeCards
///Footer