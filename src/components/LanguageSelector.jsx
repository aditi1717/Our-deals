import { useState, useEffect, useRef } from 'react'

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
    <div className="relative" ref={languageDropdownRef}>
      <button 
        className="flex items-center gap-1.5 px-2 py-1.5 border border-gray-200 rounded-md bg-white cursor-pointer text-sm transition-colors hover:border-gray-300"
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12H22M12 2C15 6 15 18 12 22C9 18 9 6 12 2" stroke="currentColor" strokeWidth="2"/>
        </svg>
        <span className="font-medium text-sm text-gray-500">{selectedLanguage.code}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {isLanguageDropdownOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-300 rounded shadow-[0_4px_12px_rgba(0,0,0,0.15)] min-w-[180px] z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`w-full px-4 py-3 border-none bg-white text-left cursor-pointer text-sm text-gray-700 transition-colors flex items-center hover:bg-gray-50 ${selectedLanguage.code === lang.code ? 'bg-[#e8f0f7] text-[#13335a] font-medium' : ''}`}
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
