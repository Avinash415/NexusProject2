import React from 'react'
import './Contactus.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill}  from 'react-icons/bs'
import {HiChatBubbleBottomCenter}  from 'react-icons/hi2'


const Contactus = () => {
  return (
    <section  className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
            {/*left side*/}
            <div className="flexColStart c-left">
                <span className="orangeText">Our Value</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className="secondaryText">We always ready to help by providijng the best services for you.
                 <br /> We beleive a good blace to live can make your life better
                 </span>

                 <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                    {/* second mode */}
                    <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>    
                    </div>

                    {/* second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Video Call</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>

                    {/* second mode */}
                    <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Message</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>    
                    </div>
                 </div>
            </div>

            {/* right side */}{
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            }
        </div>
    </section>
  )
}

export default Contactus