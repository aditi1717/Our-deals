import { useNavigate } from 'react-router-dom'
import { dummyCategoriesData } from '../data/dummyCategories'

function CategoryGrid() {
  const navigate = useNavigate()
  
  // Get only non-popular categories (isPopular: false) and take first 13
  const nonPopularCategories = dummyCategoriesData
    .filter(category => !category.isPopular)
    .slice(0, 13)

  const handleCategoryClick = (categoryName) => {
    navigate(`/categories/${encodeURIComponent(categoryName)}`)
  }

  const handleSeeMore = () => {
    navigate('/categories')
  }

  return (
    <div className="bg-transparent rounded-lg shadow-none px-4 py-0 w-full box-border">
      <div className="grid grid-rows-2 grid-flow-col w-full gap-2 overflow-x-auto overflow-y-hidden md:[scrollbar-width:thin] md:[scrollbar-color:#c1c1c1_#f1f1f1] [-webkit-overflow-scrolling:touch] md:grid-rows-2 md:grid-flow-col [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [-ms-overflow-style:none] [scrollbar-width:none]" style={{ gridAutoColumns: '1fr', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {nonPopularCategories.map((category, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer pt-5 md:pt-0 w-full box-border" onClick={() => handleCategoryClick(category.categoryName)}>
            <div className="w-20 h-[90px] rounded-lg bg-[#F1F4F9] flex items-center justify-center mb-3 border-2 border-gray-200 overflow-hidden transition-all relative mx-auto hover:bg-[#F1F4F9] hover:border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.15)]">
              <img
                src={category.image}
                alt={category.categoryName}
                className="w-full h-full object-cover rounded-lg transition-all"
              />
            </div>
            <span className="text-[clamp(10px,1.2vw,14px)] md:text-[clamp(9px,1.1vw,12px)] font-medium text-black text-center transition-colors leading-[1.3] break-words max-w-full w-full block hover:text-[#13335a]">{category.categoryName}</span>
          </div>
        ))}
        {/* More Option */}
        <div className="flex flex-col items-center cursor-pointer pt-5 md:pt-0 w-full box-border" onClick={handleSeeMore}>
          <div className="w-20 h-[90px] rounded-lg flex items-center justify-center bg-transparent border-none">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-[11px] font-semibold text-[#13335a] text-center">See More</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#13335a] w-5 h-5">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryGrid
