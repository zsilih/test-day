import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import PlainText from './components/PlainText';
import notes from "./notes";
import CreateText from './components/CreateText';
import { useAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './views/Home';
import Images from './views/Images';
import Rss from './views/Rss';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    });
  }

  const { isLoading } = useAuth0();

  if(isLoading) return <div>Loading...</div>

  return (
    <>
      <Router>
        <Header/>

        <Switch>
          <Route exact path="/"></Route>
          <Route path="/images"><Images/></Route>
          <Route path="/rss"><Rss/></Route>
        </Switch>

        <LoginButton />
        <LogoutButton />
        <Profile />
        <CreateText
          onAdd={addNote}
        />
        {notes.map((noteItem, index) => {
          return <PlainText
            key= {index}
            id= {index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        })}
        <Footer/>
      </Router>
    </>
  );
}

export default App;
