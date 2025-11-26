import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'
import LoginModal from './LoginModal'
import './Header.css'

function Header() {
  const navigate = useNavigate()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [userData, setUserData] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState('Select location')
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
          <div className="logo-section desktop-only">
            <h1 className="app-logo">
              <span className="logo-our">Our</span>
              <span className="logo-deals"> Deals</span>
            </h1>
          </div>
          <div className="location-selector mobile-only" onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="location-pin-icon">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#dc2626"/>
            </svg>
            <input
              type="text"
              className="location-input-mobile"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              onClick={(e) => {
                e.stopPropagation()
                setIsLocationDropdownOpen(true)
              }}
              onBlur={() => {
                setTimeout(() => setIsLocationDropdownOpen(false), 200)
              }}
              placeholder="Select location"
            />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdown-chevron">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {isLocationDropdownOpen && (
              <div className="location-dropdown">
                <div className="location-option" onClick={() => {
                  setSelectedLocation('Mumbai')
                  localStorage.setItem('selectedLocation', 'Mumbai')
                  setIsLocationDropdownOpen(false)
                }}>Mumbai</div>
                <div className="location-option" onClick={() => {
                  setSelectedLocation('Delhi')
                  localStorage.setItem('selectedLocation', 'Delhi')
                  setIsLocationDropdownOpen(false)
                }}>Delhi</div>
                <div className="location-option" onClick={() => {
                  setSelectedLocation('Bangalore')
                  localStorage.setItem('selectedLocation', 'Bangalore')
                  setIsLocationDropdownOpen(false)
                }}>Bangalore</div>
                <div className="location-option" onClick={() => {
                  setSelectedLocation('Hyderabad')
                  localStorage.setItem('selectedLocation', 'Hyderabad')
                  setIsLocationDropdownOpen(false)
                }}>Hyderabad</div>
                <div className="location-option" onClick={() => {
                  setSelectedLocation('Chennai')
                  localStorage.setItem('selectedLocation', 'Chennai')
                  setIsLocationDropdownOpen(false)
                }}>Chennai</div>
              </div>
            )}
          </div>
          <div className="header-right">
            <div className="desktop-only">
              <LanguageSelector />
            </div>
            <button className="bell-icon" aria-label="Notifications">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8A6 6 0 0 0 6 8C6 11.3137 4 14 4 14H20C20 14 18 11.3137 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="desktop-only">
              {userData ? (
                <button className="profile-icon-btn" onClick={() => navigate('/profile')} aria-label="Profile">
                  <div className="profile-icon">
                    <span className="profile-icon-initial">{userData.name ? userData.name.charAt(0).toUpperCase() : 'U'}</span>
                  </div>
                </button>
              ) : (
                <button className="login-btn" onClick={() => setIsLoginModalOpen(true)}>Login / Sign Up</button>
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
