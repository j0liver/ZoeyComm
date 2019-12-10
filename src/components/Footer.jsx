import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { ContactCards, ContactCard, Box, SocialContainer } from './componentStyles'
import vetLogo from '../imgs/vetLogo.jpg'

import { IconsSection } from './componentStyles'
const Footer = () => {
    
    return(
        <div>
            <IconsSection>
                <ContactCards>
                    <ContactCard>
                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                        <Box />
                        <p>Boise, Idaho</p>
                     </ContactCard>
                     <ContactCard>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <Box />
                        <p>Boise, Idaho</p>
                     </ContactCard>
                     <ContactCard>
                        <FontAwesomeIcon icon={faMobileAlt} />
                        <Box />
                        <p>Boise, Idaho</p>
                     </ContactCard>   
                </ContactCards>
                <SocialContainer>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                </SocialContainer>
                
                <div>
                    <img src={vetLogo} alt=""/>
                </div>
                
            </IconsSection>
            <section>
                <p>&copy; ZoeyComm 2020</p>
            </section>

        </div>
    )
}

export default Footer