import { useState, useEffect, useRef } from 'react'
import './LanguageSelector.css'

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'EN', name: 'English' })
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const languageDropdownRef = useRef(null)

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'HI', name: 'हिंदी' },
    { code: 'MR', name: 'मराठी' },
    { code: 'BN', name: 'বেঙ্গলি' },
    { code: 'GU', name: 'ગુજરાતી' },
    { code: 'KN', name: 'ಕನ್ನಡ' },
    { code: 'TA', name: 'தமிழ்' },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageDropdownOpen])

  return (
    <div className="language-selector-wrapper" ref={languageDropdownRef}>
      <button 
        className="language-selector-btn"
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
      >
        <span className="language-icon">💬</span>
        <span className="language-code">{selectedLanguage.code}</span>
        <span className="dropdown-arrow">▼</span>
      </button>
      {isLanguageDropdownOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${selectedLanguage.code === lang.code ? 'active' : ''}`}
              onClick={() => {
                setSelectedLanguage(lang)
                setIsLanguageDropdownOpen(false)
              }}
            >
              {lang.name} - {lang.code}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
