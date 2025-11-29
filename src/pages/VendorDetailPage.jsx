import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaPhone, FaWhatsapp, FaDirections, FaShare } from 'react-icons/fa'

function VendorDetailPage() {
  const navigate = useNavigate()
  const { vendorId } = useParams()
  const [activeTab, setActiveTab] = useState('Overview')
  const [selectedRating, setSelectedRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)

  // Sample vendor data - In real app, this would be fetched based on vendorId
  // This matches the vendors from VendorListPage
  const allVendors = [
    {
      id: 1,
      name: 'Test Services',
      rating: 5.0,
      ratingsCount: 7,
      address: '123 MG Road, Indore',
      city: 'Indore',
      yearsInBusiness: 4,
      hours: 'Open 24 Hrs',
      phone: '1234567890',
      email: 'test@example.com',
      whatsapp: '1234567890',
      services: [
        { icon: 'list', text: '24 Hours Services Available' },
        { icon: 'lightning', text: 'Respond in 25 mins.' }
      ],
      category: 'Grocery Store'
    },
    {
      id: 2,
      name: 'City Mart Supermarket',
      rating: 4.8,
      ratingsCount: 12,
      address: '456 AB Road, Indore',
      city: 'Indore',
      yearsInBusiness: 6,
      hours: 'Open: 8:00 AM – 10:00 PM',
      phone: '9876543210',
      email: 'citymart@example.com',
      whatsapp: '9876543210',
      services: [
        { icon: 'list', text: 'Home Delivery Available' },
        { icon: 'lightning', text: 'Fast Delivery Service' }
      ],
      category: 'Supermarket'
    }
  ]

  // Find vendor by ID or use default
  const vendorData = allVendors.find(v => v.id === parseInt(vendorId)) || {
    id: 1,
    name: 'vivek',
    rating: 5.0,
    ratingsCount: 7,
    address: '123 MG Road, Indore',
    city: 'Indore',
    yearsInBusiness: 9,
    hours: 'Open 24 Hrs',
    phone: '9876543255',
    email: 'vivek12@example.com',
    whatsapp: '9876543255',
    services: [
      { icon: 'list', text: 'Cooling Solution good.' },
      { icon: 'lightning', text: 'Respond in 25 mins.' }
    ],
    category: 'Grocery Store'
  }

  const handleCall = () => {
    window.location.href = `tel:+91${vendorData.phone}`
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/91${vendorData.whatsapp.replace(/[^0-9]/g, '')}`, '_blank')
  }

  const handleDirection = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(vendorData.address)}`, '_blank')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: vendorData.name,
        text: `Check out ${vendorData.name} at ${vendorData.address}`,
        url: window.location.href
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  const tabs = ['Overview', 'Reviews', 'Quick Info']

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#13335a] to-[#1e4a7a] p-[clamp(12px,2.5vw,20px)_clamp(16px,3vw,24px)] flex justify-between items-center sticky top-0 z-10 flex-shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.15)] backdrop-blur-[10px] md:p-[clamp(12px,2vw,16px)]">
        <button className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center transition-colors rounded-full w-[clamp(28px,4vw,32px)] h-[clamp(28px,4vw,32px)] hover:bg-white/20" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(20px,3vw,24px)] h-[clamp(20px,3vw,24px)]">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="text-[clamp(18px,3vw,24px)] font-bold text-white m-0 flex-1 text-center">About Service</h2>
        <div className="w-6"></div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden p-[clamp(16px,3vw,24px)] pb-[120px] [-webkit-overflow-scrolling:touch] md:p-[clamp(14px,2vw,18px)] md:pb-[100px]">
        {/* Main Vendor Card */}
        <div className="bg-gradient-to-br from-[#F2E8F0] via-[#DEDCE9] via-[#BCC6E1] to-[#98B0D6] rounded-[clamp(16px,2.5vw,20px)] shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-none overflow-hidden mb-[clamp(16px,3vw,24px)]">
          {/* Details and Image Section */}
          <div className="flex gap-[clamp(16px,2.5vw,24px)] p-[clamp(20px,4vw,32px)] bg-white/30 min-w-0 overflow-hidden md:flex-row md:p-[clamp(12px,2vw,16px)] md:gap-[clamp(12px,2vw,16px)]">
            <div className="flex-1 flex flex-col gap-[clamp(16px,2.5vw,20px)] min-w-0 overflow-hidden">
              <div className="flex flex-col gap-[clamp(6px,1vw,8px)]">
                <div className="flex items-center gap-[clamp(6px,1vw,8px)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1a1a1a] w-[clamp(16px,2.5vw,20px)] h-[clamp(16px,2.5vw,20px)]">
                    <path d="M7 11L12 2L17 11M7 11H17M7 11L12 14L17 11M17 18H7L12 22L17 18Z" fill="currentColor"/>
                  </svg>
                  <h1 className="text-[clamp(20px,3.5vw,28px)] font-bold text-[#1a1a1a] m-0 tracking-[-0.5px]">{vendorData.name}</h1>
                </div>
                <div className="flex items-center gap-[clamp(6px,1vw,8px)]">
                  <div className="flex items-center gap-[clamp(3px,0.5vw,4px)] bg-[#31652E] text-white p-[clamp(5px,0.75vw,6px)_clamp(10px,1.5vw,12px)] rounded-lg font-bold text-[clamp(13px,1.9vw,15px)]">
                    <span>{vendorData.rating}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-[clamp(14px,2vw,16px)] h-[clamp(14px,2vw,16px)]">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <span className="text-[clamp(13px,1.9vw,15px)] text-black font-bold">{vendorData.ratingsCount} Ratings</span>
                </div>
              </div>

              <div className="flex flex-col gap-[clamp(6px,1vw,8px)] mt-[clamp(3px,0.5vw,4px)]">
                <p className="text-[clamp(13px,1.9vw,15px)] text-[#9E9BA6] m-0 font-medium">{vendorData.address}</p>
                <p className="text-[clamp(13px,1.9vw,15px)] text-black m-0 font-medium">{vendorData.yearsInBusiness} Years in Business</p>
                <p className="inline-block text-[#31652E] text-[clamp(13px,1.9vw,15px)] font-medium mt-[clamp(2px,0.25vw,2px)]">{vendorData.hours}</p>
              </div>

              <div className="flex flex-col gap-[clamp(10px,1.5vw,12px)] mt-[clamp(3px,0.5vw,4px)]">
                {vendorData.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-[clamp(8px,1.25vw,10px)] text-[clamp(13px,1.9vw,15px)] text-gray-700 font-medium">
                    {service.icon === 'list' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-[clamp(14px,2vw,16px)] h-[clamp(14px,2vw,16px)]">
                        <path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {service.icon === 'lightning' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-[clamp(14px,2vw,16px)] h-[clamp(14px,2vw,16px)]">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    <span className="whitespace-nowrap">{service.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 w-[clamp(80px,15vw,150px)] md:w-auto md:flex-shrink-0 md:min-w-0">
              <div className="w-[clamp(80px,15vw,150px)] h-[clamp(120px,22.5vw,225px)] bg-gray-50 rounded-xl flex flex-col items-center justify-center gap-[clamp(8px,1.25vw,10px)] text-gray-400 border-2 border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.05)] md:w-[197px] md:h-[296px] md:m-0 md:aspect-auto">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(48px,8vw,64px)] h-[clamp(48px,8vw,64px)]">
                  <path d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[clamp(8px,1.25vw,10px)] font-semibold text-gray-500 uppercase tracking-[0.5px]">COMING SOON</span>
              </div>
            </div>
          </div>

          {/* Icons Container - Separate Section Below */}
          <div className="px-[clamp(20px,4vw,32px)] pb-[clamp(20px,4vw,32px)] pt-0 bg-white/30 md:px-[clamp(12px,2vw,16px)] md:pb-[clamp(12px,2vw,16px)]">
            <div className="flex gap-[clamp(10px,1.5vw,12px)] justify-start md:gap-[clamp(6px,1vw,8px)] md:overflow-x-auto md:[-webkit-overflow-scrolling:touch] md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden">
              <button className="flex flex-col items-center justify-center gap-[clamp(8px,1.25vw,10px)] p-0 border-none bg-transparent text-black text-[clamp(11px,1.6vw,13px)] font-medium cursor-pointer transition-all flex-shrink-0 hover:opacity-80 md:flex-shrink-0 md:min-w-auto" onClick={handleCall}>
                <div className="w-[clamp(48px,6vw,60px)] h-[clamp(48px,6vw,60px)] bg-[#E6EAF3] rounded-xl flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.1)] md:w-[clamp(40px,10vw,50px)] md:h-[clamp(40px,10vw,50px)]">
                  <FaPhone className="w-[clamp(20px,2.5vw,24px)] h-[clamp(20px,2.5vw,24px)] text-black md:w-[clamp(18px,4vw,20px)] md:h-[clamp(18px,4vw,20px)]" />
                </div>
                <span>Call Now</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-[clamp(8px,1.25vw,10px)] p-0 border-none bg-transparent text-black text-[clamp(11px,1.6vw,13px)] font-medium cursor-pointer transition-all flex-shrink-0 hover:opacity-80 md:flex-shrink-0 md:min-w-auto" onClick={handleWhatsApp}>
                <div className="w-[clamp(48px,6vw,60px)] h-[clamp(48px,6vw,60px)] bg-[#E6EAF3] rounded-xl flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.1)] md:w-[clamp(40px,10vw,50px)] md:h-[clamp(40px,10vw,50px)]">
                  <div className="w-[clamp(32px,4vw,40px)] h-[clamp(32px,4vw,40px)] rounded-full border-2 border-black flex items-center justify-center md:w-[clamp(28px,6vw,32px)] md:h-[clamp(28px,6vw,32px)]">
                    <FaPhone className="w-[clamp(20px,2.5vw,24px)] h-[clamp(20px,2.5vw,24px)] text-black md:w-[clamp(18px,4vw,20px)] md:h-[clamp(18px,4vw,20px)]" />
                  </div>
                </div>
                <span>Whatsapp</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-[clamp(8px,1.25vw,10px)] p-0 border-none bg-transparent text-black text-[clamp(11px,1.6vw,13px)] font-medium cursor-pointer transition-all flex-shrink-0 hover:opacity-80 md:flex-shrink-0 md:min-w-auto" onClick={handleDirection}>
                <div className="w-[clamp(48px,6vw,60px)] h-[clamp(48px,6vw,60px)] bg-[#E6EAF3] rounded-xl flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.1)] md:w-[clamp(40px,10vw,50px)] md:h-[clamp(40px,10vw,50px)]">
                  <FaDirections className="w-[clamp(20px,2.5vw,24px)] h-[clamp(20px,2.5vw,24px)] text-black md:w-[clamp(18px,4vw,20px)] md:h-[clamp(18px,4vw,20px)]" />
                </div>
                <span>Direction</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-[clamp(8px,1.25vw,10px)] p-0 border-none bg-transparent text-black text-[clamp(11px,1.6vw,13px)] font-medium cursor-pointer transition-all flex-shrink-0 hover:opacity-80 md:flex-shrink-0 md:min-w-auto" onClick={handleShare}>
                <div className="w-[clamp(48px,6vw,60px)] h-[clamp(48px,6vw,60px)] bg-[#E6EAF3] rounded-xl flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.1)] md:w-[clamp(40px,10vw,50px)] md:h-[clamp(40px,10vw,50px)]">
                  <FaShare className="w-[clamp(20px,2.5vw,24px)] h-[clamp(20px,2.5vw,24px)] text-black md:w-[clamp(18px,4vw,20px)] md:h-[clamp(18px,4vw,20px)]" />
                </div>
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-t border-b border-gray-200/80 bg-gradient-to-b from-white to-gray-50 backdrop-blur-[10px] md:overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`flex-1 p-[clamp(12px,2vw,16px)] border-none bg-transparent text-[clamp(14px,2vw,16px)] font-bold cursor-pointer transition-all border-b-[3px] border-transparent relative md:whitespace-nowrap md:p-[clamp(10px,1.5vw,12px)_clamp(14px,2vw,16px)] md:text-[clamp(12px,1.75vw,14px)] ${
                  activeTab === tab 
                    ? 'text-[#13335a] border-b-[#13335a] bg-white' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-[clamp(20px,4vw,32px)] pb-0 min-h-[200px] bg-white">
            {activeTab === 'Overview' && (
              <div className="flex flex-col gap-[clamp(16px,2.5vw,20px)]">
                <div className="flex items-center gap-[clamp(10px,1.5vw,12px)]">
                  <span className="text-[clamp(13px,1.9vw,15px)] font-bold text-[#1a1a1a] min-w-[clamp(70px,11.25vw,90px)]">City:</span>
                  <span className="text-[clamp(13px,1.9vw,15px)] text-gray-700 font-medium">{vendorData.city}</span>
                </div>
                <div className="flex items-center gap-[clamp(10px,1.5vw,12px)]">
                  <span className="text-[clamp(13px,1.9vw,15px)] font-bold text-[#1a1a1a] min-w-[clamp(70px,11.25vw,90px)]">Contact:</span>
                  <div className="flex items-center gap-[clamp(6px,1vw,8px)] text-[clamp(13px,1.9vw,15px)] text-gray-700 font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(14px,2vw,16px)] h-[clamp(14px,2vw,16px)] text-gray-500">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2126 21.3518 21.3992C21.1463 21.5858 20.9033 21.7262 20.6381 21.811C20.3729 21.8958 20.0922 21.9231 19.815 21.891C16.7428 21.5856 13.786 20.5341 11.19 18.82C8.77382 17.3148 6.72533 15.2663 5.22 12.85C3.49997 10.2412 2.44824 7.27099 2.15 4.18C2.11793 3.90322 2.14518 3.62281 2.22981 3.35788C2.31444 3.09295 2.45452 2.85002 2.64082 2.64458C2.82712 2.43914 3.05531 2.27554 3.31007 2.16389C3.56483 2.05224 3.84034 1.99508 4.119 2H7.119C7.59357 1.99522 8.05808 2.16708 8.43322 2.49055C8.80836 2.81402 9.07173 3.27236 9.179 3.78L9.88 6.75C9.98603 7.24195 9.93842 7.75767 9.74447 8.22293C9.55052 8.68819 9.21969 9.08114 8.8 9.35L7.33 10.28C8.47697 12.3301 10.1699 14.023 12.22 15.17L13.15 13.71C13.4201 13.2908 13.8132 12.9602 14.2784 12.7663C14.7436 12.5724 15.2591 12.5247 15.75 12.63L18.71 13.33C19.2176 13.4373 19.676 13.7007 19.9995 14.0758C20.323 14.4509 20.4948 14.9154 20.49 15.39L22 19.39Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{vendorData.phone}</span>
                  </div>
                </div>
                <div className="flex items-center gap-[clamp(10px,1.5vw,12px)]">
                  <span className="text-[clamp(13px,1.9vw,15px)] font-bold text-[#1a1a1a] min-w-[clamp(70px,11.25vw,90px)]">Email:</span>
                  <div className="flex items-center gap-[clamp(6px,1vw,8px)] text-[clamp(13px,1.9vw,15px)] text-gray-700 font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(14px,2vw,16px)] h-[clamp(14px,2vw,16px)] text-gray-500">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{vendorData.email}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Reviews' && (
              <div className="flex flex-col gap-[clamp(20px,3vw,24px)]">
                <h3 className="text-[clamp(16px,2.5vw,20px)] font-bold text-[#1a1a1a] m-0">Start Review</h3>
                <div className="flex flex-col gap-[clamp(10px,1.5vw,12px)]">
                  <div className="flex gap-[clamp(6px,1vw,8px)] items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center transition-transform hover:scale-110"
                        onClick={() => setSelectedRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                      >
                        <svg 
                          width="32" 
                          height="32" 
                          viewBox="0 0 24 24" 
                          fill={star <= (hoveredRating || selectedRating) ? "#fbbf24" : "none"}
                          stroke={star <= (hoveredRating || selectedRating) ? "#fbbf24" : "#d1d5db"}
                          strokeWidth="2"
                          className="w-[clamp(24px,4vw,32px)] h-[clamp(24px,4vw,32px)]"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                        </svg>
                      </button>
                    ))}
                  </div>
                  <p className="text-[clamp(12px,1.75vw,14px)] text-gray-500 m-0 font-normal">Tap a star to rate</p>
                </div>

                <h3 className="text-[clamp(16px,2.5vw,20px)] font-bold text-[#1a1a1a] m-0 mt-[clamp(6px,1vw,8px)]">User Reviews</h3>
                <div className="flex flex-col items-center justify-center gap-[clamp(10px,1.5vw,12px)] p-[clamp(30px,5vw,40px)_clamp(16px,2.5vw,20px)] text-gray-400">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(48px,8vw,64px)] h-[clamp(48px,8vw,64px)]">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 9L12 12L17 9" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[clamp(12px,1.75vw,14px)] text-gray-500 m-0">No reviews yet</p>
                </div>
              </div>
            )}

            {activeTab === 'Quick Info' && (
              <div className="flex flex-col">
                <div className="flex flex-col gap-[clamp(16px,2.5vw,20px)]">
                  <div className="flex justify-between items-start pb-[clamp(16px,2.5vw,20px)] border-b border-gray-200 last:border-b-0 last:pb-0">
                    <span className="text-[clamp(12px,1.75vw,14px)] font-bold text-[#1a1a1a] mb-[clamp(3px,0.5vw,4px)]">Address</span>
                    <span className="text-[clamp(13px,1.9vw,15px)] text-gray-700 font-medium">{vendorData.address}</span>
                  </div>
                  <div className="flex justify-between items-start pb-[clamp(16px,2.5vw,20px)] border-b border-gray-200 last:border-b-0 last:pb-0">
                    <span className="text-[clamp(12px,1.75vw,14px)] font-bold text-[#1a1a1a] mb-[clamp(3px,0.5vw,4px)]">Contacts</span>
                    <span className="text-[clamp(13px,1.9vw,15px)] text-gray-700 font-medium">{vendorData.phone}</span>
                  </div>
                  <div className="flex justify-between items-start pb-[clamp(16px,2.5vw,20px)] border-b border-gray-200 last:border-b-0 last:pb-0 cursor-pointer transition-colors p-[clamp(10px,1.5vw,12px)] m-[clamp(-10px,-1.5vw,-12px)] rounded-lg hover:bg-gray-50">
                    <div className="flex flex-col gap-[clamp(3px,0.5vw,4px)] flex-1">
                      <span className="text-[clamp(12px,1.75vw,14px)] font-bold text-[#1a1a1a] mb-[clamp(3px,0.5vw,4px)]">Business Hours</span>
                      <span className="text-[clamp(13px,1.9vw,15px)] text-gray-700 font-medium">Open Now: {vendorData.hours}</span>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex justify-between items-start pb-[clamp(16px,2.5vw,20px)] border-b border-gray-200 last:border-b-0 last:pb-0">
                    <span className="text-[clamp(12px,1.75vw,14px)] font-bold text-[#1a1a1a] mb-[clamp(3px,0.5vw,4px)]">Year of Establishment</span>
                    <span className="text-[clamp(13px,1.9vw,15px)] text-gray-700 font-medium">{new Date().getFullYear() - vendorData.yearsInBusiness}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Buttons */}
          <div className="relative bg-[#13335a] flex gap-[clamp(10px,1.5vw,12px)] p-[clamp(12px,2vw,16px)] mt-0 mb-0 shadow-[0_-2px_8px_rgba(0,0,0,0.1)] border-none rounded-b-[clamp(16px,2.5vw,20px)] w-full box-border overflow-visible visible opacity-100 md:p-[clamp(10px,1.5vw,12px)] md:relative md:mt-0 md:mb-0 md:flex md:visible md:opacity-100 md:w-full md:box-border md:overflow-visible">
            <button className="flex-1 flex items-center justify-center gap-[clamp(8px,1.25vw,10px)] p-[clamp(12px,2vw,16px)_clamp(18px,3vw,24px)] border-none rounded-[10px] text-[clamp(14px,2vw,16px)] font-bold cursor-pointer transition-all shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-[#13335a] text-white hover:bg-[#0f2440] hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)] md:p-[clamp(10px,1.5vw,12px)_clamp(14px,2vw,16px)] md:text-[clamp(12px,1.75vw,14px)] md:flex md:flex-1 md:min-w-0 md:overflow-visible" onClick={handleCall}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(16px,2.5vw,20px)] h-[clamp(16px,2.5vw,20px)]">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2126 21.3518 21.3992C21.1463 21.5858 20.9033 21.7262 20.6381 21.811C20.3729 21.8958 20.0922 21.9231 19.815 21.891C16.7428 21.5856 13.786 20.5341 11.19 18.82C8.77382 17.3148 6.72533 15.2663 5.22 12.85C3.49997 10.2412 2.44824 7.27099 2.15 4.18C2.11793 3.90322 2.14518 3.62281 2.22981 3.35788C2.31444 3.09295 2.45452 2.85002 2.64082 2.64458C2.82712 2.43914 3.05531 2.27554 3.31007 2.16389C3.56483 2.05224 3.84034 1.99508 4.119 2H7.119C7.59357 1.99522 8.05808 2.16708 8.43322 2.49055C8.80836 2.81402 9.07173 3.27236 9.179 3.78L9.88 6.75C9.98603 7.24195 9.93842 7.75767 9.74447 8.22293C9.55052 8.68819 9.21969 9.08114 8.8 9.35L7.33 10.28C8.47697 12.3301 10.1699 14.023 12.22 15.17L13.15 13.71C13.4201 13.2908 13.8132 12.9602 14.2784 12.7663C14.7436 12.5724 15.2591 12.5247 15.75 12.63L18.71 13.33C19.2176 13.4373 19.676 13.7007 19.9995 14.0758C20.323 14.4509 20.4948 14.9154 20.49 15.39L22 19.39Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Call Now</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-[clamp(8px,1.25vw,10px)] p-[clamp(12px,2vw,16px)_clamp(18px,3vw,24px)] border-none rounded-[10px] text-[clamp(14px,2vw,16px)] font-bold cursor-pointer transition-all shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-[#13335a] text-white hover:bg-[#0f2440] hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)] md:p-[clamp(10px,1.5vw,12px)_clamp(14px,2vw,16px)] md:text-[clamp(12px,1.75vw,14px)] md:flex md:flex-1 md:min-w-0 md:overflow-visible" onClick={handleWhatsApp}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(16px,2.5vw,20px)] h-[clamp(16px,2.5vw,20px)]">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <span>Chat Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorDetailPage

