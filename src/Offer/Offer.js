import React from 'react'
import './Offer.css'
import Filter1RoundedIcon from "@material-ui/icons/Filter1Rounded"
import Filter2RoundedIcon  from '@material-ui/icons/Filter2Rounded'
import Filter3RoundedIcon  from '@material-ui/icons/Filter3Rounded'

function Offer() {
    return (
        <div>
            <h3>Vesti Card Offerings</h3>
            <p className="spend">Spend safely online, in-store and abroad with the new Vesti card.</p>

        <div className="offer col">
            
            <div className="vesti-offer col-6 ">
                <div>
                <Filter1RoundedIcon/>
                <h4>Virtual Dollar Card</h4>
                <p>We use state-of-the-art data encryption when handling your finacial details. We use state of the art data encryption when handling finacial details.</p>
                </div>
                <div>
                <Filter2RoundedIcon/>
                <h4>Second Benefit</h4>
                <p>We use state-of-the-art data encryption when handling your finacial details. We use state of the art data encryption when handling finacial details.</p>
                </div>
                <div>
                <Filter3RoundedIcon/>
                <h4>Third Benefit</h4>
                <p>We use state-of-the-art data encryption when handling your finacial details. We use state of the art data encryption when handling finacial details.</p>
                </div>
            </div>

            <div className="offering card col-6 mx-5"></div>
        </div>
        </div>
    )
}

export default Offer
