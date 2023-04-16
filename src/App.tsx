import React from 'react'
import './App.css';

export function App() {
  return (
    <>
      <div 
      className='h-screen bg-[#09090B]'>
        <main 
        className='h-screen flex justify-center items-center'>
          <div 
          className='grid bg-white rounded-3xl'>
            <h1 
            className='max-sm:text-xl max-lg:text-2xl text-3xl font-bold text-center text-gray-800 mt-8 mb-10'>
              LOGIN
            </h1>

            <input  
            placeholder='Username' 
            type="text"
            className='text-input-login mx-16 mb-5'/>

            <input  
            placeholder='Password' 
            type="password"
            className='text-input-login mx-16 mb-12 '/>
            
            <button 
            className='max-sm:text-sm max-lg:text-base text-lg bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded
             mx-5 mb-3'>
              SIGN-IN
            </button>

            <p 
            className='max-sm:text-xs max-lg:text-sm text-base text-[#09090B] ml-5 mb-12'>
              Don't have login? <a href='https://google.com'>Click here.</a>
            </p>

          </div>
        </main>
      </div>
    </>
  );
}