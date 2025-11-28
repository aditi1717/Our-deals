import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyCategoriesData } from '../data/dummyCategories'
import banner7 from '../assets/banner 7.jpg'
import banner8 from '../assets/banner 8.webp'
import './BannerWithCategories.css'

function BannerWithCategories() {
  const navigate = useNavigate()
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)

  const banners = [banner7, banner8]

  // Get Wedding Requisites and Explore City categories
  const weddingRequisites = dummyCategoriesData.find(
    cat => cat.categoryName === 'Wedding Requisites'
  )
  const exploreCity = dummyCategoriesData.find(
    cat => cat.categoryName === 'Explore City'
  )

  useEffect(() => {
    // Set first banner as active immediately
    if (banners.length > 0) {
      setCurrentBannerIndex(0)
    }
    
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % banners.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [banners.length])

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${encodeURIComponent(categoryName)}`)
  }

  return (
    <div className="banner-with-categories-section">
      {/* Banner */}
      <div className="banner-image-container">
        <div className="banner-carousel-wrapper">
          {banners.map((banner, index) => (
            <img
              key={index}
              src={banner}
              alt={`Banner ${index + 1}`}
              className={`banner-image ${index === currentBannerIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="banner-dots">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`banner-dot ${index === currentBannerIndex ? 'active' : ''}`}
              onClick={() => setCurrentBannerIndex(index)}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Category Boxes */}
      <div className="category-boxes-container">
        {weddingRequisites && (
          <div 
            className="category-box"
            onClick={() => handleCategoryClick(weddingRequisites.categoryName)}
          >
            <div className="category-box-header">
              <div className="category-box-content">
                <h3 className="category-box-title">{weddingRequisites.categoryName}</h3>
                <p className="category-box-subtitle">Quick Quotes</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="category-box-arrow">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="category-box-image-wrapper">
              <img 
                src={weddingRequisites.image} 
                alt={weddingRequisites.categoryName}
                className="category-box-image"
              />
            </div>
          </div>
        )}

        {exploreCity && (
          <div 
            className="category-box"
            onClick={() => handleCategoryClick(exploreCity.categoryName)}
          >
            <div className="category-box-header">
              <div className="category-box-content">
                <h3 className="category-box-title">{exploreCity.categoryName}</h3>
                <p className="category-box-subtitle">Get Nearest Vendor</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="category-box-arrow">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="category-box-image-wrapper">
              <img 
                src={exploreCity.image} 
                alt={exploreCity.categoryName}
                className="category-box-image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BannerWithCategories

