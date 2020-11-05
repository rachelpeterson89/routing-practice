import React from 'react';
import { Router } from '@reach/router';
import Welcome from './components/Welcome';
import Num from './components/Num';
import Word from './components/Word';
import Custom from './components/Custom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
        <Router>
            <Welcome path="/home"/>
            <Num path="/:id"/>
            <Word path="/:word"/>
            <Custom path="/hello/:bgColor/:txtColor"/>
        </Router>
    </div>
  );
}

export default App;