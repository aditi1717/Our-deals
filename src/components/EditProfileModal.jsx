import { useState, useEffect } from 'react'

function EditProfileModal({ isOpen, onClose, userData, onUpdate }) {
  const [name, setName] = useState('')

  useEffect(() => {
    if (isOpen && userData) {
      setName(userData.name || '')
    }
  }, [isOpen, userData])

  if (!isOpen) return null

  const handleUpdate = () => {
    if (name.trim()) {
      const updatedData = {
        ...userData,
        name: name.trim()
      }
      if (onUpdate) {
        onUpdate(updatedData)
      }
      onClose()
    }
  }

  const handleCancel = () => {
    setName(userData?.name || '')
    onClose()
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-[8px] z-[10002] animate-[fadeIn_0.3s_ease-in-out]" onClick={handleCancel}></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[clamp(12px,1.6vw,16px)] shadow-[0_20px_60px_rgba(0,0,0,0.3)] w-[90%] max-w-[400px] md:w-[95%] z-[10003] animate-[modalFadeIn_0.3s_ease-out] overflow-hidden p-[clamp(16px,2vw,24px)] md:p-[clamp(16px,2vw,20px)]" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-[clamp(18px,2.5vw,24px)] font-bold text-[#13335a] m-0 mb-[clamp(16px,2vw,24px)] text-center leading-[1.3]">Edit Profile</h2>
        
        <div className="flex justify-center mb-[clamp(16px,2vw,24px)]">
          <div className="relative w-[clamp(70px,10vw,100px)] h-[clamp(70px,10vw,100px)] rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-[clamp(32px,5vw,48px)] font-bold text-gray-500">
              {name ? name.charAt(0).toUpperCase() : (userData?.name ? userData.name.charAt(0).toUpperCase() : 'U')}
            </span>
            <div className="absolute bottom-0 right-0 w-[clamp(24px,3.5vw,32px)] h-[clamp(24px,3.5vw,32px)] rounded-full bg-[#13335a] flex items-center justify-center text-white border-[clamp(2px,0.3vw,3px)] border-white cursor-pointer transition-colors hover:bg-[#0f2440]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(12px,1.6vw,16px)] h-[clamp(12px,1.6vw,16px)]">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.50023C18.8978 2.10243 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.10243 21.5 2.50023C21.8978 2.89804 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.10243 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-[clamp(16px,2vw,24px)]">
          <div className="flex items-center border-[clamp(1.5px,0.2vw,2px)] border-gray-200 rounded-[clamp(6px,0.8vw,8px)] py-[clamp(10px,1.2vw,12px)] px-[clamp(12px,1.5vw,16px)] transition-colors bg-white focus-within:border-[#13335a]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500 mr-[clamp(8px,1vw,12px)] flex-shrink-0 w-[clamp(16px,2vw,20px)] h-[clamp(16px,2vw,20px)]">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              className="flex-1 border-none outline-none text-[clamp(14px,1.6vw,16px)] text-[#1a1a1a] bg-transparent leading-[1.5] placeholder:text-gray-400 placeholder:text-[clamp(14px,1.6vw,16px)]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[clamp(8px,1vw,12px)]">
          <button className="w-full bg-[#13335a] text-white border-none py-[clamp(12px,1.4vw,14px)] px-[clamp(20px,2.5vw,24px)] rounded-[clamp(6px,0.8vw,8px)] font-semibold text-[clamp(14px,1.6vw,16px)] cursor-pointer transition-colors leading-[1.5] hover:bg-[#0f2440] disabled:bg-gray-400 disabled:cursor-not-allowed" onClick={handleUpdate} disabled={!name.trim()}>
            Update
          </button>
          <button className="w-full bg-transparent border-none text-gray-500 text-[clamp(12px,1.4vw,14px)] font-medium cursor-pointer p-[clamp(6px,0.8vw,8px)] transition-colors leading-[1.5] hover:text-gray-700" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  )
}

export default EditProfileModal

