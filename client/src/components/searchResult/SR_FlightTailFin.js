import React from 'react';


export default class flightTailFinComponent extends React.Component
{
    constructor(props)
    {
        super();       
    }
  
    render()
        {
            return (
                <ul className="ts-fip__fin-list">
                    <span><li className="ts-fip__fin-item"><div className="ts-fip__fin-group">
                        <div className="ts-fip__fin-icon-col ">
                            <img className="ts-fip__fin" src="https://fly4.ek.aero/english/images/fly_dubai_tcm233-2317042.svg" alt="" width="28" />
                        </div><div className="ts-fip__fin-info-col">
                            <p className="ts-fip__type">B737</p><p className="ts-fip__aircraft">EK2124</p><p className="ts-aria-only">Operated by flydubai</p>
                        </div>
                    </div></li>
                        <li className="ts-fip__fin-item"><div className="ts-fip__fin-group">
                            <div className="ts-fip__fin-icon-col ">
                                <img className="ts-fip__fin" src="https://fly4.ek.aero/english/images/Vistara_tcm233-5078186.svg" alt="" width="28" />
                            </div><div className="ts-fip__fin-info-col">
                                <p className="ts-fip__type">A320</p><p className="ts-fip__aircraft">UK0830</p><p className="ts-aria-only">Operated by Vistara</p>
                            </div>
                        </div>
                        </li>
                    </span>
                </ul>
            )
        };
    
}
