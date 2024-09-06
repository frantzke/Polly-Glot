import { useState, useRef, useEffect, ChangeEvent } from 'react';
import './App.css';

import Header from './components/Header';
import LanguageSelect from './components/LanguageSelect';
import Typing from './components/Typing';

interface Message {
  role: string;
  content: string;
  language?: string;
}

function App() {
  const [text, setText] = useState<string>('');
  const [language, setLanguage] = useState<string>('French');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Array<Message>>([
    {
      role: 'system',
      content: `Hi! I'm PollyGlot, a language expert that translates text into French, Spanish, or Japanese. Send me a message and I'll translate it for you!`,
      language: 'en',
    },
  ]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setHasError(false);
    setText(event.target.value);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onTranslate = async () => {
    if (text === '') {
      setHasError(true);
      setError('Please enter some text to translate.');
      return;
    }
    try {
      const body = [
        {
          role: 'system',
          content: `You are a language expert that translates text into French, Spanish, or Japanese`,
        },
        { role: 'user', content: `Translate the following text into ${language}:\n${text}` },
      ];

      setMessages((oldMessages) => {
        return [...oldMessages, { role: 'user', content: text, language: language }];
      });
      setText('');
      setIsLoading(true);

      const url = 'https://openai-api-worker.lukasfrantzke.workers.dev/v1/completions';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      setIsLoading(false);
      const message = data.content;
      setMessages((oldMessages) => {
        return [...oldMessages, { role: 'system', content: message }];
      });
    } catch (error: any) {
      console.error(error);
      setHasError(true);
      setError(error.message || "Sorry, I couldn't translate that. Please try again.");
    }
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
            {isLoading && (
              <div className='message system'>
                <Typing />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className='bottom-box'>
            {hasError && (
              <div className='error'>
                <i
                  style={{ color: 'red' }}
                  className='fa fa-exclamation-triangle'
                  aria-hidden='true'
                ></i>
                <p>{error}</p>
              </div>
            )}
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
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
