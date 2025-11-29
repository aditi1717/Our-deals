import { useNavigate } from 'react-router-dom'
import { dummyCategoriesData } from '../data/dummyCategories'

function PopularCategoriesSection() {
  const navigate = useNavigate()
  
  // Get only popular categories (isPopular: true)
  const popularCategories = dummyCategoriesData.filter(category => category.isPopular)

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${encodeURIComponent(categoryName)}`)
  }

  return (
    <div className="w-full py-[clamp(16px,2vw,24px)] px-4 bg-white">
      <h2 className="text-[clamp(20px,2.5vw,28px)] md:text-[clamp(18px,2.2vw,24px)] font-bold text-black mb-[clamp(20px,2.5vw,32px)] md:mb-[clamp(16px,2vw,24px)] pl-0">Popular Categories</h2>
      <div className="flex gap-[clamp(12px,2vw,20px)] overflow-x-auto overflow-y-hidden pb-[clamp(8px,1vw,12px)] scrollbar-thin scrollbar-thumb-[#cbd5e0] scrollbar-track-transparent [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#cbd5e0] [&::-webkit-scrollbar-thumb]:rounded-sm [-webkit-overflow-scrolling:touch]">
        {popularCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white rounded-[clamp(12px,1.8vw,16px)] shadow-[0_0_8px_2px_rgba(0,0,0,0.1)] overflow-visible cursor-pointer flex-shrink-0 w-[calc((100%-12px)/2)] min-w-[calc((100%-12px)/2)] max-w-[calc((100%-12px)/2)] md:w-[calc((100%-32px)/3)] md:min-w-[calc((100%-32px)/3)] md:max-w-[calc((100%-32px)/3)] lg:w-[calc((100%-60px)/4)] lg:min-w-[calc((100%-60px)/4)] lg:max-w-[calc((100%-60px)/4)] transition-all flex flex-col p-[clamp(12px,1.5vw,16px)] box-border relative hover:-translate-y-0.5 hover:shadow-[0_0_12px_4px_rgba(0,0,0,0.15)]"
            onClick={() => handleCategoryClick(category.categoryName)}
          >
            <div className="flex items-center justify-between py-[clamp(12px,1.5vw,16px)] px-[clamp(10px,1.3vw,14px)] bg-white box-border">
              <span className="text-[clamp(14px,1.8vw,18px)] font-bold text-[#856D65] flex-1 leading-[1.3] break-words overflow-hidden text-ellipsis line-clamp-2">{category.categoryName}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#856D65] flex-shrink-0 w-[clamp(12px,1.5vw,16px)] h-[clamp(12px,1.5vw,16px)] ml-2">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-full h-0 pb-[130%] relative overflow-hidden bg-white rounded-b-[clamp(12px,1.8vw,16px)]">
              <img
                src={category.image}
                alt={category.categoryName}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularCategoriesSection

