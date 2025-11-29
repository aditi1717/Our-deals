import { useState, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyCategoriesData } from '../data/dummyCategories'

function CategoriesPage() {
  const navigate = useNavigate()
  const { categoryName } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Get all categories from dummyCategoriesData (both popular and non-popular)
  const allCategories = useMemo(() => {
    return dummyCategoriesData.map(category => ({
      name: category.categoryName,
      image: category.image
    }))
  }, [])

  // Set selected category from URL param or default to first category
  useEffect(() => {
    if (categoryName) {
      setSelectedCategory(decodeURIComponent(categoryName))
    } else if (allCategories.length > 0 && !selectedCategory) {
      // Set first category as default
      setSelectedCategory(allCategories[0].name)
    }
  }, [categoryName, allCategories, selectedCategory])

  const handleCategoryClick = (categoryName) => {
    navigate(`/categories/${encodeURIComponent(categoryName)}`)
  }

  // Get subcategories for selected category
  const getSubcategories = () => {
    if (!selectedCategory) return []
    
    // Find the category in dummyCategoriesData
    const categoryData = dummyCategoriesData.find(
      category => category.categoryName === selectedCategory
    )
    
    if (categoryData && categoryData.subCategories) {
      return categoryData.subCategories
    }
    
    return []
  }

  const subcategories = getSubcategories()

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      <div className="bg-white px-[clamp(16px,2vw,24px)] py-[clamp(16px,2vw,20px)] flex justify-between items-center fixed top-0 left-0 right-0 z-[1000] flex-shrink-0 w-full shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
        <button className="bg-transparent border-none cursor-pointer p-[clamp(3px,0.4vw,4px)] flex items-center justify-center transition-colors rounded-full w-[clamp(28px,3.5vw,32px)] h-[clamp(28px,3.5vw,32px)] hover:bg-black/5" onClick={() => navigate('/')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(20px,2.5vw,24px)] h-[clamp(20px,2.5vw,24px)]">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="text-[clamp(18px,2.5vw,24px)] md:text-[clamp(16px,2.2vw,20px)] font-bold text-black m-0 ml-3 flex-1 text-left leading-[1.3]">Categories</h2>
        <div style={{ width: '24px' }}></div>
      </div>

        <div 
          className="flex flex-1 overflow-hidden h-[calc(100vh-clamp(60px,10vw,80px))] min-h-0 relative isolate overscroll-none mt-[clamp(60px,10vw,80px)] pt-0 md:flex-row md:h-[calc(100vh-clamp(60px,10vw,80px))]"
          onWheel={(e) => {
            // Only allow scrolling if the event is on the sidebar
            const sidebar = e.currentTarget.querySelector('.categories-sidebar')
            if (!sidebar.contains(e.target)) {
              e.preventDefault()
              e.stopPropagation()
            }
          }}
        >
          {/* Left Sidebar - Categories List */}
          <div 
            className="w-[clamp(120px,20vw,200px)] max-w-[200px] md:w-[clamp(80px,22vw,120px)] md:max-w-[120px] bg-[#FAFAFA] border-r border-gray-200 overflow-y-auto overflow-x-hidden py-[clamp(12px,1.5vw,16px)] px-0 md:py-[clamp(6px,0.8vw,10px)] md:px-[clamp(4px,0.6vw,6px)] flex-shrink-0 h-full relative isolate [-webkit-overflow-scrolling:touch] [overscroll-behavior-y:contain] [overscroll-behavior-x:none] [touch-action:pan-y] [will-change:scroll-position] [contain:layout_style_paint] md:flex md:flex-col md:border-b-0"
            onWheel={(e) => {
              // Only prevent on desktop
              if (window.innerWidth > 768) {
                e.stopPropagation()
              }
            }}
          >
            {allCategories.map((category, index) => {
              const categoryName = category.name
              const isSelected = selectedCategory === categoryName
              
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-[clamp(6px,0.8vw,10px)] md:gap-[clamp(3px,0.5vw,5px)] py-[clamp(10px,1.2vw,12px)] px-[clamp(16px,2vw,20px)] md:py-[clamp(6px,0.8vw,10px)] md:px-[clamp(4px,0.6vw,6px)] cursor-pointer transition-all border-l-[clamp(3px,0.4vw,4px)] md:border-l-[clamp(2px,0.3vw,3px)] border-transparent bg-transparent hover:bg-gray-100 ${isSelected ? 'bg-white md:bg-white border-l-[clamp(3px,0.4vw,4px)] md:border-l-transparent shadow-[0_2px_8px_rgba(0,0,0,0.1)] rounded-[clamp(8px,1vw,12px)]' : ''}`}
                  onClick={() => handleCategoryClick(categoryName)}
                >
                  <div className={`w-[clamp(48px,6vw,60px)] md:w-[clamp(32px,4.5vw,50px)] h-[clamp(48px,6vw,60px)] md:h-[clamp(32px,4.5vw,50px)] rounded-full ${isSelected ? 'bg-[#13335a]' : 'bg-gray-200'} flex items-center justify-center overflow-hidden flex-shrink-0`}>
                    {category.image ? (
                      <img src={category.image} alt={categoryName} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#13335a] text-white font-bold text-[clamp(20px,2.5vw,28px)] md:text-[clamp(14px,1.8vw,20px)]">
                        <span>{categoryName.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <span className={`text-[clamp(12px,1.4vw,14px)] md:text-[clamp(8px,1vw,11px)] font-bold flex-1 leading-[1.4] text-center mt-[clamp(4px,0.6vw,8px)] ${isSelected ? 'text-[#13335a]' : 'text-gray-700'}`}>{categoryName}</span>
                </div>
              )
            })}
          </div>

          {/* Right Content - Subcategories */}
          <div 
            className="flex-1 min-w-0 overflow-hidden md:overflow-y-auto md:overflow-x-hidden p-[clamp(16px,2vw,24px)] md:p-[clamp(6px,0.8vw,10px)] bg-white h-full relative isolate overscroll-none"
            onWheel={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
            onScroll={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            {selectedCategory && (
              <>
                <h3 className="text-[clamp(16px,2vw,20px)] md:text-[clamp(14px,1.8vw,18px)] font-bold text-[#1a1a1a] m-0 mb-[clamp(12px,1.5vw,16px)] md:mb-[clamp(10px,1.3vw,14px)] pb-[clamp(10px,1.2vw,12px)] md:pb-[clamp(8px,1vw,10px)] border-b-[clamp(1.5px,0.2vw,2px)] border-gray-200 leading-[1.3]">{selectedCategory}</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-[clamp(8px,1vw,12px)]">
                  {subcategories.length > 0 ? (
                    subcategories.map((subcat, index) => {
                      const subcatName = subcat.name
                      const subcatImage = subcat.image
                      
                      return (
                        <div 
                          key={index} 
                          className="flex flex-col items-center cursor-pointer transition-transform hover:-translate-y-1"
                          onClick={() => navigate(`/vendors/${encodeURIComponent(subcatName)}`)}
                        >
                          <div className="w-full aspect-square rounded-[clamp(8px,1vw,10px)] overflow-hidden bg-gray-100 mb-[clamp(6px,0.8vw,8px)] flex items-center justify-center">
                            {subcatImage ? (
                              <img src={subcatImage} alt={subcatName} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-[#13335a] text-white font-bold text-[clamp(18px,2.2vw,22px)] md:text-[clamp(16px,2vw,20px)]">
                                <span>{subcatName.charAt(0)}</span>
                              </div>
                            )}
                          </div>
                          <span className="text-[clamp(10px,1.2vw,12px)] md:text-[clamp(11px,1.3vw,13px)] font-bold text-gray-700 text-center leading-[1.3] break-words w-full block group-hover:text-[#13335a]">{subcatName}</span>
                        </div>
                      )
                    })
                  ) : (
                    <div className="text-center py-[clamp(30px,3.5vw,40px)] md:py-[clamp(24px,3vw,36px)] px-[clamp(16px,2vw,20px)] md:px-[clamp(12px,1.5vw,18px)] text-gray-500 text-[clamp(13px,1.6vw,16px)] md:text-[clamp(12px,1.5vw,15px)] leading-[1.5]">
                      <p>No subcategories available for this category.</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
    </div>
  )
}

export default CategoriesPage

