import React, { Component } from 'react';
// import { API } from 'aws-amplify'

export default class InputTransformComponent extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            email: '',
            submitted: false, 
        }
    }

    // Form Events
    onChange(e) {
        this.setState({
            email: e.target.value,
        });
    }

    async onSubmit(e) {
        e.preventDefault()
        const email = this.state.email.toLowerCase()
        if (this.state.email !== '') {         
            this.setState({
                email: email,
                submitted: true,
            })
            console.log(email);

            // LAMBDA API ENDPOINT
            const endpoint = "<https://psapqdr502.execute-api.us-west-2.amazonaws.com/default/sendContactEmail>";
            
            // Message to be sent as JSON
            const body = JSON.stringify({
                newEmail: email
            });

            const requestOptions = {
                method: "POST",
                body
            }

            fetch(endpoint, requestOptions)
                .then((response) => {
                    if (!response.ok) throw new Error("Error in fetch");
                    return response.json;
                })
                .then((response) => {
                    document.getElementById("result-text").innerText = "Email added to list.";
                })
                .catch((error) => {
                    document.getElementById("result-text").innerText = "The open positions today have been filled. Try again tomorrow.";
                })
          }
    }
    // React Life Cycle
    componentDidMount() {
        this.setState({
            email: '',
        });
    }

    render() {
        const form = (
            <>
            <p>ENTER YOUR EMAIL FOR A <br/>
            CHANCE TO MAKE THE LIST
            </p>
            <div className="email-container">
                <form onSubmit={this.onSubmit}>
                    <div className="field">
                        <input 
                            type="email"   
                            className="form-control" 
                            placeholder='YOUR EMAIL'
                            onChange={this.onChange}
                            onSubmit={this.onSubmit} 
                            value={this.state.email}
                        />
                        {this.state.email !== '' ? (<button>[SUBMIT]</button>) : null}
                    </div>
                </form>
            </div>
            </>
        )


        const submittedPage = (
            <div className="State-onsubmit">
                <div>
                    <p>WE WILL BE IN CONTACT
                    <br />IF YOU MADE THE LIST
                    </p>
                </div>
                <p id="result-text"></p>
            </div>
        )

        return (
            this.state.submitted === false ?
                form :
                submittedPage
        )
    } // End if
}
