import { useNavigate } from 'react-router-dom'

function CallEnquiryPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white flex flex-col pb-20">
      {/* Header - Fixed on Top */}
      <div className="bg-gradient-to-br from-[#13335a] to-[#1e4a7a] px-[clamp(16px,2vw,24px)] py-[clamp(16px,2vw,20px)] flex justify-between items-center fixed top-0 left-0 right-0 z-[1000] rounded-b-[clamp(12px,1.5vw,16px)] md:rounded-none shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
        <button className="bg-transparent border-none cursor-pointer p-[clamp(3px,0.4vw,4px)] flex items-center justify-center transition-colors rounded-full w-[clamp(28px,3.5vw,32px)] h-[clamp(28px,3.5vw,32px)] text-white hover:bg-white/20" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(20px,2.5vw,24px)] h-[clamp(20px,2.5vw,24px)]">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="text-[clamp(18px,2.5vw,24px)] md:text-[clamp(16px,2vw,20px)] font-bold text-white m-0 flex-1 text-center leading-[1.3]">Call Enquiry</h2>
        <div style={{ width: '24px' }}></div>
      </div>

      {/* Content with top margin to clear fixed header */}
      <div className="flex-1 flex items-center justify-center px-[clamp(20px,2.5vw,32px)] py-[clamp(40px,5vw,60px)] min-h-[calc(100vh-clamp(60px,10vw,80px)-80px)] mt-[clamp(70px,10vw,90px)] md:mt-[clamp(60px,8vw,80px)]">
        <p className="text-[clamp(16px,2vw,18px)] md:text-[clamp(14px,1.8vw,16px)] text-gray-500 text-center m-0 font-normal">No call enquiries found.</p>
      </div>
    </div>
  )
}

export default CallEnquiryPage

