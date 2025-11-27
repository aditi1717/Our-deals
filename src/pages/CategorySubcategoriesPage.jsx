import { useNavigate, useParams } from 'react-router-dom'
import { dummyCategoriesData } from '../data/dummyCategories'
import BannerCarousel from '../components/BannerCarousel'
import './CategorySubcategoriesPage.css'

function CategorySubcategoriesPage() {
  const navigate = useNavigate()
  const { categoryName } = useParams()
  const decodedCategoryName = decodeURIComponent(categoryName)

  // Find the category in dummyCategoriesData
  const categoryData = dummyCategoriesData.find(
    category => category.categoryName === decodedCategoryName
  )

  const parentCategory = categoryData ? categoryData.categoryName : decodedCategoryName
  const subcategories = categoryData ? categoryData.subCategories || [] : []

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
        <BannerCarousel bannerSet={1} />
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

