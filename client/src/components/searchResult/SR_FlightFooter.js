import React from 'react';


export default class flightFooterComponent extends React.Component
{
    constructor(props)
    {
        super();       
    }
  
    render()
        {
            return (
                <div>
                    <div className="ts-fip__item " aria-hidden="true">
                        <img src="https://fly4.ek.aero/english/images/fly_dubai_tcm233-2317042.svg" alt="flydubai" height="18" />
                        <p className="ts-fip__operator">EK2124 Operated by flydubai</p>
                    </div>
                    <div className="ts-fip__item " aria-hidden="true">
                        <img src="https://fly4.ek.aero/english/images/Vistara_tcm233-5078186.svg" alt="Vistara" height="18" />
                        <p className="ts-fip__operator">UK0830 Operated by Vistara</p>
                    </div>
                </div>
            )
        };
    
}
