import React from 'react';


export default class flightBoundComponent extends React.Component
{
    constructor(props)
    {
        super();      
    }
  
    render()
        {
        return (
            <div className="ts-fip__date-container">
                <time>   Thursday,14 Feb 19 </time>
                <h4 className="ts-fip__bound">
                    Outboundd
                </h4>
            </div>
        )
        };
    
}
