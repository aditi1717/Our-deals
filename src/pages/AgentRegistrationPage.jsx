import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AgentRegistrationPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    profilePhoto: null,
    mobileNumber: '',
    alternateMobileNumber: '',
    email: '',
    permanentAddress: '',
    agreeToTerms: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        profilePhoto: file
      }))
    }
  }

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validate mobile number (10 digits)
  const isValidMobileNumber = (mobile) => {
    return /^\d{10}$/.test(mobile)
  }

  // Check if form is valid
  const isFormValid = () => {
    return (
      formData.fullName.trim() !== '' &&
      formData.dateOfBirth !== '' &&
      formData.gender !== '' &&
      isValidMobileNumber(formData.mobileNumber) &&
      isValidEmail(formData.email) &&
      formData.permanentAddress.trim() !== '' &&
      formData.agreeToTerms === true
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid()) {
      console.log('Form submitted:', formData)
      // Handle form submission here
      // navigate('/success') or show success message
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-20">
      <div className="bg-gradient-to-br from-[#13335a] to-[#1e4a7a] px-[clamp(16px,2vw,24px)] py-[clamp(16px,2vw,20px)] flex justify-between items-center sticky top-0 z-10 flex-shrink-0 md:fixed md:top-0 md:left-0 md:right-0 md:z-[1000] md:w-full md:shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
        <button className="bg-transparent border-none cursor-pointer p-[clamp(3px,0.4vw,4px)] flex items-center justify-center transition-colors rounded-full w-[clamp(28px,3.5vw,32px)] h-[clamp(28px,3.5vw,32px)] text-white hover:bg-white/20" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(20px,2.5vw,24px)] h-[clamp(20px,2.5vw,24px)]">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="text-[clamp(18px,2.5vw,24px)] md:text-[clamp(16px,2vw,20px)] font-bold text-white m-0 flex-1 text-center leading-[1.3]">Agent Registration Form</h2>
        <div style={{ width: '24px' }}></div>
      </div>

      <form className="flex-1 px-[clamp(16px,2vw,20px)] py-[clamp(20px,2.5vw,24px)] max-w-[600px] mx-auto w-full md:mt-[clamp(50px,8vw,70px)]" onSubmit={handleSubmit}>
        {/* AGENT PERSONAL DETAILS */}
        <div className="mb-[clamp(24px,3vw,32px)]">
          <h3 className="text-[clamp(16px,2vw,18px)] md:text-[clamp(14px,1.8vw,16px)] font-bold text-[#13335a] m-0 mb-[clamp(16px,2vw,20px)] uppercase tracking-[0.5px]">AGENT PERSONAL DETAILS</h3>
          
          <div className="mb-[clamp(16px,2vw,20px)]">
            <label className="block text-[clamp(14px,1.6vw,16px)] font-bold text-black mb-[clamp(6px,0.8vw,8px)]">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full border-[1.5px] border-gray-200 rounded-[clamp(6px,0.8vw,8px)] py-[clamp(10px,1.2vw,12px)] px-[clamp(12px,1.5vw,16px)] text-[clamp(14px,1.6vw,16px)] md:text-[clamp(14px,1.8vw,16px)] text-[#1a1a1a] bg-white transition-colors box-border font-inherit focus:outline-none focus:border-[#13335a] placeholder:text-gray-400"
            />
          </div>

          <div className="mb-[clamp(16px,2vw,20px)]">
            <label className="block text-[clamp(14px,1.6vw,16px)] font-bold text-black mb-[clamp(6px,0.8vw,8px)]">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              placeholder="Tap to pick date"
              className="w-full border-[1.5px] border-gray-200 rounded-[clamp(6px,0.8vw,8px)] py-[clamp(10px,1.2vw,12px)] px-[clamp(12px,1.5vw,16px)] text-[clamp(14px,1.6vw,16px)] md:text-[clamp(14px,1.8vw,16px)] text-[#1a1a1a] bg-white transition-colors box-border font-inherit focus:outline-none focus:border-[#13335a] placeholder:text-gray-400"
            />
          </div>

          <div className="mb-[clamp(16px,2vw,20px)]">
            <label className="block text-[clamp(14px,1.6vw,16px)] font-bold text-black mb-[clamp(6px,0.8vw,8px)]">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full border-[1.5px] border-gray-200 rounded-[clamp(6px,0.8vw,8px)] py-[clamp(10px,1.2vw,12px)] px-[clamp(12px,1.5vw,16px)] pr-[clamp(36px,4.5vw,48px)] text-[clamp(14px,1.6vw,16px)] md:text-[clamp(14px,1.8vw,16px)] text-[#1a1a1a] bg-white transition-colors box-border font-inherit cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg_width=\\'12\\'_height=\\'8\\'_viewBox=\\'0_0_12_8\\'_fill=\\'none\\'_xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath_d=\\'M1_1L6_6L11_1\\'_stroke=\\'%236b7280\\'_stroke-width=\\'2\\'_stroke-linecap=\\'round\\'_stroke-linejoin=\\'round\\'/%3E%3C/svg%3E')] bg-no-repeat bg-[right_clamp(12px,1.5vw,16px)_center] focus:outline-none focus:border-[#13335a]"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-[clamp(16px,2vw,20px)]">
            <label className="block text-[clamp(14px,1.6vw,16px)] font-bold text-black mb-[clamp(6px,0.8vw,8px)]">Upload Profile Photo</label>
            <div className="border-[1.5px] border-dashed border-gray-200 rounded-[clamp(6px,0.8vw,8px)] p-[clamp(32px,4vw,48px)] px-[clamp(16px,2vw,24px)] bg-white flex flex-col items-center justify-center cursor-pointer transition-all min-h-[clamp(120px,15vw,160px)] hover:border-[#13335a] hover:bg-gray-50" onClick={() => document.getElementById('profilePhoto').click()}>
              {formData.profilePhoto ? (
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <img 
                    src={URL.createObjectURL(formData.profilePhoto)} 
                    alt="Profile preview" 
                    className="max-w-full max-h-[clamp(200px,25vw,300px)] rounded-[clamp(6px,0.8vw,8px)] object-cover mb-[clamp(8px,1vw,12px)]"
                  />
                  <span className="text-[clamp(12px,1.4vw,14px)] text-gray-500 text-center">Tap to change image</span>
                </div>
              ) : (
                <>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 mb-[clamp(8px,1vw,12px)]">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[clamp(14px,1.6vw,16px)] text-gray-500 text-center">Tap to select image</span>
                </>
              )}
              <input
                type="file"
                id="profilePhoto"
                name="profilePhoto"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input"
                style={{ display: 'none' }}
              />
            </div>
          </div>
        </div>

        {/* CONTACT DETAILS */}
        <div className="mb-[clamp(24px,3vw,32px)]">
          <h3 className="text-[clamp(16px,2vw,18px)] md:text-[clamp(14px,1.8vw,16px)] font-bold text-[#13335a] m-0 mb-[clamp(16px,2vw,20px)] uppercase tracking-[0.5px]">CONTACT DETAILS</h3>
          
          <div className="mb-[clamp(16px,2vw,20px)]">
            <label className="block text-[clamp(14px,1.6vw,16px)] font-bold text-black mb-[clamp(6px,0.8vw,8px)]">Mobile Number</label>
            <div className="relative">
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="w-full border-[1.5px] border-gray-200 rounded-[clamp(6px,0.8vw,8px)] py-[clamp(10px,1.2vw,12px)] px-[clamp(12px,1.5vw,16px)] text-[clamp(14px,1.6vw,16px)] md:text-[clamp(14px,1.8vw,16px)] text-[#1a1a1a] bg-white transition-colors box-border font-inherit focus:outline-none focus:border-[#13335a] placeholder:text-gray-400"
                maxLength="10"
              />
              <span className="absolute right-[clamp(12px,1.5vw,16px)] top-1/2 -translate-y-1/2 text-[clamp(12px,1.4vw,14px)] text-gray-500 pointer-events-none">{formData.mobileNumber.length}/10</span>
            </div>
          </div>

          <div className="mb-[clamp(16px,2vw,20px)]">
            <label className="block text-[clamp(14px,1.6vw,16px)] font-bold text-black mb-[clamp(6px,0.8vw,8px)]">Alternate Mobile Number</label>
            <div className="relative">
              <input
                type="tel"
                name="alternateMobileNumber"
                value={formData.alternateMobileNumber}
                onChange={handleInputChange}
                placeholder="Alternate Mobile Number"
                className="w-full border-[1.5px] border-gray-200 rounded-[clamp(6px,0.8vw,8px)] py-[clamp(10px,1.2vw,12px)] px-[clamp(12px,1.5vw,16px)] text-[clamp(14px,1.6vw,16px)] md:text-[clamp(14px,1.8vw,16px)] text-[#1a1a1a] bg-white transition-colors box-border font-inherit focus:outline-none focus:border-[#13335a] placeholder:text-gray-400"
                maxLength="10"
              />
              <span className="absolute right-[clamp(12px,1.5vw,16px)] top-1/2 -translate-y-1/2 text-[clamp(12px,1.4vw,14px)] text-gray-500 pointer-events-none">{formData.alternateMobileNumber.length}/10</span>
            </div>
          </div>

          <div className="mb-[clamp(16px,2vw,20px)]">
            <label className="block text-[clamp(14px,1.6vw,16px)] font-bold text-black mb-[clamp(6px,0.8vw,8px)]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full border-[1.5px] border-gray-200 rounded-[clamp(6px,0.8vw,8px)] py-[clamp(10px,1.2vw,12px)] px-[clamp(12px,1.5vw,16px)] text-[clamp(14px,1.6vw,16px)] md:text-[clamp(14px,1.8vw,16px)] text-[#1a1a1a] bg-white transition-colors box-border font-inherit focus:outline-none focus:border-[#13335a] placeholder:text-gray-400"
            />
          </div>

          <div className="mb-[clamp(16px,2vw,20px)]">
            <label className="block text-[clamp(14px,1.6vw,16px)] font-bold text-black mb-[clamp(6px,0.8vw,8px)]">Permanent Address</label>
            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleInputChange}
              placeholder="Permanent Address"
              className="w-full border-[1.5px] border-gray-200 rounded-[clamp(6px,0.8vw,8px)] py-[clamp(10px,1.2vw,12px)] px-[clamp(12px,1.5vw,16px)] text-[clamp(14px,1.6vw,16px)] md:text-[clamp(14px,1.8vw,16px)] text-[#1a1a1a] bg-white transition-colors box-border font-inherit resize-y min-h-[100px] leading-[1.5] focus:outline-none focus:border-[#13335a] placeholder:text-gray-400"
              rows="4"
            />
          </div>
        </div>

        {/* DECLARATION */}
        <div className="mb-[clamp(24px,3vw,32px)]">
          <h3 className="text-[clamp(16px,2vw,18px)] md:text-[clamp(14px,1.8vw,16px)] font-bold text-[#13335a] m-0 mb-[clamp(16px,2vw,20px)] uppercase tracking-[0.5px]">DECLARATION</h3>
          
          <div className="mb-[clamp(16px,2vw,20px)]">
            <label className="flex items-center gap-[clamp(8px,1vw,12px)] cursor-pointer text-[clamp(14px,1.6vw,16px)] text-gray-700 font-bold">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="w-[clamp(18px,2.25vw,20px)] h-[clamp(18px,2.25vw,20px)] cursor-pointer accent-[#13335a]"
              />
              <span>I agree to the terms and conditions.</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-[clamp(32px,4vw,48px)] pb-[clamp(20px,2.5vw,24px)]">
          <button 
            type="submit" 
            className="w-full bg-[#13335a] text-white border-none py-[clamp(14px,1.8vw,16px)] px-[clamp(24px,3vw,32px)] rounded-[clamp(6px,0.8vw,8px)] font-bold text-[clamp(16px,2vw,18px)] cursor-pointer transition-colors tracking-[0.5px] hover:bg-[#0f2440] disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed disabled:opacity-70"
            disabled={!isFormValid()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AgentRegistrationPage

