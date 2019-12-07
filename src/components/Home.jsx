import React from 'react';

import Nav from './Nav'
import HeroCarousel from './HomeComponents/HeroCarousel'
import HomeText from './HomeComponents/HomeText'
import HomeCards from './HomeComponents/HomeCards'
import Footer from './Footer'
const Home = () => {

    return(
        <section>
            <Nav />
            <HeroCarousel />
            <HomeText />
            <HomeCards />
            <Footer />
        </section>
    )
}

export default Home



///Navbar
///HeroCarousel
//HomeCards
///Footer