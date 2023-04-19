import React from 'react'
import banner from '../PatientFiles/images/banner.webp'
import imunology from '../PatientFiles/images/imunology.jpeg'
import dermatology from '../PatientFiles/images/dermatology.avif'
import familymedicine from '../PatientFiles/images/familymedicine.jpeg'
import neurology from '../PatientFiles/images/neurology.jpeg'
import obstretics from '../PatientFiles/images/obstretics.jpg'
import psychiatry from '../PatientFiles/images/psychiatry.jpg'
import pediatrics from '../PatientFiles/images/pediatrics.webp'
import urology from '../PatientFiles/images/urology.jpeg'
import DoctorPagesContent from './DoctorPagesContent'
const HomeDoctor = () => {


    return(
        <div className="Body">
            <DoctorPagesContent/>
            <div className='HOMEPAGE'>
                <img className='bannerphoto' src={banner}/> 
                <div className='Description'>
                    <h1 style={{borderBottom:'solid 2px rgb(193, 204, 206)'}}>World leading specialists </h1>
                    <p>    
                        Our world-class specialists offer a breadth and depth of medical expertise in a seamless and holistic approach.
                        Individually, our specialists are some of the most highly respected in their field of medicine. 
                        But what really sets us apart is the way our team works together for the benefit of your health and wellbeing. 
                        </p><p>Collectively, they offer a breadth and depth of medical expertise that is quite simply unmatched anywhere in the UK in a private clinic. 
                        Always working with you to understand your needs and match you with the most suitable expert and devising an effective care plan that works for you.
                        Here at London Medical, we believe that working in conjunction with your NHS care team we can help supplement your NHS care. With your agreement, 
                        we will keep your NHS care team including your NHS GP fully informed of the clinical care plan you are following.
                        Although you (or your health insurance provider if you have one) will need to pay for the services, we work hard 
                        to keep prices fair and reasonable. The tens of thousands of patients who have used our services tell us that we
                        provide real value for money. See our reviews to see what our patients say about us.
                        </p><p>If you’re unsure which of our consultants would be best suited to your needs, please do contact us.
                        Together, we’ll craft the perfect solution so you can focus on living your best life.
                    </p>
                </div>
                <div className='Specializations'>
                    <h1 style={{borderBottom:'solid 2px rgb(193, 204, 206)'}}>Specializations</h1>
                    <div className='column'>
                        <p>Allergy and immunology</p>
                        <img src={imunology}/>
                        <p>Dermatology</p>
                        <img src={dermatology}/>
                    </div>
                    <p>Family medicine</p>
                    <img src={familymedicine}/>
                    <p>Neurology</p>
                    <img src={neurology}/>
                    <p>Obstetrics and gynecology</p>
                    <img src={obstretics}/>
                    <p>Pediatrics</p>
                    <img src={pediatrics}/>
                    <p>Psychiatry</p>
                    <img src={psychiatry}/>
                    <p>Urology</p>
                    <img src={urology}/>

                </div>
            </div>
        </div>
    )


}

export default HomeDoctor