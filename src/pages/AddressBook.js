import React, { Component } from 'react';

class AddressBook extends React.Component {
    render() {
        return (
            <div>
                <h2>Address Book</h2>
                <button onClick={() => {this.props.onClear();}}>CLEAR ALL</button>
				<br/><br/>
				GARBAGE
				<ul>{this.props.items.map(x => <li key={x}>{x.join(" ... PHONE: ")}</li>)}</ul>
            </div>
        );
    }
}

export default AddressBook;