import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginModal from './LoginModal'
import DownloadApp from './DownloadApp'
import logo from '../assets/logo.png'

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
      <header className="fixed top-0 left-0 right-0 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] py-2.5 z-[1000] w-full md:py-3">
        <div className="max-w-[1280px] mx-auto px-6 md:px-4 relative">
          <div className="flex justify-between items-center min-h-[56px] md:min-h-[50px]">
            {/* Left side - Logo */}
            <div className="flex items-center justify-start cursor-pointer transition-opacity hover:opacity-80 h-full" onClick={() => navigate('/')}>
              <img src={logo} alt="Our Deals Logo" className="h-[clamp(34px,4vw,48px)] w-auto object-contain block align-middle md:h-[clamp(50px,6vw,70px)] lg:h-[clamp(60px,4vw,90px)]" />
            </div>
            
            {/* Right side - Mobile: Download App, Desktop: Call Enquiry, More, Profile Icon */}
            <div className="flex items-center">
              {/* Mobile - Download App */}
              <div className="md:hidden">
              <DownloadApp isMobile={true} />
            </div>
              
              {/* Desktop - Call Enquiry, More, Profile Icon */}
              <div className="hidden md:flex items-center gap-3">
                <button 
                  className="bg-transparent text-gray-500 border-none py-2.5 px-4 rounded-lg font-medium text-sm cursor-pointer transition-colors hover:text-gray-700" 
                  onClick={() => navigate('/call-enquiry')}
                >
                  Call Enquiry
                </button>
                <button 
                  className="bg-transparent text-gray-500 border-none py-2.5 px-4 rounded-lg font-medium text-sm cursor-pointer transition-colors hover:text-gray-700" 
                  onClick={() => navigate('/more')}
                >
                  More
                </button>
                <button 
                  className="bg-transparent border border-gray-300 rounded-full cursor-pointer p-0 flex items-center justify-center transition-transform hover:scale-105 w-10 h-10" 
                  onClick={() => userData ? navigate('/profile') : setIsLoginModalOpen(true)} 
                  aria-label="Profile"
                >
                  <div className="w-full h-full rounded-full bg-[#13335a] flex items-center justify-center">
                    <span className="text-white text-base font-bold">
                      {userData?.name ? userData.name.charAt(0).toUpperCase() : 'U'}
                    </span>
                    </div>
                  </button>
              </div>
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
