import React from 'react'
import './App.css';
import { Main } from './components/Main';
import { Header } from './components/Header';

export function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer></footer>
    </>
  );
}