import React from 'react'
import './Safety.css'
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded"
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded"
import Picture from "../images/Group 7797.svg"

function Safety() {
    return (
        <div className="safety col">
            <div className="card col-6 left">
                <h4>Safety and security guaranteed.</h4>
                <p>
                The Vesti card lets you spend using the real exchange rate online, in- <br /> 
                store and while you travel - but exists only in your Wise account, either <br /> 
                on your phone or laptop.
                </p>
                <p>
                There’s no need to carry your wallet, and no risk of your card being <br />
                 compromised. Your Vesti card has different details to your physical <br /> 
                 card, and can be frozen after each purchase.
                </p>
                <div>
                    <h6>
                        <CheckCircleOutlineRoundedIcon/> Protected by NG & US SEC
                    </h6>
                    <p>
                        That means it’s a safe, smart and simple way to spend no matter  <br />
                        where in the world you are.
                    </p>
                </div>
                <div>
                    <h6>
                        <CheckCircleOutlineRoundedIcon/> PADSS Certification
                    </h6>
                    <p>
                        Hold 50+ currencies at once, convert them in real time using the <br />
                        free Vesti app, then spend online, in-store and abroad with your <br />
                        virtual card.
                    </p>
                </div>
                <div className="arrow">
                    Order The Vesti Card Now <ArrowRightAltRoundedIcon/>
                </div>
                </div>

                <div className="lock col-6">
                    <img src={ Picture } alt="" />
                </div>
        </div>
    )
}

export default Safety
