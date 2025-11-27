import { useState, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyCategoriesData } from '../data/dummyCategories'
import './CategoriesPage.css'

function CategoriesPage() {
  const navigate = useNavigate()
  const { categoryName } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Get all categories from dummyCategoriesData (both popular and non-popular)
  const allCategories = useMemo(() => {
    return dummyCategoriesData.map(category => ({
      name: category.categoryName,
      image: category.image
    }))
  }, [])

  // Set selected category from URL param or default to first category
  useEffect(() => {
    if (categoryName) {
      setSelectedCategory(decodeURIComponent(categoryName))
    } else if (allCategories.length > 0 && !selectedCategory) {
      // Set first category as default
      setSelectedCategory(allCategories[0].name)
    }
  }, [categoryName, allCategories, selectedCategory])

  const handleCategoryClick = (categoryName) => {
    navigate(`/categories/${encodeURIComponent(categoryName)}`)
  }

  // Get subcategories for selected category
  const getSubcategories = () => {
    if (!selectedCategory) return []
    
    // Find the category in dummyCategoriesData
    const categoryData = dummyCategoriesData.find(
      category => category.categoryName === selectedCategory
    )
    
    if (categoryData && categoryData.subCategories) {
      return categoryData.subCategories
    }
    
    return []
  }

  const subcategories = getSubcategories()

  return (
    <div className="categories-page">
      <div className="categories-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="categories-title">Categories</h2>
        <div style={{ width: '24px' }}></div>
      </div>

        <div 
          className="categories-content"
          onWheel={(e) => {
            // Only allow scrolling if the event is on the sidebar
            const sidebar = e.currentTarget.querySelector('.categories-sidebar')
            if (!sidebar.contains(e.target)) {
              e.preventDefault()
              e.stopPropagation()
            }
          }}
        >
          {/* Left Sidebar - Categories List */}
          <div 
            className="categories-sidebar"
            onWheel={(e) => {
              // Only prevent on desktop
              if (window.innerWidth > 768) {
                e.stopPropagation()
              }
            }}
          >
            {allCategories.map((category, index) => {
              const categoryName = category.name
              const isSelected = selectedCategory === categoryName
              
              return (
                <div
                  key={index}
                  className={`category-sidebar-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleCategoryClick(categoryName)}
                >
                  <div className="category-sidebar-icon">
                    {category.image ? (
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
          <div 
            className="categories-main-content"
            onWheel={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
            onScroll={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            {selectedCategory && (
              <>
                <h3 className="selected-category-title">{selectedCategory}</h3>
                <div className="subcategories-grid">
                  {subcategories.length > 0 ? (
                    subcategories.map((subcat, index) => {
                      const subcatName = subcat.name
                      const subcatImage = subcat.image
                      
                      return (
                        <div 
                          key={index} 
                          className="subcategory-card"
                          onClick={() => navigate(`/vendors/${encodeURIComponent(subcatName)}`)}
                        >
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

