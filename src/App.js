import './App.css';
import Footer from './components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
// YOU CAN CHANGE THE FOOTER / HEADER FILES TO INDEX.JS AND YOU DON'T HAVE TO DO THE FINAL PREFIX /FOOTER BECAUSE SYSTEM WILL ALREADY KNOW TO LOOK FOR INDEX.JS
import Header from './components/Header/Header';

import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

// 1. Create four page components, Login, Signup, Dashboard, Home
// 2. Define as a function component and export them
// 3. Have return a div with the text content of Login, Signup ... etc
// 4. Import them into App.js
// 5. Import Switch and Route components from React Router and then define the various routes

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path='/' render={(props) =>
            <HomePage
            />
          } />
          <Route exact path='/dashboard' render={(props) =>
              <DashboardPage
              />
            } />
          <Route exact path='/login' render={(props) =>
            <LoginPage
            />
          } />
          <Route exact path='/signup' render={(props) =>
            <SignupPage
            />
          } />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
