import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const location = useLocation()
  
    const pathMatchRoute = (route) => {
      if (route === location.pathname) {
        return true
      }
    }
  
    return (
      <header className='navbar'>
        <nav className='navbarNav'>
          <ul className='navbarListItems'>
            <li className='navbarListItem' onClick={() => navigate('/')}>
              <p
                className={
                  pathMatchRoute('/')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
              >
                Home
              </p>
            </li>
            <li className='navbarListItem' onClick={() => navigate('/feedback')}>
              <p
                className={
                  pathMatchRoute('/feedback')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
              >
                Feedback
              </p>
            </li>
            <li className='navbarListItem' onClick={() => navigate('/contact')}>
              <p
                className={
                  pathMatchRoute('/contact')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
              >
                Contact
              </p>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header
