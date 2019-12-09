import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';


import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUSer from './components/CreateUser';

function App() {
  return (
    <Router>
      <Navigation />
        <Route exact path="/" component={NotesList} />
        <Route exact path="/edit:id" component={CreateNote} />
        <Route exact path="/create" component={CreateNote} />
        <Route exact path="/user" component={CreateUSer} />

    </Router>
  );
}

export default App;
