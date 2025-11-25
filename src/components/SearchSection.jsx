import { useState, useRef, useEffect } from 'react'
import './SearchSection.css'

function SearchSection() {
  const [location, setLocation] = useState('Mumbai')
  const [searchQuery, setSearchQuery] = useState('Search for Spa & Salons')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const searchInputRef = useRef(null)
  const dropdownRef = useRef(null)

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

  const handleSearchClick = (text) => {
    setSearchQuery(text)
    setIsSearchFocused(false)
  }

  const clearRecentSearches = () => {
    // Handle clear recent searches
  }

  return (
    <div className="search-section">
      <h2 className="search-title">
        Search across <span className="search-highlight">'4.9 Crore+'</span> Businesses
      </h2>
      <div className="search-container-wrapper">
        <div className="search-container">
          <div className="location-input-wrapper">
            <span className="location-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
              </svg>
            </span>
            <input
              type="text"
              className="location-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />
          </div>
          <div className="search-input-wrapper" ref={dropdownRef}>
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search for Spa & Salons"
            />
            <button className="mic-icon" aria-label="Voice search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z" fill="currentColor"/>
                <path d="M19 10V12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12V10H3V12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12V10H19Z" fill="currentColor"/>
                <path d="M11 22H13V24H11V22Z" fill="currentColor"/>
              </svg>
            </button>
            {isSearchFocused && (
              <div className="search-dropdown">
                <div className="recent-searches-section">
                  <div className="recent-searches-header">
                    <span className="section-label">RECENT SEARCHES</span>
                    <button className="clear-all-btn" onClick={clearRecentSearches}>Clear All</button>
                  </div>
                  <div className="search-suggestions">
                    {recentSearches.map((search, index) => (
                      <div key={index} className="search-suggestion-item" onClick={() => handleSearchClick(search.text)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="suggestion-icon">
                          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className="suggestion-content">
                          <span className="suggestion-text">{search.text}</span>
                          <span className="suggestion-type">{search.type}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="trending-searches-section">
                  <div className="trending-searches-header">
                    <span className="section-label">TRENDING SEARCHES</span>
                  </div>
                  <div className="search-suggestions">
                    {trendingSearches.map((search, index) => (
                      <div key={index} className="search-suggestion-item" onClick={() => handleSearchClick(search)}>
                        <div className="trending-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="suggestion-content">
                          <span className="suggestion-text">{search}</span>
                          <span className="suggestion-type">Category</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="search-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchSection
