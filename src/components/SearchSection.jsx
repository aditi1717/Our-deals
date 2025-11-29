import { useState, useRef, useEffect } from 'react'
import DownloadApp from './DownloadApp'

function SearchSection() {
  const [location, setLocation] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)
  const searchInputRef = useRef(null)
  const dropdownRef = useRef(null)

  const placeholderOptions = ['Spa & Salons', 'Doctor', 'Restaurants', 'Hotels', 'Beauty Spa', 'Home Decor']

  const recentSearches = [
    { text: 'Lunch Foodie', type: 'Category' },
    { text: 'Parlour For Ladies', type: 'Category' }
  ]

  const trendingSearches = [
    'Real Estate Agents',
    'Banquet Halls',
    'Dentists',
    'Car Rental',
    'Gynaecologist & Obstetrician Doctors',
    'Estate Agents For Residential Rental'
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setIsSearchFocused(false)
      }
    }

    if (isSearchFocused) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSearchFocused])

  useEffect(() => {
    if (!searchQuery && !isSearchFocused) {
      const interval = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholderOptions.length)
      }, 3000) // Change every 3 seconds

      return () => clearInterval(interval)
    }
  }, [searchQuery, isSearchFocused, placeholderOptions.length])

  const handleSearchClick = (text) => {
    setSearchQuery(text)
    setIsSearchFocused(false)
  }

  const clearRecentSearches = () => {
    // Handle clear recent searches
  }

  return (
    <div className="bg-transparent px-4 pt-4 mt-[clamp(8px,3vw,16px)] mb-8 md:mb-6 md:px-4 md:pt-[clamp(16px,2vw,24px)] md:mt-0">
      <div className="relative w-full max-w-full m-0">
        <div className="flex gap-4 md:flex-row md:gap-[clamp(20px,3vw,32px)] relative">
          <div className="hidden md:flex flex-row items-center bg-[#F7F8FC] border-2 border-gray-200 rounded-lg py-[clamp(10px,1.2vw,12px)] px-[clamp(12px,1.5vw,16px)] flex-[0_0_auto] max-w-[clamp(150px,18vw,200px)] min-w-[clamp(130px,16vw,180px)] whitespace-nowrap overflow-hidden">
            <span className="mr-2 inline-flex items-center justify-center text-[#E10129] flex-shrink-0 align-middle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
              </svg>
            </span>
            <input
              type="text"
              className="bg-transparent border-none outline-none flex-1 text-black text-[clamp(14px,1.6vw,16px)] text-left min-w-0 whitespace-nowrap overflow-hidden text-ellipsis placeholder:text-[#6B6D70]"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Mumbai"
            />
          </div>
          <div className="flex items-center bg-[#F7F8FC] border-2 md:border border-gray-200 rounded-lg py-3 px-3 md:py-[clamp(12px,1.5vw,16px)] md:px-[clamp(12px,1.5vw,16px)] flex-1 relative z-[100] gap-0 md:gap-[clamp(6px,0.8vw,8px)]" ref={dropdownRef}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex items-center justify-center text-gray-500 flex-shrink-0 w-5 h-5 md:mr-2">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="relative flex-1 flex items-center md:mr-0 md:pr-0">
              {!searchQuery && (
                <span className="absolute left-0 pointer-events-none text-sm md:text-[clamp(14px,1.6vw,16px)] whitespace-nowrap">
                  <span className="text-[#494B4E]">Search for </span>
                  <span className="text-[#B0B2B5]">{placeholderOptions[currentPlaceholder]}</span>
                </span>
              )}
              <input
                ref={searchInputRef}
                type="text"
                className="bg-transparent border-none outline-none flex-1 text-black text-sm md:text-[clamp(14px,1.6vw,16px)] p-0 w-full placeholder:text-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder=""
              />
            </div>
            <div className="w-px h-5 bg-gray-200 flex-shrink-0 m-0"></div>
            <button className="static bg-none border-none cursor-pointer p-0 m-0 flex items-center justify-center text-[#11345A] transition-colors flex-shrink-0 hover:text-[#13335a]" aria-label="Voice search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z" fill="currentColor"/>
                <path d="M19 10V12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12V10H3V12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12V10H19Z" fill="currentColor"/>
                <path d="M11 22H13V24H11V22Z" fill="currentColor"/>
              </svg>
            </button>
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.15)] mt-1 max-h-[500px] overflow-y-auto z-[1000]">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">RECENT SEARCHES</span>
                    <button className="bg-none border-none text-[#13335a] text-xs font-semibold cursor-pointer p-0 transition-colors hover:text-[#0f2440]" onClick={clearRecentSearches}>Clear All</button>
                  </div>
                  <div className="flex flex-col gap-1">
                    {recentSearches.map((search, index) => (
                      <div key={index} className="flex items-center gap-3 p-[10px_12px] rounded-md cursor-pointer transition-colors hover:bg-gray-50" onClick={() => handleSearchClick(search.text)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500 flex-shrink-0">
                          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className="flex flex-col flex-1">
                          <span className="text-sm font-medium text-[#1a1a1a] mb-0.5">{search.text}</span>
                          <span className="text-xs text-gray-400">{search.type}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">TRENDING SEARCHES</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {trendingSearches.map((search, index) => (
                      <div key={index} className="flex items-center gap-3 p-[10px_12px] rounded-md cursor-pointer transition-colors hover:bg-gray-50" onClick={() => handleSearchClick(search)}>
                        <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center flex-shrink-0 text-gray-500">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="flex flex-col flex-1">
                          <span className="text-sm font-medium text-[#1a1a1a] mb-0.5">{search}</span>
                          <span className="text-xs text-gray-400">Category</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Download App Button - Below Search Bar, Right Side (Desktop Only) */}
        <div className="hidden md:flex justify-end mt-2">
          <DownloadApp isMobile={false} />
        </div>
      </div>
    </div>
  )
}

export default SearchSection
