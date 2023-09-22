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

    render (){
        if (this.state.editMode){
            // if edit is true, show the form
            return(
                <BusinessCardForm />
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