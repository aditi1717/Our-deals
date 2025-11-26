import { useNavigate } from 'react-router-dom'
import { categorySectionsData } from '../data/categorySections'
import './CategorySections.css'

function CategorySections() {
  const navigate = useNavigate()

  const handleSubCategoryClick = (subCategoryName, isPopular) => {
    if (isPopular) {
      // Navigate to category subcategories page for popular categories
      navigate(`/category/${encodeURIComponent(subCategoryName)}`)
    } else {
      // Navigate directly to vendors for regular subcategories
      navigate(`/vendors/${encodeURIComponent(subCategoryName)}`)
    }
  }

  // Collect all popular subcategories from all sections
  const popularSubCategories = []
  categorySectionsData.forEach((section) => {
    section.subCategories.forEach((subCat) => {
      if (subCat.isPopular) {
        popularSubCategories.push(subCat)
      }
    })
  })

  return (
    <div className="category-sections-container">
      {/* Popular Searches Section */}
      {popularSubCategories.length > 0 && (
        <div className="category-section-card popular-searches-section">
          <h3 className="category-section-title">Popular Searches</h3>
          <div className="sub-categories popular-searches-categories">
            {popularSubCategories.map((subCat, subIndex) => (
              <div 
                key={subIndex} 
                className="sub-category-card popular-style"
                onClick={() => handleSubCategoryClick(subCat.name, true)}
              >
                <div className="sub-category-image">
                  <img src={subCat.image} alt={subCat.name} />
                </div>
                <div className="sub-category-content popular-content">
                  <h3 className="sub-category-name popular-name">{subCat.name}</h3>
                  <button 
                    className="popular-enquire-button"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSubCategoryClick(subCat.name, true)
                    }}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Category Sections */}
      {categorySectionsData.map((section, index) => (
        <div key={index} className="category-section-card">
          <h3 className="category-section-title">{section.categoryName}</h3>
          <div className="sub-categories">
            {section.subCategories.map((subCat, subIndex) => (
              <div 
                key={subIndex} 
                className="sub-category-card"
                onClick={() => handleSubCategoryClick(subCat.name, subCat.isPopular)}
              >
                <div className="sub-category-image">
                  <img src={subCat.image} alt={subCat.name} />
                </div>
                <div className="sub-category-content">
                  <h3 className="sub-category-name">{subCat.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategorySections

