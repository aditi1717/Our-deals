import { categoriesData } from '../data/categories'
import './CategorySection.css'

function CategorySection() {
  return (
    <div className="category-section">
      <h3 className="category-title">Browse by Category</h3>
      <div className="category-grid">
        {categoriesData.map((category, index) => (
          <div key={index} className="category-item">
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategorySection

