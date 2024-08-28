import { useState, ChangeEvent } from 'react';
import './App.css';

import LanguageSelect from './components/LanguageSelect';

function App() {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('French');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleLanguageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  };

  const onTranslate = async () => {
    if (text === '') {
      setTranslatedText('Please enter some text to translate.');
      return;
    }
    try {
      const messages = [
        {
          role: 'system',
          content: `You are a helpful assistant that translates text into French, Spanish, or Japanese`,
        },
        { role: 'user', content: `Translate the following text into ${language}:\n${text}` },
      ];

      const url = 'https://openai-api-worker.lukasfrantzke.workers.dev/v1/completions';
      setIsLoading(true);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messages),
      });
      const data = await response.json();
      setIsLoading(false);
      const message = data.content;
      setTranslatedText(message || "Sorry, I couldn't translate that.");
    } catch (error: any) {
      console.error(error);
      setTranslatedText('Sorry, something went wrong.');
    }
  };

  const onReset = () => {
    setText('');
    setLanguage('French');
    setTranslatedText('');
  };

  return (
    <>
      <header className='hero-image'>
        <div className='hero-box'>
          <img className='parrot-img' src='/assets/parrot.png' alt='parrot' />
          <div>
            <h1 className='hero-text'>PollyGlot</h1>
            <h6 className='hero-subtitle'>Perfect Translation Every Time</h6>
          </div>
        </div>
      </header>
      <main className='main'>
        <div className='content'>
          <p>Text to translate 👇</p>
          <textarea
            rows={5}
            onChange={handleTextChange}
            maxLength={200}
            value={text}
            readOnly={translatedText !== ''}
          />

          {translatedText === '' && (
            <>
              <p>Select language 👇</p>
              <LanguageSelect language={language} handleLanguageChange={handleLanguageChange} />
            </>
          )}

          {translatedText && (
            <div>
              <p>Your translation 👇</p>
              <textarea rows={5} maxLength={200} readOnly={true} value={translatedText} />
            </div>
          )}

          {translatedText === '' && <button onClick={onTranslate}> {isLoading && <i className="fa fa-spinner fa-spin"></i>}Translate</button>}
          {translatedText && <button onClick={onReset}>Start Over</button>}
        </div>
      </main>
    </>
  );
}

export default App;
