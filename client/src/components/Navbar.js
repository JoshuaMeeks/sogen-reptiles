import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = ({ data, cart, setAvailablility }) => {
  const [mobileNavMenu, setMobileNavMenu] = useState(false)

  const toggleNavModal = () => {
    setMobileNavMenu(mobileNavMenu => !mobileNavMenu);
  }

  return (
    <header className="header">
      <nav>
        <Link to="/">
          <div className="logo">
            <img src='./resources/logo.png' alt='SoGen Reptiles'></img>
            <span className='full-text'>
              Southern<br/>
              Genetics
            </span>
            <span className='short-text'>
              So<br/>
              Gen
            </span>
          </div>
        </Link>
        <ul className='links'>
          <Link to="/available"><li onClick={() => setAvailablility(data)}>available</li></Link>
          <Link to="/termsconditions"><li>terms & conditions</li></Link>
          <Link to="/contact"><li>contact</li></Link>
          <Link to="/cart">cart<sup>{cart.length === 0 ? '' : cart.length}</sup></Link>
        </ul>
        <ul className='mobile-links'>
          <svg onClick={() => toggleNavModal()} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          {mobileNavMenu ? 
            <div className='mobile-nav-menu'>
              <ul>
                <Link to="/available"><li onClick={() => {setAvailablility(data);{toggleNavModal()}}}>available</li></Link>
                <Link to="/termsconditions"><li onClick={() => toggleNavModal()}>terms and conditions</li></Link>
                <Link to="/contact"><li onClick={() => toggleNavModal()}>contact</li></Link>
              </ul>
            </div> :
            ''
          }
          <Link to="/cart" className='mobile-cart'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
            </svg>
          </Link> 
        </ul>
      </nav>
    </header>
  )
  
}
