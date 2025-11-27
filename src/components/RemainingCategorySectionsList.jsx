import { dummyCategoriesData } from '../data/dummyCategories'
import CategorySection from './CategorySection'

function RemainingCategorySectionsList() {
  // Get only categories 17 and 18 (indices 16, 17)
  const remainingCategories = dummyCategoriesData
    .filter(category => !category.isPopular)
    .slice(16, 18) // Get only 2 categories (indices 16-17)

  return (
    <div className="category-sections-list">
      {remainingCategories.map((category, index) => (
        <CategorySection key={index} category={category} />
      ))}
    </div>
  )
}

export default RemainingCategorySectionsList

