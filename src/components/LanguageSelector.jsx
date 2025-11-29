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
        className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded bg-white cursor-pointer text-sm transition-colors text-gray-700 hover:border-[#13335a]"
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
      >
        <span className="text-base">💬</span>
        <span className="font-medium">{selectedLanguage.code}</span>
        <span className="text-[10px] text-gray-500 ml-1">▼</span>
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
