import React from 'react';
import { post } from 'axios';

class RegisterAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id : null,
            name : '',
            country : '',
            belongs : '',
            status : '',
            skill : '',
            tel : '',
            gender : '',
            birthday : '',
            adress : '',
            bill : '',
            note : '',
        }
    }

    render(){
        return(
            <form onSubmit={this.handleFormSumit}>
                
            </form>
        )
    }
}

