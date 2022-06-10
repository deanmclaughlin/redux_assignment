import React from 'react';

class ContactForm extends React.Component {		
    render() {		
        return (
            <div>
			    <h2>New Contact</h2>
				
                NAME
				<br/>
				<input ref={thisNode => this.inputFieldOne = thisNode} type="text"></input>
				<br/><br/>
				PHONE NUMBER
				<br/>
				<input ref={thisNode => this.inputFieldTwo = thisNode} type="tel"></input>
				<br/><br/><br/>
				<button onClick={ () => {this.props.onAdd([this.inputFieldOne.value.trim(),
				                                           this.inputFieldTwo.value.trim()]);
				                         this.inputFieldOne.value=""; this.inputFieldTwo.value="";}
							    }>ADD CONTACT</button>
				<br/><br/>
				<button onClick={ () => {this.inputFieldOne.value=""; this.inputFieldTwo.value="";}
				                }>CLEAR FIELDS</button>
            </div>
        );
    }
}

export default ContactForm;