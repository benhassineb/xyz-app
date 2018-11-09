import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './routes/index';
 
export class App extends Component {
  render() {
    return (
      <AppContainer>
        <BrowserRouter children={routes} basename={'/'} />
      </AppContainer>
    );
  }
}