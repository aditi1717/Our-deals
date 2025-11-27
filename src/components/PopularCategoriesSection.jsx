import { useNavigate } from 'react-router-dom'
import { dummyCategoriesData } from '../data/dummyCategories'
import './PopularCategoriesSection.css'

function PopularCategoriesSection() {
  const navigate = useNavigate()
  
  // Get only popular categories (isPopular: true)
  const popularCategories = dummyCategoriesData.filter(category => category.isPopular)

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${encodeURIComponent(categoryName)}`)
  }

  return (
    <div className="popular-categories-section">
      <h2 className="popular-categories-heading">Popular Categories</h2>
      <div className="popular-categories-container">
        {popularCategories.map((category, index) => (
          <div 
            key={index} 
            className="popular-category-card" 
            onClick={() => handleCategoryClick(category.categoryName)}
          >
            <div className="popular-category-header">
              <span className="popular-category-title">{category.categoryName}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="popular-category-arrow">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="popular-category-image-wrapper">
              <img
                src={category.image}
                alt={category.categoryName}
                className="popular-category-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularCategoriesSection

