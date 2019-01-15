import React from 'react';
import FltDetails from './SR_FlightDetails'

export default class resultContainerComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            Message: ''
        };
    }
    render() {
        return (
            <div id="mainContainer" className="mainContainer noRightCol">
                <div className="fare-families-container">
                    <h1 id="ctl00_c_pH_heading1">
                        Make a booking
                     </h1>
                    <div className="flight-fares-content">
                        <div className="ts-ifl-container ts-comp">
                            <div className="ts-ifl-container__header">
                                <div className="ts-ifl-container__header-title">
                                    <h3 className="ts-ifl-container__header-title-content">
                                    Select flights (<span className="flights-num-interline">2</span> options)
                        </h3>
                                </div>
                            </div>

                            <div className="ts-ifl" data-ts-comp="InterlineFlightList" data-ts-leg="interline" data-ts-max-visible="5">
                                <div className="ts-ifl__body" id="interline-flight-list">
                                <FltDetails />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

}