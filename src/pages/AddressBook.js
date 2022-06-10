import React from 'react';

class AddressBook extends React.Component {
    render() {
        return (
            <div>
                <h2>Address Book</h2>
                <button onClick={() => {this.props.onClear();}}>DELETE ALL</button>
				<br/><br/>
				<ul>{this.props.items.map(x => <li key={x}>NAME:&nbsp; {x[0]} {<br/>} PHONE: {x[1]}</li>)}</ul>
            </div>
        );
    }
}

export default AddressBook;