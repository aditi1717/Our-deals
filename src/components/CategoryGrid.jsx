import { useNavigate } from 'react-router-dom'
import { categoriesData } from '../data/categories'
import './CategoryGrid.css'

function CategoryGrid() {
  const navigate = useNavigate()
  const mainCategories = categoriesData.slice(0, 11) // Changed from 12 to 11 to remove last one

  const handleCategoryClick = (categoryName) => {
    navigate(`/categories/${encodeURIComponent(categoryName)}`)
  }

  const handleSeeMore = () => {
    navigate('/categories')
  }

  return (
    <div className="category-section">
      <div className="category-grid">
        {mainCategories.map((category, index) => (
          <div key={index} className="category-item" onClick={() => handleCategoryClick(category.name)}>
            <div className="category-image-container">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
              <span className="category-explore">Explore</span>
            </div>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
        {/* More Option */}
        <div className="category-item more-category-item" onClick={handleSeeMore}>
          <div className="category-image-container more-icon-container">
            <div className="more-content">
              <span className="more-text">See More</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="more-arrow">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryGrid
