import { useState, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { categoryNames, allSubcategories } from '../data/categoryNames'
import { categorySectionsData } from '../data/categorySections'
import './CategoriesPage.css'

function CategoriesPage() {
  const navigate = useNavigate()
  const { categoryName } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Combine all categories from categoryNames and categorySectionsData
  const allCategories = useMemo(() => {
    const combined = [...categoryNames]
    const addedCategoryNames = new Set(categoryNames.map(cat => {
      return typeof cat === 'string' ? cat : cat.name
    }))
    
    // Add categories from categorySectionsData that are not already in categoryNames
    categorySectionsData.forEach(section => {
      if (!addedCategoryNames.has(section.categoryName)) {
        // Find an image from subcategories or use a default
        const defaultImage = (section.subCategories && section.subCategories[0]?.image) || 
                            (section.subcategories && section.subcategories[0]?.image) || 
                            null
        combined.push({ name: section.categoryName, image: defaultImage })
        addedCategoryNames.add(section.categoryName)
      }
    })
    
    // Add popular subcategories as individual categories
    categorySectionsData.forEach(section => {
      if (section.subCategories) {
        section.subCategories.forEach(subCat => {
          if (subCat.isPopular && !addedCategoryNames.has(subCat.name)) {
            combined.push({ name: subCat.name, image: subCat.image })
            addedCategoryNames.add(subCat.name)
          }
        })
      }
    })
    
    return combined
  }, [])

  // Set selected category from URL param or default to first category
  useEffect(() => {
    if (categoryName) {
      setSelectedCategory(decodeURIComponent(categoryName))
    } else if (allCategories.length > 0 && !selectedCategory) {
      // Find first category that has subcategories
      const firstCategoryWithSubs = categorySectionsData[0]?.categoryName || (typeof allCategories[0] === 'object' ? allCategories[0].name : allCategories[0])
      setSelectedCategory(firstCategoryWithSubs)
    }
  }, [categoryName, allCategories, selectedCategory])

  const handleCategoryClick = (categoryName) => {
    navigate(`/categories/${encodeURIComponent(categoryName)}`)
  }

  // Get subcategories for selected category
  const getSubcategories = () => {
    if (!selectedCategory) return []
    
    // Check if selected category is a popular subcategory (standalone category)
    // If it's a popular subcategory, navigate to category subcategories page
    const isPopularSubcategory = categorySectionsData.some(section => 
      section.subCategories?.some(subCat => 
        subCat.name === selectedCategory && subCat.isPopular
      )
    )
    
    if (isPopularSubcategory) {
      // If it's a popular subcategory, navigate to category subcategories page
      navigate(`/category/${encodeURIComponent(selectedCategory)}`)
      return []
    }
    
    // Check in categorySectionsData (from categorySections.js)
    const categorySection = categorySectionsData.find(
      section => section.categoryName === selectedCategory
    )
    if (categorySection) {
      // Check both subCategories (capital C) and subcategories (lowercase c)
      if (categorySection.subCategories && categorySection.subCategories.length > 0) {
        return categorySection.subCategories
      }
      if (categorySection.subcategories && categorySection.subcategories.length > 0) {
        return categorySection.subcategories
      }
    }
    
    // Check in allSubcategories (from categoryNames.js)
    if (allSubcategories && allSubcategories[selectedCategory]) {
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
              e.stopPropagation()
            }}
            onScroll={(e) => {
              e.stopPropagation()
            }}
          >
            {allCategories.map((category, index) => {
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
                      const subcatName = typeof subcat === 'string' ? subcat : subcat.name
                      const subcatImage = typeof subcat === 'object' ? subcat.image : null
                      
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

