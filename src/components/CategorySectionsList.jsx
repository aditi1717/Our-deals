import { dummyCategoriesData } from '../data/dummyCategories'
import CategorySection from './CategorySection'

function CategorySectionsList() {
  // Get only 2 categories: 12th and 13th (indices 11-12)
  const nonPopularCategories = dummyCategoriesData
    .filter(category => !category.isPopular)
    .slice(11, 13) // Get only 2 categories (indices 11-12)

  return (
    <div className="category-sections-list">
      {nonPopularCategories.map((category, index) => (
        <CategorySection key={index} category={category} />
      ))}
    </div>
  )
}

export default CategorySectionsList

