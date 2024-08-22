import React from 'react';
import { Container, Grid } from '@material-ui/core';
import LoginPage from './components/authentication/loginComponents/LoginPage';
import Portfolio from './pages/Portfolio/Portfolio';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Resume from './pages/Resume/Resume';
import './App.css';
//import Footer from './components/Footer/Footer';
import RegistrationPage from './components/authentication/registeration';
import RegistrationPageParent from './components/authentication/registrationComponents/ParentRegister';
import  {AuthProvider} from './components/authentication/loginComponents/AuthContext';
import PrivateRoute from './components/TokenValidation/PrivateRoute';
import CreateResume from './components/CreateResume';
import Header from "./components/Header/Header";
import { CreateEducation } from './components/CreateResume/Education';
import { Skills } from './components/CreateResume/Skills';
import { WorkExperience } from './components/CreateResume/WorkExperience';
import { TemplateDesigns } from './components/Templates';
import ContactSection from './components/CreateResume/ContactSection';

function App() {
  return (
    <AuthProvider>
  <Router>
    <Container className={'top_60'}>
      <Grid container spacing={7}>
        <Grid item xs={12}>
          <Switch>
            {/* Redirect from root to login page */}
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>

            {/* Define routes for Login, Portfolio, and Resume pages */}
            <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPageParent} />
          <Route path="/parentRegister" component={RegistrationPage} />
            {/* Conditionally render Header after login */}
            <PrivateRoute path="/">
              <Header />
              <Switch>
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/resume" component={Resume} />
                
               
                <Route path="/createResume" component={CreateResume} />
                <Route path="/education" component={CreateEducation} />
                <Route path="/skills" component={Skills} />
                <Route path="/experience" component={WorkExperience} />
                <Route path="/design" component={TemplateDesigns} />
                <Route path="/contact" component={ContactSection} />
              </Switch>
            </PrivateRoute>

            {/* Redirect from unknown routes to login page */}
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Container>
  </Router>
</AuthProvider>

  );
}

export default App;
