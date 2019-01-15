import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Search  extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            showResults :false,
            flightResults : {}
        };
    }
         onSearchClick()
        {
            console.log('search click',this.state.showResults);
            axios.get('api')
            .then( res => {
                console.log(res.data);
                const searchResults = res.data;
                this.setState({flightResults : res.data,showResults : true});
                console.log('api response',this.state.flightResults);
               // this.props.history.push("/results");
                this.props.history.push({ 
                    pathname: "/results",
                    state: {searchData: searchResults}
                  }); 
            });
        }
   
    render()
        {
            return (
                <div id="mainContainer">                
                <div className="fare-families-container">
                <div className="fare-inputs-row three-width-items">
                <div className="input-holder">
                <div className="fare-inputs-row">
                <span className="from-icon label-hidden-text" />
                <input type="text" aria-expanded="false"  name="ctl00$c$CtWNW$ddlFrom-suggest" class="blue-outline with-icon" placeholder="Departure airport" tabindex="0" autocomplete="off" aria-autocomplete="inline" aria-required="true"></input>
                </div>
                </div>
                <div className="input-holder">
                <div className="fare-inputs-row">
                <input type="text" aria-expanded="false"  name="ctl00$c$CtWNW$ddlFrom-suggest" class="blue-outline with-icon" placeholder="Departure airport" tabindex="0" autocomplete="off" aria-autocomplete="inline" aria-required="true"></input>
                </div>
                </div>
                <div className="input-holder">
                <div className="fare-inputs-row">
                <input type="text" aria-expanded="false"  name="ctl00$c$CtWNW$ddlFrom-suggest" class="blue-outline with-icon" placeholder="Departure airport" tabindex="0" autocomplete="off" aria-autocomplete="inline" aria-required="true"></input>
                </div>
                </div>
                </div>
                <a href="#" id="btnSearch" className="red-button" onClick={this.onSearchClick.bind(this)} > Search </a> 
                {this.state.Message}
                </div>
                </div>
            )
        };
    
}
export default withRouter(Search)