import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginModal from './LoginModal'
import logo from '../assets/logo.png'
import './Header.css'

function Header() {
  const navigate = useNavigate()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [userData, setUserData] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState('')
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false)

  // Load user data and location from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('userData')
    if (savedUser) {
      setUserData(JSON.parse(savedUser))
    }
    const savedLocation = localStorage.getItem('selectedLocation')
    if (savedLocation) {
      setSelectedLocation(savedLocation)
    }
  }, [])

  const handleLoginSuccess = (data) => {
    setUserData(data)
    localStorage.setItem('userData', JSON.stringify(data))
    setIsLoginModalOpen(false)
  }

  const handleLogout = () => {
    setUserData(null)
    localStorage.removeItem('userData')
    navigate('/')
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo-section desktop-only" onClick={() => navigate('/')}>
            <img src={logo} alt="Our Deals Logo" className="header-logo" />
          </div>
          <div className="header-right">
            <div className="location-input-mobile-wrapper mobile-only">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="location-pin-icon-mobile">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#E10129"/>
              </svg>
              <span className="location-text-mobile">Select location</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdown-chevron-mobile">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <button className="bell-icon-mobile mobile-only" aria-label="Notifications">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="desktop-only header-actions">
              {userData ? (
                <>
                  <button className="header-action-btn" onClick={() => navigate('/call-enquiry')}>Call Enquiry</button>
                  <button className="header-action-btn" onClick={() => navigate('/more')}>More</button>
                  <button className="profile-icon-btn" onClick={() => navigate('/profile')} aria-label="Profile">
                    <div className="profile-icon">
                      <span className="profile-icon-initial">{userData.name ? userData.name.charAt(0).toUpperCase() : 'U'}</span>
                    </div>
                  </button>
                </>
              ) : (
                <>
                  <button className="header-action-btn" onClick={() => navigate('/call-enquiry')}>Call Enquiry</button>
                  <button className="header-action-btn" onClick={() => navigate('/more')}>More</button>
                  <button className="login-btn" onClick={() => setIsLoginModalOpen(true)}>Login / Sign Up</button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  )
}

export default Header
