import React from 'react'
import './App.css';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}