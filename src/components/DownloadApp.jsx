import clientLogo from '../assets/Client logo.png'

function DownloadApp({ isMobile = false }) {
  return (
    <div className={`flex items-center gap-0 flex-shrink-0 relative z-[999] ml-auto ${isMobile ? 'md:hidden' : 'hidden md:flex'}`}>
      <button className="flex items-center justify-center bg-white text-black border border-black rounded-l-lg py-[clamp(6px,0.8vw,10px)] px-[clamp(10px,1.2vw,16px)] cursor-pointer transition-colors whitespace-nowrap font-semibold text-[clamp(11px,1.2vw,14px)] border-r-0 hover:bg-gray-50">
        <span className="text-black font-semibold">Download App</span>
      </button>
      <div className="flex items-center justify-center bg-white border border-black rounded-r-lg w-[clamp(32px,4vw,48px)] h-[clamp(28px,3.5vw,42px)] relative flex-shrink-0">
        <div className="w-[clamp(26px,3.2vw,38px)] h-[clamp(26px,3.2vw,38px)] bg-[#1C96E4] border border-black rounded-md relative overflow-hidden flex items-center justify-center">
          <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-[30%] h-[clamp(2px,0.3vw,3px)] bg-black rounded-b-sm z-[2]"></div>
          <div className="w-full h-full p-0 absolute top-0 left-0 block z-[1] flex items-center justify-center">
            <img src={clientLogo} alt="Our Deals" className="w-[calc(100%-clamp(4px,0.5vw,8px))] h-[calc(100%-clamp(4px,0.5vw,8px))] object-contain block absolute top-[clamp(2px,0.3vw,4px)] left-[clamp(2px,0.3vw,4px)] z-[1] p-[clamp(2px,0.3vw,4px)]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadApp

