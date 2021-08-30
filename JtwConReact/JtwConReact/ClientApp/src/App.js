import React from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Login from './components/Login'

import './custom.css'
import { BrowserRouter as Router,Route,Switch, } from 'react-router-dom';

export default function App() {


    return (
      <Router>
        <div>
          <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/login' component={Login} />
          </Layout>
        </div>
      </Router>
    );

}
