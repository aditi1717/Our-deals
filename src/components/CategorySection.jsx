import { useNavigate } from 'react-router-dom'

function CategorySection({ category }) {
  const navigate = useNavigate()

  const handleSubcategoryClick = (subcategoryName) => {
    navigate(`/vendors/${encodeURIComponent(subcategoryName)}`)
  }

  const handleCategoryClick = () => {
    navigate(`/categories/${encodeURIComponent(category.categoryName)}`)
  }

  if (!category || !category.subCategories || category.subCategories.length === 0) {
    return null
  }

  return (
    <div className={`w-full mb-[clamp(32px,4vw,24px)] ${category.categoryName === 'Home Maintenance' ? 'min-[1088px]:mt-[clamp(24px,3vw,32px)]' : ''}`}>
      <div className="flex items-center justify-between mb-[clamp(16px,2vw,24px)] cursor-pointer p-0" onClick={handleCategoryClick}>
        <h3 className="text-[clamp(20px,2.5vw,28px)] md:text-[clamp(18px,2.2vw,24px)] font-bold text-gray-800 m-0 pl-0">{category.categoryName}</h3>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="text-gray-500 flex-shrink-0 w-[clamp(18px,2vw,24px)] h-[clamp(18px,2vw,24px)]"
        >
          <path 
            d="M9 18L15 12L9 6" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex gap-2 overflow-x-auto overflow-y-hidden p-0 scrollbar-thin scrollbar-thumb-[#cbd5e0] scrollbar-track-transparent [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#cbd5e0] [&::-webkit-scrollbar-thumb]:rounded-sm [-webkit-overflow-scrolling:touch] max-w-[1400px] mx-auto">
        {category.subCategories.map((subcat, index) => {
          const subcatName = typeof subcat === 'string' ? subcat : subcat.name
          const subcatImage = typeof subcat === 'object' ? subcat.image : null
          
          return (
          <div 
              key={index} 
              className="flex flex-col items-center cursor-pointer flex-shrink-0 w-[calc(100%/4)] min-w-[calc(100%/4)] md:w-[calc(100%/5)] md:min-w-[calc(100%/5)] lg:w-[calc(100%/6)] lg:min-w-[calc(100%/6)] lg:max-w-[90px] transition-transform hover:-translate-y-0.5"
              onClick={() => handleSubcategoryClick(subcatName)}
            >
              <div className="w-full h-0 pb-[150%] relative rounded-[clamp(10px,1.2vw,12px)] overflow-hidden bg-gray-100 mb-[clamp(8px,1vw,12px)] aspect-[2/3] shadow-[0_4px_12px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.15)]">
                {subcatImage ? (
                  <img 
                    src={subcatImage} 
                    alt={subcatName} 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#13335a] text-white font-bold text-[clamp(20px,3vw,28px)]">
                    <span>{subcatName.charAt(0)}</span>
                  </div>
                )}
              </div>
              <span className="text-[clamp(12px,1.4vw,14px)] font-bold text-gray-700 text-center leading-[1.4] break-words w-full block hover:text-[#13335a]">{subcatName}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CategorySection

