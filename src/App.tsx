import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { FirstForm } from './components/FirstForm';
import { HooksDemo } from './components/HooksDemo';
import { AppLogo } from './components/layout/Logo';
import { MainMenu } from './components/layout/MainMenu';
import ToDoRedux from './components/todo/ToDoRedux';
import { Index } from './pages/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <aside className="side-container">
          <AppLogo />
          <MainMenu />
        </aside>
        <header className="header">
          <HooksDemo />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              Starting
            </Route>
            <Route path="/diseases">
              <Index />
            </Route>
            <Route path="/forms">
              <FirstForm />
            </Route>
            <Route path="/todo">
              <ToDoRedux />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
