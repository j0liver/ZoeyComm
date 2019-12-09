import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { styledFooter } from '../components/componentStyles'
const Footer = () => {
    
    return(
        <styledFooter>
            <section>
                <div>
                    <img src="" alt=""/>
                </div>
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
            </section>
            <section>
                <p>&copy; ZoeyComm 2020</p>
            </section>

        </styledFooter>
    )
}

export default Footer