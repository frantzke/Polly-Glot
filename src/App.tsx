import { useState, ChangeEvent } from 'react';
import './App.css';

import Header from './components/Header';
import LanguageSelect from './components/LanguageSelect';

function App() {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('French');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: `Hi! I'm PollyGlot, a helpful assistant that translates text into French, Spanish, or Japanese. Send me a message and I'll translate it for you!`,
      language: 'en',
    },
    {
      role: 'user',
      content: `Test`,
    },
  ]);

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
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
      <Header />
      <main className='main'>
        <div className='content'>
          <div className='messages-box'>
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.role}`}>
                <p>{message.content}</p>
              </div>
            ))}
          </div>

          <div>
            <div className='input-box'>
              <textarea
                className='text-input'
                rows={2}
                onChange={handleTextChange}
                maxLength={200}
                value={text}
              />
            </div>
            <div className='actions-box'>
              <LanguageSelect language={language} setLanguage={setLanguage} />
              <button onClick={onTranslate}>
                <img className='floating-send-btn' src='/assets/send-btn.png' alt='send button' />
                {isLoading && <i className='fa fa-spinner fa-spin'></i>}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
