import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'
import LoginModal from './LoginModal'
import './Header.css'

function Header() {
  const navigate = useNavigate()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [userData, setUserData] = useState(null)

  // Load user data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('userData')
    if (savedUser) {
      setUserData(JSON.parse(savedUser))
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
          <div className="logo-section">
            <h1 className="app-logo">
              <span className="logo-our">Our</span>
              <span className="logo-deals"> Deals</span>
            </h1>
          </div>
          <div className="header-right">
            <LanguageSelector />
            <button className="bell-icon" aria-label="Notifications">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8A6 6 0 0 0 6 8C6 11.3137 4 14 4 14H20C20 14 18 11.3137 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
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
