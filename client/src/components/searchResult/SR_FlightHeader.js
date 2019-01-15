import React from 'react';


export default class flightHeaderComponent extends React.Component
{
    constructor(props)
    {
        super();
      
    }
  
    render()
        {
            return (
                <div className="ts-ifl-row__header Currency-Convert-Container">
                    <h3>
                        <span className="ts-ifl-row__header-content ts-enable-focus" tabindex="0">
                            <strong>  1. Total: AED 1,965 </strong> for 1 passenger
                                                </span>
                    </h3>
                </div>
            )
        };
    
}
