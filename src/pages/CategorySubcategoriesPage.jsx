import { useNavigate, useParams } from 'react-router-dom'
import { dummyCategoriesData } from '../data/dummyCategories'
import BannerCarousel from '../components/BannerCarousel'

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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header - Fixed on Top */}
      <div className="bg-[#13335a] px-[clamp(16px,2vw,24px)] md:px-[clamp(12px,1.5vw,16px)] py-[clamp(16px,2vw,20px)] flex justify-between items-center fixed top-0 left-0 right-0 z-[1000] shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
        <button className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center transition-colors rounded-full w-8 h-8 hover:bg-white/20" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="text-[clamp(18px,2.5vw,24px)] md:text-[clamp(18px,2.2vw,22px)] font-bold text-white m-0 flex-1 text-center">{parentCategory || decodedCategoryName}</h2>
        <div style={{ width: '24px' }}></div>
      </div>

      {/* Content with top padding so it doesn't hide behind fixed header */}
      <div className="flex-1 p-[clamp(16px,2vw,24px)] pt-[clamp(72px,10vw,96px)] md:p-[clamp(12px,1.5vw,16px)] md:pt-[clamp(64px,8vw,80px)] overflow-y-auto pb-[100px] bg-white">
        <div className="mb-[clamp(16px,2vw,24px)]">
          <BannerCarousel bannerSet={1} />
        </div>
        {subcategories.length > 0 ? (
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-[clamp(8px,1vw,12px)] md:gap-[clamp(6px,0.8vw,10px)] mt-[clamp(16px,2vw,24px)] md:mt-[clamp(12px,1.5vw,16px)]">
            {subcategories.map((subcat, index) => {
              const subcatName = typeof subcat === 'string' ? subcat : subcat.name
              const subcatImage = typeof subcat === 'object' ? subcat.image : null
              
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center cursor-pointer transition-all bg-transparent rounded-[clamp(10px,1.2vw,12px)] overflow-visible shadow-none hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                  onClick={() => handleSubcategoryClick(subcatName)}
                >
                  <div className="w-full aspect-square rounded-[clamp(10px,1.2vw,12px)] overflow-hidden bg-gray-100 flex items-center justify-center">
                    {subcatImage ? (
                      <img src={subcatImage} alt={subcatName} className="w-full h-full object-cover block" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#13335a] text-white font-bold text-[clamp(16px,2vw,20px)] sm:text-[clamp(18px,2.2vw,24px)] md:text-[clamp(18px,2.3vw,25px)] lg:text-[clamp(20px,2.5vw,28px)]">
                        <span>{subcatName.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <span className="text-[clamp(10px,1.2vw,12px)] sm:text-[clamp(11px,1.3vw,13px)] md:text-[clamp(11px,1.3vw,13px)] lg:text-[clamp(12px,1.4vw,14px)] xl:text-[clamp(12px,1.5vw,15px)] font-bold text-gray-800 text-center leading-[1.4] pt-[clamp(6px,0.8vw,10px)] sm:pt-[clamp(7px,0.9vw,11px)] md:pt-[clamp(6px,0.8vw,8px)] lg:pt-[clamp(8px,1vw,12px)] w-full box-border mt-[clamp(4px,0.6vw,8px)] sm:mt-[clamp(5px,0.7vw,9px)] md:mt-[clamp(4px,0.6vw,6px)] lg:mt-[clamp(6px,0.8vw,10px)] group-hover:text-[#13335a]">{subcatName}</span>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-10 px-5 text-gray-500">
            <p>No subcategories available.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategorySubcategoriesPage

