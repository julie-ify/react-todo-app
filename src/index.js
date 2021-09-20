import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './functionBased/App.css';
import TodoContainer from './functionBased/components/TodoContainer';

ReactDom.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
