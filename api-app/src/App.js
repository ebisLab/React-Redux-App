import React from 'react';
import logo from './logo.svg';
import './App.css';
import WebCamList from './components/WebcamList'
import {connect} from 'react-redux'


function App() {

  return (
    <div className="App">
      <WebCamList />
    </div>
  );
}



export default (App);
