import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import '../styles/index.css';
import LinkList from './LinkList';
import BlockQuote from './BlockQuote';
import CreateLink from './CreateLink';
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title code">Welcome to React</h1>
        </header>
        <div className="vh-30">
          <p className="App-intro code fw9">
            To get started, edit <code style={{color:`#5E2CA5`}}>src/App.js</code> and save to reload.
          </p>
          <button className="button code fw9 mv4">Hello</button>
          <div className='center w85 mb5' style={{background: `#5E2CA5`}}>
            <Header />
            <div className='ph3 pv1 background-gray'>
              <Switch>
                <Route exact path='/' component={LinkList}/>
                <Route exact path='/create' component={CreateLink}/>
              </Switch>
            </div>
          </div>
        </div>
        <BlockQuote />
      </div>
    );
  }
}

export default App;
