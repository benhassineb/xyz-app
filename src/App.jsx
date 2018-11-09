import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { ApplicationRoutes } from './routes/index';

export class App extends Component {

  render() {
    return (
      <AppContainer>
        <BrowserRouter basename={'/'} >
          <ApplicationRoutes/>
        </BrowserRouter>
      </AppContainer>
    );
  }
}