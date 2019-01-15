import React from 'react';
import FltBound from './SR_FlightBound'
import FltTailFin from './SR_FlightTailFin'
import FltHeader from './SR_FlightHeader'
import FltFooter from './SR_FlightFooter'
import Popup from './Modal'

export default class flightDetailsComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showPopup: false
          };
    }
    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

    render() {
        return (
            <div className="flights-row">
                <div id="ctl00_c_ctlPriceResult_ctl00_IdFlights" className="ts-ifl-row " data-target="interline" data-ts-comp="InterlineFlightListRow" data-index="6" data-ts-index="6">
                    <FltHeader />
                    <div className="ts-ifl-row__body" data-ts-comp="ModalOpener">
                        <div className="ts-ifl-row__body-item">
                            <div className="ts-fip  ts-fip--fullwidth" data-ts-comp="FbrPanel" aria-hidden="false">
                                <div className="ts-fip__header ts-fip__header--fullwidth">
                                   <FltBound /> 
                                    <FltTailFin />
                                </div>
                                <div className="ts-fip__content">
                                    <div className="ts-fip__fie">

                                        <div className="ts-fie">
                                            <div className="ts-fie__place">
                                                <p>
                                                    <span className="ts-aria-only">
                                                        Departure</span>
                                                    DXB
                                                                <span className="ts-aria-only">Dubai</span>
                                                </p>
                                                <time datetime="16:10" className="ts-fie__departure">
                                                    04:10
                                                                </time>
                                            </div>
                                            <div className="ts-fie__place ts-fie__right-side">
                                                <p>
                                                    <span className="ts-aria-only">
                                                        Arrival IXC Chandigarh
                                                                    </span>
                                                    <span aria-hidden="true">
                                                        IXC</span>
                                                </p>
                                                <time datetime="20:15" className="ts-fie__arrival">
                                                    14:45
                                                                </time>
                                            </div>
                                            <div className="ts-fie__infographic">
                                                <p>
                                                    <time>
                                                        <span className="ts-aria-only">
                                                            Duration
                                                                        </span>
                                                        <span>
                                                            9 &nbsp;hrs 5 &nbsp;mins</span>
                                                    </time>
                                                </p>
                                                <div id="ctl00_c_ctlPriceResult_ctl00_ctl04_dvTransport" className="ts-fie__transport ts-fie__transport--has-stops">
                                                    <img id="ctl00_c_ctlPriceResult_ctl00_ctl04_imgTravelmode" className="travel-mode" alt="" src="https://fly4.ek.aero/Images/farebrand_refresh/flight@2x.png" />
                                                </div>
                                                <div>
                                                    <a href="#" onClick={this.togglePopup.bind(this)} id="ctl00_c_ctlPriceResult_ctl00_ctl04_IdStopOver" className="ts-js-open-modal" data-ts-modal="flight-info-modal-outbound-0-1">
                                                    1 connection<span className="ts-aria-only"> for Dubai to Chandigarh. Opens a dialogue box.</span>
                                                    </a>

                                                    {this.state.showPopup ? 
                                                      <Popup text='Close' losePopup={this.togglePopup.bind(this)} /> : null }
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ts-fid">
                                        <div className="ts-fid__connection">
                                            <p className="ts-fid__label">Connection</p>
                                            <strong className="ts-fid__value">DEL<span className="ts-aria-only">Delhi</span>
                                            </strong>
                                        </div>
                                        <div className="ts-fid__class">
                                            <p className="ts-fid__label">Class</p>
                                            <strong className="ts-fid__value ts-fid__value--ellipsis">
                                                Economy</strong>

                                        </div>
                                    </div>
                                </div>
                                <div className="ts-fip__footer" aria-hidden="false">
                                    <span>                                       
                                       <FltFooter />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

}
