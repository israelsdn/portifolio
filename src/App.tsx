import Modal from 'react-modal'
import { LoginDashboard } from './components/LoginDashboard';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useState } from 'react';

Modal.setAppElement('#root')

export function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function openLoginModal(){setIsLoginModalOpen(true)};

  function closeLoginModal(){setIsLoginModalOpen(false)};
      
  return (
    <>
      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        overlayClassName='react-modal-overlay'
        className='h-auto w-auto'>
          <LoginDashboard/>
      </Modal>
      
      <header>
        <Header onOpenLoginModal={openLoginModal}/>
      </header>

      <main className='h-screen'>

      </main>

      <footer>
        <Footer/>
      </footer>
      

    </>
  );
}