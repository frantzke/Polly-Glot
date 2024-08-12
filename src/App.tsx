// import { useState } from 'react';
import './App.css';

function App() {

  return (
    <>
      <header className='hero-image'>
        <div className='hero-box'>
          <img className='parrot-img' src='/src/assets/parrot.png' alt='parrot' />
          <div>
            <h1 className='hero-text'>Polly Glot</h1>
            <h6 className='hero-subtitle'>Perfect Translation Every Time</h6>
          </div>
        </div>
      </header>
      <main className='main'>
        <div className='content'>

        <p>Text to translate 👇</p>
        <textarea id='textToTranslate' rows={5}></textarea>

        <p>Select language 👇</p>

          <div className='language-box'>
            <div className="language-option">
              <input className='radio-btn' type='radio' id='French' name='French' value='French' checked />
              <label htmlFor='French'>French</label>
              <img className="flag-img" src='/src/assets/fr-flag.png' alt='france' />
            </div>
            <div className="language-option">
              <input className='radio-btn' type='radio' id='Spanish' name='Spanish' value='Spanish' />
              <label htmlFor='Spanish'>Spanish</label>
              <img className="flag-img" src='/src/assets/sp-flag.png' alt='france' />
            </div>
            <div className="language-option">
              <input className='radio-btn' type='radio' id='Japanese' name='Japanese' value='Japanese' />
              <label htmlFor='Japanese'>Japanese</label>
              <img className="flag-img" src='/src/assets/jpn-flag.png' alt='france' />
            </div>

          </div>


        <button>Translate</button>
        </div>
      </main>
    </>
  );
}

export default App;
