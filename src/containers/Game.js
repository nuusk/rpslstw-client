import React, { Component } from 'react';
import Layout from '../components/Layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

export default class Game extends Component {
  render() {
    return (
      <Layout columned narrow>
        <AppHeader />
        <main>
          <div />
          <h1>
            {'Wanna play?'}
          </h1>
          <p>
            hhahahie
          </p>
          <div />
        </main>
        <AppFooter />
      </Layout>
    )
  }
}
