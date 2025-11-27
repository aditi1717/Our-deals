import { useNavigate } from 'react-router-dom'
import './CategorySection.css'

function CategorySection({ category }) {
  const navigate = useNavigate()

  const handleSubcategoryClick = (subcategoryName) => {
    navigate(`/vendors/${encodeURIComponent(subcategoryName)}`)
  }

  const handleCategoryClick = () => {
    navigate(`/categories/${encodeURIComponent(category.categoryName)}`)
  }

  if (!category || !category.subCategories || category.subCategories.length === 0) {
    return null
  }

  return (
    <div className="category-section-item">
      <div className="category-section-header" onClick={handleCategoryClick}>
        <h3 className="category-section-title">{category.categoryName}</h3>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="category-section-arrow"
        >
          <path 
            d="M9 18L15 12L9 6" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="category-section-subcategories">
        {category.subCategories.map((subcat, index) => {
          const subcatName = typeof subcat === 'string' ? subcat : subcat.name
          const subcatImage = typeof subcat === 'object' ? subcat.image : null
          
          return (
            <div 
              key={index} 
              className="category-section-subcategory-card"
              onClick={() => handleSubcategoryClick(subcatName)}
            >
              <div className="category-section-subcategory-image-wrapper">
                {subcatImage ? (
                  <img 
                    src={subcatImage} 
                    alt={subcatName} 
                    className="category-section-subcategory-image"
                  />
                ) : (
                  <div className="category-section-subcategory-placeholder">
                    <span>{subcatName.charAt(0)}</span>
                  </div>
                )}
              </div>
              <span className="category-section-subcategory-name">{subcatName}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CategorySection

