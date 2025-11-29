import { useState, useRef, useEffect } from 'react'

function OTPModal({ isOpen, onClose, mobileNumber, onBack }) {
  const [otp, setOtp] = useState(['', '', '', ''])
  const [resendTimer, setResendTimer] = useState(9)
  const inputRefs = useRef([])

  useEffect(() => {
    if (isOpen && resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => (prev > 0 ? prev - 1 : 0))
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isOpen, resendTimer])

  if (!isOpen) return null

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 4)
    const newOtp = [...otp]
    for (let i = 0; i < pastedData.length && i < 4; i++) {
      newOtp[i] = pastedData[i]
    }
    setOtp(newOtp)
    const nextEmptyIndex = pastedData.length < 4 ? pastedData.length : 3
    inputRefs.current[nextEmptyIndex]?.focus()
  }

  const handleVerify = () => {
    const otpString = otp.join('')
    if (otpString.length === 4) {
      // Handle OTP verification here
      console.log('OTP Verified:', otpString)
      onClose(otpString) // Pass OTP to parent and show name section
    }
  }

  const handleResend = () => {
    if (resendTimer === 0) {
      // Handle resend OTP
      console.log('Resend OTP')
      setOtp(['', '', '', ''])
      setResendTimer(9)
      inputRefs.current[0]?.focus()
    }
  }

  const isOtpComplete = otp.every(digit => digit !== '')

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[#13335A] via-[#213F65] to-[#5E738E] z-[9999] flex items-center justify-center min-h-screen p-[clamp(20px,4vw,40px)] box-border overflow-y-auto text-white">
      {onBack && (
        <button className="absolute top-[clamp(16px,3vw,24px)] left-[clamp(16px,3vw,24px)] bg-white/20 border-none rounded-full w-[clamp(40px,6vw,48px)] h-[clamp(40px,6vw,48px)] flex items-center justify-center cursor-pointer transition-colors hover:bg-white/30 z-[10000] backdrop-blur-sm" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(20px,3vw,24px)] h-[clamp(20px,3vw,24px)]">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      <div className="w-full max-w-[400px] flex flex-col items-center text-center">
        <h1 className="text-[clamp(36px,7vw,52px)] font-black text-white m-0 mb-[clamp(16px,3vw,24px)] flex flex-col gap-[clamp(4px,1vw,8px)] leading-tight">
          <span>OTP</span>
          <span>Verification</span>
        </h1>
        <p className="text-[clamp(14px,2.5vw,16px)] text-white m-0 mb-[clamp(8px,1.5vw,12px)] font-normal">Enter the 4-digit code sent to</p>
        <p className="text-[clamp(16px,3vw,20px)] text-white m-0 mb-[clamp(32px,6vw,48px)] font-medium">+91 {mobileNumber}</p>
        
        <div className="flex gap-[clamp(16px,3vw,24px)] justify-center mb-[clamp(24px,4vw,32px)]">
          {otp.map((digit, index) => (
            <div key={index} className="relative">
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                className="w-[clamp(60px,10vw,80px)] h-[clamp(60px,10vw,80px)] border-none rounded-full bg-white text-center text-[clamp(24px,4vw,32px)] font-semibold text-black outline-none transition-all focus:shadow-[0_0_0_3px_rgba(255,255,255,0.3)]"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                maxLength="1"
                inputMode="numeric"
              />
            </div>
          ))}
        </div>

        <div className="mb-[clamp(24px,4vw,32px)]">
          <span className="text-[clamp(14px,2.5vw,16px)] text-white">
            Didn't receive OTP? {resendTimer > 0 && <span>{resendTimer}</span>}
          </span>
        </div>

        <button 
          className="w-full max-w-[350px] bg-[#E10129] text-white border-none p-[clamp(14px,2vw,16px)_clamp(20px,3vw,24px)] rounded-xl font-bold text-[clamp(16px,2.5vw,18px)] cursor-pointer transition-colors hover:bg-[#c00122] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-70"
          onClick={handleVerify}
          disabled={!isOtpComplete}
        >
          Verify & Continue
        </button>
      </div>
    </div>
  )
}

export default OTPModal

