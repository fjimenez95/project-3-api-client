import { getUser, logout } from './services/userService';
import { useState, Redirect } from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import { Route, Switch, withRouter } from 'react-router-dom';
// YOU CAN CHANGE THE FOOTER / HEADER FILES TO INDEX.JS AND YOU DON'T HAVE TO DO THE FINAL PREFIX /FOOTER BECAUSE SYSTEM WILL ALREADY KNOW TO LOOK FOR INDEX.JS
import Header from './components/Header/Header';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TodoPage from './pages/TodoPage';
import EditTodoPage from './pages/EditTodoPage';
import CreateTodoPage from './pages/CreateTodoPage';

// 1. Create four page components, Login, Signup, Dashboard, Home
// 2. Define as a function component and export them
// 3. Have return a div with the text content of Login, Signup ... etc
// 4. Import them into App.js
// 5. Import Switch and Route components from React Router and then define the various routes

function App(props) {

  const [ userState, setUserState ] = useState({
    user: getUser(),
  })

  function handleSignupOrLogin() {
    setUserState({
      user: getUser(),
    })
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
    // CAN USE THIS CAUSE OF WITHROUTER AND ADDING PROPS TO APP() ^
    props.history.push('/');
  }

  return (
    <div className="App">
      <Header handleLogout={handleLogout} user={userState.user} />
      <main>
        <Switch>
          <Route exact path='/' render={(props) =>
            <HomePage
            />
          } />
          
          <Route exact path='/dashboard' render={(props) =>
              // HOW TO PROTECT THIS PAGE FROM USERS NOT LOGGED IN
              userState.user ?
              <DashboardPage
              />
              :
              // USING THIS REDIRECT INSTEAD OF JUST LOGINPAGE IT WILL ALLOW YOU TO USE REFERRER TO BRING YOU BACK TO PAGE YOU WERE TRYING TO REACH AKA DASHBOARD
              <Redirect to='/login' />
            } />

          <Route exact path='/login' render={(props) =>
            <LoginPage
              {...props}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          } />

          <Route exact path='/signup' render={(props) =>
            <SignupPage
              {...props}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          } />

          <Route exact path='/todos' render={(props) =>
            <TodoPage 
              {...props}
              todos={userState.todos}
              />
          } />

          <Route path='/todos/edit/:id' render={(props) =>
            <EditTodoPage 
              {...props}
              todos={userState.todos}
              />
          } />

          <Route path='/todos/create' render={(props) =>
            <CreateTodoPage 
              {...props}
              todos={userState.todos}
              />
          } />  
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default withRouter(App);
