import { useState } from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"

import './App.css';

function App() {

  return (
    <>
     <Helmet>
        <title>Login - Highway.so</title>
        <meta name="description" content="Free Web tutorials"/>
        <meta name="keywords" content="HTML, CSS, JavaScript"/>
      </Helmet>
    </>
  );
}

export default App;
