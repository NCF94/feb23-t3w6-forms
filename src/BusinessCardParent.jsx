import {Component} from "react";

import BusinessCardDisplay from "./BusinessCardDisplay";
import BusinessCardForm from "./BusinessCardForm";

export default class BusinessCardParent extends Component {
    constructor(){
        super();

        this.state = {
            editMode: false,
            name: "Example name",
            email: "example@email.com"
        }
    }

    
    /**
     * Description placeholder
     *
     * @param {*} stateKeyId - String, should match a key in this.state for BusinessCarParent.
     * @param {*} newStateValue - String, should be the new value we want to set for the state key in BusinessCardParent
     */
    updateState = (stateKeyId, newStateValue) => {

        this.setState({
            [stateKeyId]: newStateValue
        })
    }

    render (){
        if (this.state.editMode){
            // if edit is true, show the form
            return(
                <BusinessCardForm 
                name={this.state.name} 
                email={this.state.email}
                setParentState={this.updateState}/>
            )
        } else {
            return(
                <div>
                    <BusinessCardDisplay
                    email={this.state.name}
                    name={this.state.email}
                    />
                </div>
            )
        }
    }
}



// import react from "react";
// class BlahBlah extends react.Component {
//     constructor(){

//     }
// }