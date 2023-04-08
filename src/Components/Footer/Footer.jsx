import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/boat.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import {  AiOutlineTwitter} from 'react-icons/ai'
import {  AiOutlineYoutube} from 'react-icons/ai'
import {  AiOutlineInstagram} from 'react-icons/ai'
import {  FaTripadvisor} from 'react-icons/fa'
import {  FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
 },[])
  return (
    <section className='footer'>
      <div className='videoDiv '>
        <video src={video2} muted autoPlay loop type="video/mp4" ></video>
        </div>

        <div className='setContent container'>
            <div className='contactDiv flex'>
              <div data-aos='fade-up' className='text'>
                <small>KEEP IN TOUCH</small>
                <h2>Travel with us</h2>
              </div>

              <div className='inputDiv flex'>
                  <input type='text' placeholder='Enter Email 
                  Address'/>
                  <button data-aos='fade-up' className='btn flex' type='submit'>
                       SEND <FiSend className='icon'/>
                  </button>
              </div>
            </div>

            <div className='footerCard flex'>
                <div className='footerIntro flex'>
                    <div className='logoDiv'>
                      <a href="#" className='logo flex'>
                         <MdOutlineTravelExplore className="icon"/> Travel.
                      </a>
                    </div>

                    <div data-aos='fade-up' className='footerParagraph '>
                    Tourism is a social, 
                    cultural and economic phenomenon 
                    which entails the movement of people to countries or 
                    places outside their usual environment for personal 
                    or business/professional purposes. 
                    These people are called visitors (which may be either tourists or excursionists; residents or non-residents) and tourism has to do with their activities, some of which involve tourism expenditure.
                    </div>

                  <div  data-aos='fade-up' className='footerSocials flex'>
                    < AiOutlineTwitter className="icon"/>
                    < AiOutlineYoutube className="icon"/>
                    < AiOutlineInstagram className="icon"/>
                    < FaTripadvisor className="icon"/>

                  </div>
                </div>

                <div className='footerLinks flex'>
                  <div  data-aos='fade-up' data-aos-duriation='3000'  className='linkGroup'>
                      <span className='groupTitle'>
                          OUR AGENCY
                      </span>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          services
                      </li>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          Insurance
                      </li>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          Agency
                      </li>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          Tourism
                      </li>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          Payment
                      </li>
                  </div>
                    
                  <div data-aos='fade-up' data-aos-duriation='4000' className='linkGroup '>
                      <span className='groupTitle '>
                          PARTNERS
                      </span>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          Booking
                      </li>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          Rentcars
                      </li>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          Hostelwold
                      </li>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          Trivago 
                      </li>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          Tripadvisor
                      </li>
                  </div>

                  <div  data-aos='fade-up' data-aos-duriation='5000' className='linkGroup'>
                      <span className='groupTitle'>
                        LAST MINUTE  
                      </span>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          Londen
                      </li>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          California
                      </li>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          Indonesia
                      </li>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          Europe   
                      </li>

                      <li className='footerList flex'>
                          <FiChevronRight className="icon"/>
                          Oceania
                      </li>
                  </div>
                
                  <div className='footerDiv flex'>
                      <small>Best Travel website Theme</small>
                      <small>Copyrights Reserved @ Rs 2023</small>

                  </div>

                
                 
                </div>
                
            </div>
        </div>
    </section> 
  )
}

export default Footer