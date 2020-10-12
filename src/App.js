import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import NewsContainer from './components/News/NewsContainer';
import MusicContainer from './components/Music/MusicContainer';
import SettingsContainer from './components/Settings/SettingsContainer';





const App = (props) => {
  
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer></HeaderContainer>
      <Nav></Nav>
      <div className='app-wrapper-content'>
        
        <Route path='/profile/:userId?' render={ () => <ProfileContainer  /> } />
        <Route path='/dialogs' render={ () => <DialogsContainer  /> } />
        <Route path='/users' render={ () => <UsersContainer /> } />
        <Route path='/news' render={ () => <NewsContainer /> } />
        <Route path='/music' render={ () => <MusicContainer /> } />
        <Route path='/settings' render={ () => <SettingsContainer /> } />
        <Route path='/login' render={ () => <Login /> } />
      
      </div>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}



export default App;
