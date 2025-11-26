import { useNavigate, useParams } from 'react-router-dom'
import { categorySectionsData } from '../data/categorySections'
import './CategorySubcategoriesPage.css'

function CategorySubcategoriesPage() {
  const navigate = useNavigate()
  const { categoryName } = useParams()
  const decodedCategoryName = decodeURIComponent(categoryName)

  // Find the parent category for this popular subcategory
  let parentCategory = null
  let subcategories = []

  // Check if it's a popular subcategory
  for (const section of categorySectionsData) {
    const foundSubcat = section.subCategories?.find(
      subCat => subCat.name === decodedCategoryName && subCat.isPopular
    )
    if (foundSubcat) {
      parentCategory = section.categoryName
      subcategories = section.subCategories || []
      break
    }
  }

  // If not found as popular, check if it's a regular category
  if (!parentCategory) {
    const section = categorySectionsData.find(
      section => section.categoryName === decodedCategoryName
    )
    if (section) {
      parentCategory = section.categoryName
      subcategories = section.subCategories || []
    }
  }

  const handleSubcategoryClick = (subcategoryName) => {
    navigate(`/vendors/${encodeURIComponent(subcategoryName)}`)
  }

  return (
    <div className="category-subcategories-page">
      <div className="category-subcategories-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="category-subcategories-title">{parentCategory || decodedCategoryName}</h2>
        <div style={{ width: '24px' }}></div>
      </div>

      <div className="category-subcategories-content">
        {subcategories.length > 0 ? (
          <div className="subcategories-grid">
            {subcategories.map((subcat, index) => {
              const subcatName = typeof subcat === 'string' ? subcat : subcat.name
              const subcatImage = typeof subcat === 'object' ? subcat.image : null
              
              return (
                <div 
                  key={index} 
                  className="subcategory-grid-card"
                  onClick={() => handleSubcategoryClick(subcatName)}
                >
                  <div className="subcategory-grid-image">
                    {subcatImage ? (
                      <img src={subcatImage} alt={subcatName} />
                    ) : (
                      <div className="subcategory-grid-placeholder">
                        <span>{subcatName.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <span className="subcategory-grid-name">{subcatName}</span>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="no-subcategories">
            <p>No subcategories available.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategorySubcategoriesPage

