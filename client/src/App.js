// export default App;
import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';


<<<<<<< HEAD
=======
import SignUp from './components/SignUp';
import SUP from './components/sign-up';
import LogIn from './components/LogIn';
>>>>>>> 60907d5fce50dc0eec84a909ffe2fc575588ca9b
import RedirectGoogleAuth from './components/RedirectGoogleAuth';
import LoginLocal from './components/login-local';
import PersonalAccount from './components/personal-account';
import Logout from './components/logout';
import Users from './components/Users';

import List from './components/List';
import PhotoWidgetUploader from './components/PhotoWidgetUploader';
import UsersDb from './components/UsersDb';

import Home from './pages/Home';
import Modern from "./pages/Modern";
import Decor from "./pages/Decor";
import Luxury from "./pages/Luxury";
import Antique from "./pages/Antique";
import Container from "./components/Container";
import "./components/Container.css";

import NavbarMain from "./components/Navbar-main/Navbar-main";
import NavbarUser from "./components/Navbar-user/Navbar-user";

import Navbar from "./components/Navbar";
import Admin from './pages/Admin';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
// import Footer from "./components/Footer";


class App extends Component {

  state = {
    user: {}
  }

  setUser = (user) => {
    this.setState({
      user: user
    });
  }

  render() {
<<<<<<< HEAD
    const App = () => (
      <div>
        <Container>
          <NavbarUser />
          <NavbarMain />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/modern" component={Modern} />
            <Route exact path="/decor" component={Decor} />
            <Route exact path="/luxury" component={Luxury} />
            <Route exact path="/antique" component={Antique} />
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path="/usersdb" component={UsersDb} />


            <Route path='/list' component={List} />

            <Route path='/signup' component={SignUp} />
            <Route exact path="/photoWidgetUploader" component={PhotoWidgetUploader} />

            {window.location.origin === "http://localhost:3000" ?
              <Route exact path="/auth/google" component={RedirectGoogleAuth} />
              : false}
          </Switch>
          {/* <Footer /> */}
        </Container>
      </div>
    )
    return (

      <App />

=======
    return (
        <Router>
          <Container>
          <Navbar />
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path="/modern" component={Modern} />
                  <Route exact path="/decor" component={Decor} />
                  <Route exact path="/luxury" component={Luxury} />
                  <Route exact path="/antique" component={Antique} />
                  <Route exact path='/admin' component={Admin}/>
                  <Route path='/list' component={List}/>
                  <Route exact path='/login' component={LogIn}/>
                  <Route path='/signup' component={SignUp}/>
                  <Route path='/sign-up' component={SUP}/>
                  <Route exact path="/logout" component={Logout} />
                  <Route exact path="/login-local" render={
                    () => (
                      <LoginLocal {...this.props} setUser={this.setUser} user={this.state.user} />
                    )
                  } />
                  <Route exact path="/personal-account" render={
                    () => (
                      <PersonalAccount {...this.props} setUser={this.setUser} user={this.state.user} />
                    )
                  } />
                  <Route exact path="/photoWidgetUploader" component={PhotoWidgetUploader}/>
                  {/* <Route exact path="/apiPhotos" component={ApiPhotos}/> */}
                  <Route exact path="/usersDb" component={UsersDb}/>
                  { window.location.origin === "http://localhost:3000" ? 
                    <Route exact path="/auth/google" component={RedirectGoogleAuth} />
                  : false }
                </Switch>
              {/* <Footer /> */}
          </Container>
        </Router>
>>>>>>> 60907d5fce50dc0eec84a909ffe2fc575588ca9b
    );
  }
}

export default App;
