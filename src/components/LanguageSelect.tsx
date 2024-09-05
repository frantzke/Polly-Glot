import { Dispatch, SetStateAction } from 'react';
import './LanguageSelect.css';

function LanguageSelect(props: {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}) {
  const { language, setLanguage } = props;

  return (
    <div className='language-box'>
      <button
        className={`language-option ${language === 'French' ? 'selected' : ''}`}
        onClick={() => setLanguage('French')}
      >
        <img className='flag-img' src='/assets/fr-flag.png' alt='french flag' />
      </button>
      <button
        className={`language-option ${language === 'Spanish' ? 'selected' : ''}`}
        onClick={() => setLanguage('Spanish')}
      >
        <img className='flag-img' src='/assets/sp-flag.png' alt='spanish flag' />
      </button>
      <button
        className={`language-option ${language === 'Japanese' ? 'selected' : ''}`}
        onClick={() => setLanguage('Japanese')}
      >
        <img className='flag-img' src='/assets/jpn-flag.png' alt='japan flag' />
      </button>
    </div>
  );
}

export default LanguageSelect;
