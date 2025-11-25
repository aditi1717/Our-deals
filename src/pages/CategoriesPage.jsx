import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { categoryNames, categorySectionsData, allSubcategories } from '../data/categoryNames'
import './CategoriesPage.css'

function CategoriesPage() {
  const navigate = useNavigate()
  const { categoryName } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Set selected category from URL param or default to first category
  useEffect(() => {
    if (categoryName) {
      setSelectedCategory(decodeURIComponent(categoryName))
    } else if (categoryNames.length > 0 && !selectedCategory) {
      // Find first category that has subcategories
      const firstCategoryWithSubs = categorySectionsData[0]?.categoryName || (typeof categoryNames[0] === 'object' ? categoryNames[0].name : categoryNames[0])
      setSelectedCategory(firstCategoryWithSubs)
    }
  }, [categoryName])

  const handleCategoryClick = (categoryName) => {
    navigate(`/categories/${encodeURIComponent(categoryName)}`)
  }

  // Get subcategories for selected category
  const getSubcategories = () => {
    if (!selectedCategory) return []
    
    // Check in categorySectionsData
    const categorySection = categorySectionsData.find(
      section => section.categoryName === selectedCategory
    )
    if (categorySection) {
      return categorySection.subcategories
    }
    
    // Check in allSubcategories
    if (allSubcategories[selectedCategory]) {
      return allSubcategories[selectedCategory]
    }
    
    return []
  }

  const subcategories = getSubcategories()

  return (
    <div className="categories-page">
      <div className="categories-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="categories-title">Categories</h2>
        <div style={{ width: '24px' }}></div>
      </div>

        <div className="categories-content">
          {/* Left Sidebar - Categories List */}
          <div className="categories-sidebar">
            {categoryNames.map((category, index) => {
              const categoryName = typeof category === 'string' ? category : category.name
              const isSelected = selectedCategory === categoryName
              
              return (
                <div
                  key={index}
                  className={`category-sidebar-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleCategoryClick(categoryName)}
                >
                  <div className="category-sidebar-icon">
                    {typeof category === 'object' && category.image ? (
                      <img src={category.image} alt={categoryName} />
                    ) : (
                      <div className="category-icon-placeholder">
                        <span>{categoryName.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <span className="category-sidebar-name">{categoryName}</span>
                </div>
              )
            })}
          </div>

          {/* Right Content - Subcategories */}
          <div className="categories-main-content">
            {selectedCategory && (
              <>
                <h3 className="selected-category-title">{selectedCategory}</h3>
                <div className="subcategories-grid">
                  {subcategories.length > 0 ? (
                    subcategories.map((subcat, index) => {
                      const subcatName = typeof subcat === 'string' ? subcat : subcat.name
                      const subcatImage = typeof subcat === 'object' ? subcat.image : null
                      
                      return (
                        <div key={index} className="subcategory-card">
                          <div className="subcategory-image-wrapper">
                            {subcatImage ? (
                              <img src={subcatImage} alt={subcatName} />
                            ) : (
                              <div className="subcategory-placeholder">
                                <span>{subcatName.charAt(0)}</span>
                              </div>
                            )}
                          </div>
                          <span className="subcategory-name">{subcatName}</span>
                        </div>
                      )
                    })
                  ) : (
                    <div className="no-subcategories">
                      <p>No subcategories available for this category.</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
    </div>
  )
}

export default CategoriesPage

