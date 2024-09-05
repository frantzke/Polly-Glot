import './Header.css';

function Header() {
  return (
    <header className='hero-image'>
      <div className='hero-box'>
        <img className='parrot-img' src='/assets/parrot.png' alt='parrot' />
        <div>
          <h1 className='hero-text'>PollyGlot</h1>
          <h6 className='hero-subtitle'>Perfect Translation Every Time</h6>
        </div>
      </div>
    </header>
  );
}

export default Header;
