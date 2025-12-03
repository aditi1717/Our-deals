import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdNotifications } from 'react-icons/io'
import LoginModal from './LoginModal'
import DownloadApp from './DownloadApp'
import LanguageSelector from './LanguageSelector'

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
      <header className="fixed top-0 left-0 right-0 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] py-1.5 z-[1000] w-full md:py-3">
        <div className="max-w-[1400px] mx-auto px-6 md:px-4 relative">
          <div className="flex justify-between items-center min-h-[44px] md:min-h-[50px]">
            {/* Left side - Logo Text (Desktop only) */}
            <div className="hidden md:flex items-center justify-start cursor-pointer transition-opacity hover:opacity-80 h-full" onClick={() => navigate('/')}>
              <span className="text-[clamp(20px,2.5vw,28px)] md:text-[clamp(24px,3vw,32px)] font-bold text-[#13335a]">Ourdeals</span>
            </div>
            
            {/* Mobile - Location Selector and Bell Icon */}
            <div className="flex md:hidden items-center justify-between w-full">
              {/* Location Selector */}
              <button 
                className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer"
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E10129]">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
                <span className="text-sm text-gray-700 font-bold">Select location</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {/* Bell Icon */}
              <button className="p-2 bg-transparent border border-gray-300 rounded-full cursor-pointer relative">
                <IoMdNotifications className="text-gray-600 text-2xl" />
              </button>
            </div>
              
            {/* Right side - Language Selector, Free Listing, Login, Desktop: Call Enquiry, More, Profile Icon */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Desktop - Language Selector, Free Listing, Call Enquiry, More, Login */}
              <div className="hidden md:flex items-center gap-3">
                {/* Language Selector */}
                <LanguageSelector />
                
                {/* Free Listing Link */}
                <a 
                  href="/agent-registration" 
                  className="relative flex items-center gap-1.5 no-underline hover:opacity-80 transition-opacity cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/agent-registration')
                  }}
                >
                  <span className="absolute -top-4 left-2 bg-[#E10129] text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase whitespace-nowrap">BUSINESS</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                    <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-500 text-sm font-medium">Free Listing</span>
                </a>
                
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
                
                {/* Login/Sign Up Button - Right Side */}
                <button 
                  className="bg-[#13335a] text-white border-none py-2 px-4 rounded-lg font-medium text-sm cursor-pointer transition-colors hover:bg-[#1e4a7a] whitespace-nowrap ml-auto" 
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Login / Sign Up
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
