import { Avatar } from '@material-ui/core'
import React from 'react'
import './Create.css'


function Create() {
    return (
        <div>
            <h3>Create Vesti Card</h3>
            <p className="simple">Create your Vestivirtual card in 3 simple steps.</p>
            <div className="create">
                <div className="step col">
                    <div className="col-4">
                        <Avatar/>
                        <h4>First Step</h4>
                        <p>
                            We use state-of-the-art data encryption <br />
                            when handling your financial details. We <br />
                            use state of the art data encryption when <br />
                            handling financial details.
                        </p>
                    </div>
                    <div className="col-4">
                        <Avatar/>
                        <h4>Second Step</h4>
                        <p>
                            We use state-of-the-art data encryption <br />
                            when handling your financial details. We <br />
                            use state of the art data encryption when <br />
                            handling financial details.
                        </p>
                    </div>
                    <div className="col-4">
                        <Avatar/>
                        <h4>Third Step</h4>
                        <p>
                            We use state-of-the-art data encryption <br />
                            when handling your financial details. We <br />
                            use state of the art data encryption when <br />
                            handling financial details.
                        </p>
                    </div>
                </div>
                    <div className="order-button">
                        <button>
                            Order Your Card
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default Create
