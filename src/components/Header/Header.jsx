import React from 'react'
import './Header.css'
// import { BitMenuAlRight }  from 'react-icons/bi';

const Header = () => {
  // const [menuOpened, setMenuOpened]=useState(false);
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>
            <img src='./logo.png' alt='logo' width={100}/>

            <div className='flexCenter h-menu'>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Services</a>
                <button className='button'>
                <a href="">Contact Us</a>
                </button>
            </div>
        
        </div>
        {/* <div className="menu-icon">
          <BitMenuAlRight size={30}/>
        </div> */}
    </section>
  )
}

export default Header