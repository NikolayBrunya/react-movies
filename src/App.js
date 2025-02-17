import React from 'react';
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Main } from './layout/Main'

export default class  App  extends React.Component{

  render() {
    return (
       <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );

 }
}

