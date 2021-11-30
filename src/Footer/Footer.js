import React from 'react'
import './Footer.css'
import Logo from "../images/footerlogo.svg"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import YouTubeIcon from "@material-ui/icons/YouTube"


function Footer() {
    return (
        <div className="text1">
            <div className="word">
            <h4>
                Get your virtual card and start spending <br />
                safely online, in-store and abroad.
            </h4>
            <button>
                Order Your Card Today
            </button>
            </div>
        <div className="alls">
            <div className="footer">
                <div className="logo">
                    <img src={ Logo } alt="" />
                </div>
                <div className="product">
                    <h4>PRODUCTS</h4>

                    <p>Cryptocurrency</p>
                    <p>MLab (Migration Lab)</p>
                </div>
                <div className="contact">
                    <h4>CONTACT</h4>

                    <p>support@sycainvest.com</p>
                    
                </div>
                <div className="nigeria">
                    <h4>NIGERIA (LAGOS)</h4>

                    <p>110 Randol Mill Rd #240</p>
                    <p>Arligton Texas, 76011</p>
                </div>
                <div className="dallas">
                    <h4>DALLAS TEXAS, USA</h4>

                    <p>110 Randol Mill Rd #240</p>
                    <p>Arligton Texas, 76011</p>
                </div>
            </div>
                <div className="text">
                    Vesti Technologies Inc does not provide investment advice and individual investors should make their own decisions or seek independent advice. The value of <br />
                    investments can go up as well as down and you may receive back less than your original investment. We are a technology platform, not a registered broker-dealer <br /> 
                    or investment adviser.
                    <br /> <br />
                    Vesti Technologies Inc complies with the EU-U.S. Privacy Shield Framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention <br /> 
                    of all personal information transferred from the European Union to the United States. In using our website, we may ask you to provide us with some specific and <br /> 
                    personally identifiable information that can be used for the purpose of contacting, identifying and tagging you. Such information could include your name, Phone <br /> 
                    numbers, Email address, and geographical location. It should be noted that personally identifiable information may include but is not restricted to your name (“Personal <br /> 
                    Information”). We may also collect anonymous demographic information, which is not unique to you. Our website collects information that your device sends every time <br /> 
                    you use it. This Log Data may include information such as phone number, type of device, version of Operating system, the pages of our application that you visit, the time <br /> 
                    and date of visit, the time spent on those pages and other statistics. Additionally, we may use third party services such as Google Analytics that collect, monitor and <br /> 
                    analyze this information.
                </div>
                <div className="bottom">
                    <div className="social">
                        <FacebookIcon/>
                    </div>
                    <div className="social">
                        <InstagramIcon/>
                    </div>
                    <div className="social">
                        <LinkedInIcon/>
                    </div>
                    <div className="social">
                        <TwitterIcon/>
                    </div>
                    <div className="social">
                        < YouTubeIcon/>
                    </div>

                    <div className="policy">
                        POLICIES  .
                    </div>
                    <div className="policy">
                        TERMS  .
                    </div>
                    <div className="policy">
                        PRIVACY
                    </div>

                    <div className="right">
                        &copy; 2021 VEST. All rights reserved.
                    </div>
                </div>
                
        </div>
    </div>
    )
}

export default Footer
