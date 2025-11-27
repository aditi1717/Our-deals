import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AgentRegistrationPage.css'

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
    <div className="agent-registration-page">
      <div className="agent-registration-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="agent-registration-title">Agent Registration Form</h2>
        <div style={{ width: '24px' }}></div>
      </div>

      <form className="agent-registration-form" onSubmit={handleSubmit}>
        {/* AGENT PERSONAL DETAILS */}
        <div className="form-section">
          <h3 className="section-title">AGENT PERSONAL DETAILS</h3>
          
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              placeholder="Tap to pick date"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Upload Profile Photo</label>
            <div className="image-upload-area" onClick={() => document.getElementById('profilePhoto').click()}>
              {formData.profilePhoto ? (
                <div className="image-preview">
                  <img 
                    src={URL.createObjectURL(formData.profilePhoto)} 
                    alt="Profile preview" 
                    className="preview-image"
                  />
                  <span className="change-image-text">Tap to change image</span>
                </div>
              ) : (
                <>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="upload-icon">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="upload-text">Tap to select image</span>
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
        <div className="form-section">
          <h3 className="section-title">CONTACT DETAILS</h3>
          
          <div className="form-group">
            <label className="form-label">Mobile Number</label>
            <div className="input-with-counter">
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="form-input"
                maxLength="10"
              />
              <span className="char-counter">{formData.mobileNumber.length}/10</span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Alternate Mobile Number</label>
            <div className="input-with-counter">
              <input
                type="tel"
                name="alternateMobileNumber"
                value={formData.alternateMobileNumber}
                onChange={handleInputChange}
                placeholder="Alternate Mobile Number"
                className="form-input"
                maxLength="10"
              />
              <span className="char-counter">{formData.alternateMobileNumber.length}/10</span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Permanent Address</label>
            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleInputChange}
              placeholder="Permanent Address"
              className="form-textarea"
              rows="4"
            />
          </div>
        </div>

        {/* DECLARATION */}
        <div className="form-section">
          <h3 className="section-title">DECLARATION</h3>
          
          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="form-checkbox"
              />
              <span>I agree to the terms and conditions.</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-submit-section">
          <button 
            type="submit" 
            className="submit-btn"
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

