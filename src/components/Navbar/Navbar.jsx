import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import {HiMenu, HiSearch, HiOutlineX, HiUser} from 'react-icons/hi';

import './Navbar.scss'

const Navbar = () => {

  const [toggle,
    setToggle] = useState(false);

  const [navbar, setNavbar] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 1000) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeNavBackground);

  return (
    <nav className={navbar ? 'app__navbar active' : 'app__navbar'}>
      <div className="app__navbar-logo">
        <h3>Movie Database</h3>
      </div>

      <ul className="app__navbar-links">


      <motion.div whileHover={{
            scale: 1.2
          }}><HiSearch /></motion.div>

       <motion.div whileHover={{
            scale: 1.2
          }}><HiUser /></motion.div>


      </ul>

      <div className="app__navbar-menu">

        <HiMenu onClick={() => setToggle(true)}/>
        <AnimatePresence>
          {toggle && (
            <motion.aside
              initial={{
              width: 0
            }}
              animate={{
              width: 300
            }}
              exit={{
              width: 0,
              transition: {
                delay: 0.7,
                duration: 0.3
              }
            }}>

              <HiOutlineX onClick={() => setToggle(false)}/>

              <ul>

                {['Search', 'Login'].map((item) => (
                  <li key={item}>

                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>

                  </li>
                ))}

              </ul>

            </motion.aside>
          )}
        </AnimatePresence>
      </div>

    </nav>
  )
}

export default Navbar