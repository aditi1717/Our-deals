import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EditProfileModal from '../components/EditProfileModal'
import LoginModal from '../components/LoginModal'
import './ProfilePage.css'

function ProfilePage({ editMode }) {
  const navigate = useNavigate()
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const [showEditProfile, setShowEditProfile] = useState(editMode || false)
  const [userData, setUserData] = useState(null)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  // Load user data from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('userData')
    if (savedUser) {
      setUserData(JSON.parse(savedUser))
    } else {
      // If no user data, show login modal
      setIsLoginModalOpen(true)
    }
  }, [])

  const handleLogout = () => {
    setUserData(null)
    localStorage.removeItem('userData')
    navigate('/')
  }

  const handleProfileUpdate = (updatedData) => {
    setUserData(updatedData)
    localStorage.setItem('userData', JSON.stringify(updatedData))
    setShowEditProfile(false)
  }

  const handleLoginSuccess = (data) => {
    setUserData(data)
    localStorage.setItem('userData', JSON.stringify(data))
    setIsLoginModalOpen(false)
  }

  // If user is not logged in, show login modal instead of profile
  useEffect(() => {
    if (!userData) {
      setIsLoginModalOpen(true)
    }
  }, [userData])

  if (!userData) {
    return (
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => {
          setIsLoginModalOpen(false)
          navigate('/') // Go back to home if login is cancelled
        }}
        onLoginSuccess={handleLoginSuccess}
      />
    )
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2 className="profile-header-title">Profile</h2>
        <button className="close-profile-btn" onClick={() => navigate('/')}>×</button>
      </div>

        <div className="profile-content">
          {/* User Profile Section */}
          <div className="user-profile-section">
            <div className="profile-picture">
              <span className="profile-initial">{userData?.name ? userData.name.charAt(0).toUpperCase() : 'U'}</span>
            </div>
            <div className="user-details">
              <h3 className="username">{userData?.name || 'User_1822'}</h3>
              <p className="user-phone">+91 {userData?.mobileNumber || '8236021822'}</p>
            </div>
            <button className="edit-profile-btn" onClick={() => setShowEditProfile(true)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.50023C18.8978 2.10243 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.10243 21.5 2.50023C21.8978 2.89804 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.10243 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <span>Rate Us</span>
            </button>
            <button className="action-btn" onClick={() => navigate('/contact-us')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
              </svg>
              <span>Help</span>
            </button>
          </div>

          {/* Add Your Business */}
          <div className="business-card">
            <span>Add Your Business</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* App and User Setting */}
          <div className="settings-section">
            <h4 className="section-title">App and User Setting</h4>
            <div className="language-buttons">
              <button 
                className={`language-btn ${selectedLanguage === 'English' ? 'active' : ''}`}
                onClick={() => setSelectedLanguage('English')}
              >
                English
              </button>
              <button 
                className={`language-btn ${selectedLanguage === 'हिंदी' ? 'active' : ''}`}
                onClick={() => setSelectedLanguage('हिंदी')}
              >
                हिंदी
              </button>
            </div>
          </div>

          {/* More Section */}
          <div className="more-section">
            <h4 className="section-title">More</h4>
            <div className="more-options">
              <div className="more-option">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 16C16.9 16 16 16.9 16 18C16 19.1 16.9 20 18 20C19.1 20 20 19.1 20 18C20 16.9 19.1 16 18 16ZM18 20C17.4 20 17 19.6 17 19C17 18.4 17.4 18 18 18C18.6 18 19 18.4 19 19C19 19.6 18.6 20 18 20Z" fill="currentColor"/>
                  <path d="M6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM6 20C5.4 20 5 19.6 5 19C5 18.4 5.4 18 6 18C6.6 18 7 18.4 7 19C7 19.6 6.6 20 6 20Z" fill="currentColor"/>
                  <path d="M18 4C16.9 4 16 4.9 16 6C16 7.1 16.9 8 18 8C19.1 8 20 7.1 20 6C20 4.9 19.1 4 18 4ZM18 8C17.4 8 17 7.6 17 7C17 6.4 17.4 6 18 6C18.6 6 19 6.4 19 7C19 7.6 18.6 8 18 8Z" fill="currentColor"/>
                  <path d="M6 4C4.9 4 4 4.9 4 6C4 7.1 4.9 8 6 8C7.1 8 8 7.1 8 6C8 4.9 7.1 4 6 4ZM6 8C5.4 8 5 7.6 5 7C5 6.4 5.4 6 6 6C6.6 6 7 6.4 7 7C7 7.6 6.6 8 6 8Z" fill="currentColor"/>
                  <path d="M18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM18 14C17.4 14 17 13.6 17 13C17 12.4 17.4 12 18 12C18.6 12 19 12.4 19 13C19 13.6 18.6 14 18 14Z" fill="currentColor"/>
                  <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM6 14C5.4 14 5 13.6 5 13C5 12.4 5.4 12 6 12C6.6 12 7 12.4 7 13C7 13.6 6.6 14 6 14Z" fill="currentColor"/>
                </svg>
                <span>Share App</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="more-option" onClick={() => navigate('/privacy-policy')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Privacy Policy</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="more-option">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>About Us</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="more-option" onClick={() => navigate('/contact-us')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Contact Us</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="more-option desktop-only" onClick={() => navigate('/agent-registration')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Are you an agent</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="more-option desktop-only" onClick={() => {
                const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.ourdeals.app'
                window.open(playStoreUrl, '_blank')
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Grow your business with us</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div 
                className="more-option logout-option" 
                onClick={handleLogout}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Logout</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      {showEditProfile && (
        <EditProfileModal
          isOpen={showEditProfile}
          onClose={() => {
            setShowEditProfile(false)
            if (editMode) {
              navigate('/profile')
            }
          }}
          userData={userData}
          onUpdate={handleProfileUpdate}
        />
      )}
    </div>
  )
}

export default ProfilePage

