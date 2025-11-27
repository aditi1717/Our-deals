import { dummyCategoriesData } from '../data/dummyCategories'
import CategorySection from './CategorySection'

function CategorySectionsList14to16() {
  // Get categories 14, 15, 16 (indices 13, 14, 15)
  const categories = dummyCategoriesData
    .filter(category => !category.isPopular)
    .slice(13, 16) // Get 3 categories (indices 13-15)

  return (
    <div className="category-sections-list">
      {categories.map((category, index) => (
        <CategorySection key={index} category={category} />
      ))}
    </div>
  )
}

export default CategorySectionsList14to16

