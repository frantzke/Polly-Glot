import { ChangeEventHandler } from "react";

function LanguageSelect(props: { language: string; handleLanguageChange: ChangeEventHandler<HTMLInputElement>; }) {

    const { language, handleLanguageChange } = props;
    
    return (
        <div className='language-box'>
            <div className='language-option'>
              <input
                className='radio-btn'
                type='radio'
                id='French'
                name='French'
                value='French'
                checked={language === 'French'}
                onChange={handleLanguageChange}
              />
              <label htmlFor='French'>French</label>
              <img className='flag-img' src='/src/assets/fr-flag.png' alt='france' />
            </div>
            <div className='language-option'>
              <input
                className='radio-btn'
                type='radio'
                id='Spanish'
                name='Spanish'
                value='Spanish'
                checked={language === 'Spanish'}
                onChange={handleLanguageChange}
              />
              <label htmlFor='Spanish'>Spanish</label>
              <img className='flag-img' src='/src/assets/sp-flag.png' alt='france' />
            </div>
            <div className='language-option'>
              <input
                className='radio-btn'
                type='radio'
                id='Japanese'
                name='Japanese'
                value='Japanese'
                checked={language === 'Japanese'}
                onChange={handleLanguageChange}
              />
              <label htmlFor='Japanese'>Japanese</label>
              <img className='flag-img' src='/src/assets/jpn-flag.png' alt='france' />
            </div>
          </div>
    )
}

export default LanguageSelect;