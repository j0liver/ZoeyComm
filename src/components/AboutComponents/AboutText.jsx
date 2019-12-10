import React from 'react'
import { AboutImgContainer, AboutImg, AboutTextContainer } from '../componentStyles'
import marineBadge from '../../imgs/marineBadge.jpg'

const AboutText = () => {

    return (
        <section>
            <AboutImgContainer>
                <AboutImg  src={marineBadge}/>
            </AboutImgContainer>
            <AboutTextContainer>
                <h3>Veteran Owned & Operated</h3>
                <ol>
                    <li>A sense of urgency you want working for you.</li>
                    <li>Leadership that will make you stronger</li>
                    <li>2 United States Marines</li>
                    <li>1 Army Network Engineer</li>
                    <li>1 Navy Electronics technician</li>
                    <li>A handful of talented, passionate, and experianced staff.</li>
                </ol>
                <p>We don't deserve your business simply because we served. However, it was that service that makes us unique. We traveled the world, recieved elite training, strive for perfection, and have a sense of camaraderie that is hard to find. After my service as a data network specialist and Marine Embassy Security Guard I was a Network Operations Team Leader for SRI International and then System Administrator for Barrett Jackson. My team members each have equally impressive resumes and real world IT and business experience. We are excited about our growth potential and being able to offer more service men and women positions in the future.</p>
            </AboutTextContainer>   
        </section>
    )
}
export default AboutText