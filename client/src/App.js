// export default App;
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';


import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import RedirectGoogleAuth from './components/RedirectGoogleAuth';

import List from './components/List';
import PhotoWidgetUploader from './components/PhotoWidgetUploader';
import UsersDb from './components/UsersDb';


import Admin from './pages/Admin';
import Modern from "./pages/Modern";
import Decor from "./pages/Decor";
import Luxury from "./pages/Luxury";
import Antique from "./pages/Antique";
import Container from "./components/Container";
import "./components/Container.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


class App extends Component {

  render() {
    const App = () => (
      <div>
        <Container>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/modern" component={Modern} />
            <Route exact path="/decor" component={Decor} />
            <Route exact path="/luxury" component={Luxury} />
            <Route exact path="/antique" component={Antique} />

            // Admin || User LogIn
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/login' component={LogIn} />
            <Route path='/list' component={List} />
            
            <Route path='/signup' component={SignUp} />
            <Route exact path="/photoWidgetUploader" component={PhotoWidgetUploader} />
            <Route exact path="/usersDb" component={UsersDb} />
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

    );
  }
}

export default App;
