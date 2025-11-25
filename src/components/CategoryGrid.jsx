import { categoriesData } from '../data/categories'
import './CategoryGrid.css'

function CategoryGrid() {
  const mainCategories = categoriesData.slice(0, 12)

  return (
    <div className="category-section">
      <div className="category-grid">
        {mainCategories.map((category, index) => (
          <div key={index} className="category-item">
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
      </div>
    </div>
  )
}

export default CategoryGrid
