import React from 'react';

import { Route, Switch, Redirect, Link, } from 'react-router-dom';

import './App.css';

import ChangePasswordPage from './pages/user/ChangePasswordPage';
import ChangeProfilePage from './pages/user/ChangeProfilePage';
import ChangePINPage from './pages/user/ChangePINPage';
import AssignPage from './pages/events/AssignPage';
import EventsPage from './pages/events/EventsPage';
import EventNewPage from './pages/events/EventNewPage';
import EventPage from './pages/events/EventPage';
import EventChangeTitlePage from './pages/events/EventChangeTitlePage';
import EventChangeDatesPage from './pages/events/EventChangeDatesPage';
import DocumentsPage from './pages/documents/DocumentsPage';
import DocumentNewPage from './pages/documents/DocumentNewPage';
import DocumentPage from './pages/documents/DocumentPage';
import HomePage from './pages/home/HomePage';
import AdminPage from './pages/auth/AdminPage';
import LoginPage from './pages/auth/LoginPage';
import RegistrationPage from './pages/auth/RegistrationPage';
import UserPage from './pages/user/UserPage';

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <div className='header_text'>
              <Link to='/'>Home</Link>
            </div>            
          </header>
          <main className="all">

            <Switch>
              <Route exact path="/" component={HomePage}/>

              <Route path="/admin" component={AdminPage}/>
              <Route path="/login" component={LoginPage}/>
              <Route path='/registration' component={RegistrationPage} />

              <Route exact path='/user' component={UserPage} />
              <Route exact path='/user/changePassword' component={ChangePasswordPage} />
              <Route exact path='/user/changeProfile' component={ChangeProfilePage} />
              <Route exact path='/user/changePIN' component={ChangePINPage} />

              <Route path='/assign' component={AssignPage} />
              <Route exact path='/events' component={EventsPage} />
              <Route path='/events/eventnew' component={EventNewPage} />
              <Route path='/events/event' component={EventPage} />
              <Route path='/events/changeTitle' component={EventChangeTitlePage} />
              <Route path='/events/changeDates' component={EventChangeDatesPage} />

              <Route exact path='/docs' component={DocumentsPage} />
              <Route path='/docs/docnew' component={DocumentNewPage} />
              <Route path='/docs/docpage' component={DocumentPage} />

              <Redirect to='/' />
            </Switch>

          </main>
        </div>
      );
    }
}



export default App;
