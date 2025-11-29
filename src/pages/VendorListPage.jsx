import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function VendorListPage() {
  const navigate = useNavigate()
  const { subcategoryName } = useParams()
  const [selectedFilter, setSelectedFilter] = useState('Near by')

  // Sample vendor data
  const vendors = [
    {
      id: 1,
      name: 'Test Services',
      address: '123 MG Road, Indore',
      category: 'Grocery Store',
      services: '24 Hours Services',
      hours: 'Open: 9:00 AM – 9:00 PM',
      image: null,
      phone: '+91 1234567890',
      whatsapp: '+91 1234567890',
      since: '2020'
    },
    {
      id: 2,
      name: 'City Mart Supermarket',
      address: '456 AB Road, Indore',
      category: 'Supermarket',
      services: 'Home Delivery Available',
      hours: 'Open: 8:00 AM – 10:00 PM',
      image: null,
      phone: '+91 9876543210',
      whatsapp: '+91 9876543210',
      since: '2018'
    },
    {
      id: 3,
      name: 'Fresh Fruits & Vegetables',
      address: '789 Vijay Nagar, Indore',
      category: 'Fruits & Vegetables',
      services: 'Fresh Daily Stock',
      hours: 'Open: 6:00 AM – 9:00 PM',
      image: null,
      phone: '+91 8765432109',
      whatsapp: '+91 8765432109',
      since: '2019'
    },
    {
      id: 4,
      name: 'Quick Bites Restaurant',
      address: '321 Palasia, Indore',
      category: 'Restaurant',
      services: 'Dine-in & Takeaway',
      hours: 'Open: 11:00 AM – 11:00 PM',
      image: null,
      phone: '+91 7654321098',
      whatsapp: '+91 7654321098',
      since: '2021'
    },
    {
      id: 5,
      name: 'Beauty Care Salon',
      address: '654 Scheme 54, Indore',
      category: 'Beauty Salon',
      services: 'Haircut & Styling',
      hours: 'Open: 10:00 AM – 8:00 PM',
      image: null,
      phone: '+91 6543210987',
      whatsapp: '+91 6543210987',
      since: '2017'
    },
    {
      id: 6,
      name: 'Home Decor Solutions',
      address: '987 Bypass Road, Indore',
      category: 'Home Decor',
      services: 'Custom Design Available',
      hours: 'Open: 10:00 AM – 7:00 PM',
      image: null,
      phone: '+91 5432109876',
      whatsapp: '+91 5432109876',
      since: '2016'
    },
    {
      id: 7,
      name: 'Tech Repair Center',
      address: '147 Mhow Naka, Indore',
      category: 'Electronics Repair',
      services: 'Same Day Service',
      hours: 'Open: 9:00 AM – 7:00 PM',
      image: null,
      phone: '+91 4321098765',
      whatsapp: '+91 4321098765',
      since: '2022'
    },
    {
      id: 8,
      name: 'Fashion Boutique',
      address: '258 Regal Square, Indore',
      category: 'Clothing Store',
      services: 'Latest Fashion Trends',
      hours: 'Open: 10:00 AM – 9:00 PM',
      image: null,
      phone: '+91 3210987654',
      whatsapp: '+91 3210987654',
      since: '2015'
    },
    {
      id: 9,
      name: 'Pharmacy Plus',
      address: '369 Sapna Sangeeta, Indore',
      category: 'Pharmacy',
      services: '24 Hours Services',
      hours: 'Open: 24 Hours',
      image: null,
      phone: '+91 2109876543',
      whatsapp: '+91 2109876543',
      since: '2014'
    },
    {
      id: 10,
      name: 'Pet Care Store',
      address: '741 Sudama Nagar, Indore',
      category: 'Pet Shop',
      services: 'Pet Food & Accessories',
      hours: 'Open: 9:00 AM – 8:00 PM',
      image: null,
      phone: '+91 1098765432',
      whatsapp: '+91 1098765432',
      since: '2020'
    }
  ]

  const filters = [
    { id: 'nearby', label: 'Near by', icon: 'location' },
    { id: 'available', label: 'Available', icon: 'lightning' },
    { id: 'toprated', label: 'Top-rated', icon: 'star' }
  ]

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`
  }

  const handleChat = (whatsapp) => {
    window.open(`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`, '_blank')
  }

  const handleDirection = (address) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header - Fixed on Top */}
      <div className="bg-[#13335a] p-[clamp(16px,2vw,20px)_clamp(16px,2vw,24px)] flex justify-between items-center fixed top-0 left-0 right-0 z-[1000] shadow-[0_2px_8px_rgba(0,0,0,0.15)] md:p-[clamp(12px,2vw,16px)]">
        <button className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center transition-colors rounded-full w-[clamp(28px,4vw,32px)] h-[clamp(28px,4vw,32px)] hover:bg-white/20" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(20px,3vw,24px)] h-[clamp(20px,3vw,24px)]">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="text-[clamp(18px,3vw,24px)] font-bold text-white m-0 flex-1 text-center">Vendor List</h2>
        <div className="w-6"></div>
      </div>

      {/* Content with top padding so it doesn't hide behind fixed header */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-[clamp(12px,2vw,16px)] pt-[clamp(72px,10vw,96px)] [-webkit-overflow-scrolling:touch] min-h-0 pb-20 bg-white md:p-[clamp(10px,1.5vw,12px)] md:pt-[clamp(64px,8vw,80px)] md:pb-20 md:bg-gray-50">
        {/* Filter Buttons */}
        <div className="flex gap-[clamp(6px,1vw,8px)] mb-[clamp(12px,2vw,16px)] overflow-x-auto pb-[clamp(6px,1vw,8px)] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden md:gap-[clamp(4px,0.75vw,6px)] md:mb-[clamp(10px,1.5vw,12px)]">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`flex items-center gap-[clamp(4px,0.75vw,6px)] p-[clamp(8px,1.25vw,10px)_clamp(12px,2vw,16px)] border rounded-lg text-[clamp(13px,2vw,16px)] font-bold cursor-pointer transition-all whitespace-nowrap flex-shrink-0 md:p-[clamp(6px,1vw,8px)_clamp(10px,1.5vw,12px)] md:text-[clamp(12px,1.8vw,15px)] ${
                selectedFilter === filter.label 
                  ? 'bg-[#13335a] text-white border-[#13335a]' 
                  : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
              }`}
              onClick={() => setSelectedFilter(filter.label)}
            >
              {filter.icon === 'location' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(14px,2vw,16px)] h-[clamp(14px,2vw,16px)] flex-shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
              )}
              {filter.icon === 'lightning' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(14px,2vw,16px)] h-[clamp(14px,2vw,16px)] flex-shrink-0">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {filter.icon === 'star' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(14px,2vw,16px)] h-[clamp(14px,2vw,16px)] flex-shrink-0">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              )}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-[clamp(13px,2vw,16px)] font-bold text-black mb-[clamp(12px,2vw,16px)] md:text-[clamp(12px,1.75vw,14px)] md:mb-[clamp(10px,1.5vw,12px)]">
          {vendors.length} Results for your search
        </div>

        {/* Vendor Cards */}
        <div className="flex flex-col gap-[clamp(16px,2.5vw,20px)]">
          {vendors.map((vendor) => (
            <div 
              key={vendor.id} 
              className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden transition-all cursor-pointer hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
              onClick={() => navigate(`/vendor/${vendor.id}`)}
            >
              {/* Details and Image Section */}
              <div className="flex gap-[clamp(16px,2.5vw,20px)] p-[clamp(16px,2.5vw,20px)]">
                {/* Left Side - Image Placeholder */}
                <div className="flex-shrink-0 w-[clamp(80px,15vw,120px)] flex flex-col gap-[clamp(8px,1.2vw,10px)]">
                  {/* Gray Box with Icon and COMING SOON */}
                  <div className="w-full aspect-[2/3] bg-gray-100 rounded-lg flex flex-col items-center justify-center gap-[clamp(8px,1.2vw,10px)]">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(40px,6vw,56px)] h-[clamp(40px,6vw,56px)] text-gray-400">
                      <path d="M3 18L7 14L10 17L14 12L17 15L21 11V20H3V18Z" fill="currentColor" fillOpacity="0.2"/>
                      <path d="M3 18L7 14L10 17L14 12L17 15L21 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="18" cy="6" r="2.5" fill="currentColor" fillOpacity="0.4"/>
                      <path d="M18 3.5C18.2761 3.5 18.5 3.72386 18.5 4C18.5 4.27614 18.2761 4.5 18 4.5C17.7239 4.5 17.5 4.27614 17.5 4C17.5 3.72386 17.7239 3.5 18 3.5Z" fill="currentColor"/>
                    </svg>
                    <span className="text-[clamp(10px,1.4vw,12px)] font-semibold text-gray-500 uppercase tracking-wide">COMING SOON</span>
                  </div>
                  {/* Since Text Below Gray Box */}
                  <div className="text-[clamp(11px,1.6vw,13px)] text-gray-400 text-center">Since {vendor.since}</div>
                </div>

                {/* Right Side - Vendor Details */}
                <div className="flex-1 flex flex-col gap-[clamp(8px,1.2vw,10px)] min-w-0">
                  <h3 className="text-[clamp(18px,2.8vw,22px)] font-bold text-[#13335a] m-0 leading-tight">{vendor.name}</h3>
                  
                  <div className="flex items-center gap-[clamp(4px,0.75vw,6px)] text-[clamp(13px,2vw,15px)] text-black font-bold">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(13px,2vw,15px)] h-[clamp(13px,2vw,15px)] flex-shrink-0">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#E10129"/>
                    </svg>
                    <span>{vendor.address}</span>
                  </div>

                  <div className="inline-block px-[clamp(10px,1.5vw,12px)] py-[clamp(5px,0.7vw,7px)] bg-gray-100 rounded-lg text-[clamp(11px,1.6vw,13px)] font-semibold text-gray-700 w-fit">
                    {vendor.category}
                  </div>

                  <div className="flex items-center gap-[clamp(4px,0.75vw,6px)] text-[clamp(13px,2vw,15px)] text-blue-500 font-semibold">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(13px,2vw,15px)] h-[clamp(13px,2vw,15px)] flex-shrink-0">
                      <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{vendor.services}</span>
                  </div>

                  <div className="text-[clamp(13px,2vw,15px)] text-black font-bold">{vendor.hours}</div>
                </div>
              </div>

              {/* Action Buttons - Separate Section Below */}
              <div className="px-[clamp(16px,2.5vw,20px)] pb-[clamp(16px,2.5vw,20px)] pt-0" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-row gap-[clamp(6px,1vw,8px)] w-full">
                  <button className="flex-1 flex items-center justify-center gap-[clamp(4px,0.75vw,6px)] py-[clamp(10px,1.5vw,12px)] px-[clamp(8px,1.2vw,12px)] rounded-lg text-[clamp(11px,1.6vw,13px)] font-bold cursor-pointer transition-all bg-[#13335a] text-white hover:bg-[#1e4a7a] min-w-0" onClick={() => handleCall(vendor.phone)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(14px,2vw,16px)] h-[clamp(14px,2vw,16px)] flex-shrink-0">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2126 21.3518 21.3992C21.1463 21.5858 20.9033 21.7262 20.6381 21.811C20.3729 21.8958 20.0922 21.9231 19.815 21.891C16.7428 21.5856 13.786 20.5341 11.19 18.82C8.77382 17.3148 6.72533 15.2663 5.22 12.85C3.49997 10.2412 2.44824 7.27099 2.15 4.18C2.11793 3.90322 2.14518 3.62281 2.22981 3.35788C2.31444 3.09295 2.45452 2.85002 2.64082 2.64458C2.82712 2.43914 3.05531 2.27554 3.31007 2.16389C3.56483 2.05224 3.84034 1.99508 4.119 2H7.119C7.59357 1.99522 8.05808 2.16708 8.43322 2.49055C8.80836 2.81402 9.07173 3.27236 9.179 3.78L9.88 6.75C9.98603 7.24195 9.93842 7.75767 9.74447 8.22293C9.55052 8.68819 9.21969 9.08114 8.8 9.35L7.33 10.28C8.47697 12.3301 10.1699 14.023 12.22 15.17L13.15 13.71C13.4201 13.2908 13.8132 12.9602 14.2784 12.7663C14.7436 12.5724 15.2591 12.5247 15.75 12.63L18.71 13.33C19.2176 13.4373 19.676 13.7007 19.9995 14.0758C20.323 14.4509 20.4948 14.9154 20.49 15.39L22 19.39Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="whitespace-nowrap">Call</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-[clamp(4px,0.75vw,6px)] py-[clamp(10px,1.5vw,12px)] px-[clamp(8px,1.2vw,12px)] rounded-lg text-[clamp(11px,1.6vw,13px)] font-bold cursor-pointer transition-all border border-gray-200 bg-white text-green-500 hover:bg-green-50 min-w-0" onClick={() => handleChat(vendor.whatsapp)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(14px,2vw,16px)] h-[clamp(14px,2vw,16px)] flex-shrink-0">
                      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="whitespace-nowrap">Chat</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-[clamp(4px,0.75vw,6px)] py-[clamp(10px,1.5vw,12px)] px-[clamp(8px,1.2vw,12px)] rounded-lg text-[clamp(11px,1.6vw,13px)] font-bold cursor-pointer transition-all border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 min-w-0" onClick={() => handleDirection(vendor.address)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(14px,2vw,16px)] h-[clamp(14px,2vw,16px)] flex-shrink-0">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="whitespace-nowrap">Direction</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default VendorListPage

