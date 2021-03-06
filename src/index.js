import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';
import contactForm from './reducers';
import AddressBook from './pages/AddressBook';
import ContactForm from './pages/ContactForm';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Link, Route } from 'react-router-dom';

const store = createStore(contactForm);
const root = ReactDOM.createRoot(document.getElementById('root'));

function renderListener() {	
root.render(
  <React.StrictMode>
    <BrowserRouter>
	
    <div className="App">
      <header className="App-header">
        <h1>Contacts</h1>
        <nav>
          <ul>
            <li><Link to="/address_book">Address Book</Link></li>
            <li><Link to="/new_contact">New Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
		
          <Route path="/address_book"
		         element={<AddressBook
				              items={store.getState()}
				              onClear={()=>{store.dispatch({ type: 'CLEAR' })}}
				 />}
		  />
		  
          <Route path="/new_contact"
		         element={<ContactForm
				              onAdd={(callbackItem)=>{store.dispatch({ type: 'ADD', newItem: callbackItem })}}
		         />}
		  />
		  
        </Routes>
      </main>
	  <footer>
	      <p>&copy; 2022</p>
	  </footer>
    </div>

    </BrowserRouter>
  </React.StrictMode>
);
}

reportWebVitals();
renderListener();
store.subscribe(renderListener);
