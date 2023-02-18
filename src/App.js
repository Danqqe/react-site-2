import { useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import Header from './components/Header/Header';
import './App.css';
import Main from './components/Main/Carousel';
import Group from './components/footer/Group'

function App() {

    return <div>
      <Header />
      <Main />
      <Group />
    </div>
  }

export default App