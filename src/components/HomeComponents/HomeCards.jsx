import React from 'react'
import holder  from '../../imgs/holder.jpg'
import zoeytouch from '../../imgs/zoeytouch.jpg'
import lady from '../../imgs/lady.jpg'
import phone from '../../imgs/phone.jpg'
import { HomeCard, ReversedHomeCard, ImageContainer, HomeCardImage, TextContainer, HomeButton } from '../componentStyles'
const HomeCards = () => {

    return(
        <section>
            <HomeCard>
                <ImageContainer>
                    <HomeCardImage src={zoeytouch} alt="" className='homeImg'/>
                </ImageContainer>
                <TextContainer>
                    <h4>Residential Internet, Networking, and Security</h4>
                    <section>
                        <p>We partner with housing developers, HOA's, and Apartment Complexes to engineer and support residential Internet network demands. Our experienced low voltage journeyman and network engineers provide professional residential network installation, repairs, and upgrades. We offer additional services such as home and community security system designs, installations, and monitoring. Two of our staff were United States Marine Embassy Security Guards and have years of additional experience installing home and business security systems.</p>
                    </section>
                    <HomeButton>Learn More!</HomeButton>
                </TextContainer>
            </HomeCard>
            <ReversedHomeCard>
                <ImageContainer>
                    <HomeCardImage src={lady} alt="" className='homeImg'/>
                </ImageContainer>
                <TextContainer>
                    <h4>Business Internet and IT support.</h4>
                    <section>
                        <p>We implement state of the art networks for commercial buildings, shopping centers, and facilities. We work with ISP's on your behalf and aid you in the design, setup, and support of your company IT needs. Our goal is to help organizations avoid making mistakes during the implementation or upgrade of their company systems and networks. We do this by mindful communication, diligent planning, and ongoing documentation & support. This is a proactive measure in preventing the pains and costs related to turnover within companies IT departments.</p>
                    </section>
                    <HomeButton>Learn More!</HomeButton>
                </TextContainer>
            </ReversedHomeCard>
            <HomeCard>
                <ImageContainer>
                    <HomeCardImage src={phone} alt="" className='homeImg'/>
                </ImageContainer>
                <TextContainer>
                    <h4>Event IT design, staffing, setup, and support.</h4>
                    <section>
                        <p>ZoeyComm works with clients in determining bandwidth requirements and capabilities. We negotiate with ISP’s or WISP’s on your behalf to ensure solid and if possible redundant networks. We then design, install, and support the optimal guest, POS, and staff networks within your budget. We have 35 years of experience in this industry and can be of significant assistance in the planning, staffing, setup, and support of your next event.</p>
                    </section>
                    <HomeButton>Learn More!</HomeButton>
                </TextContainer>
            </HomeCard>
        </section>
    )
}

export default HomeCards