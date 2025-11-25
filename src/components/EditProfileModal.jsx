import { useState, useEffect } from 'react'
import './EditProfileModal.css'

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
      <div className="edit-profile-overlay" onClick={handleCancel}></div>
      <div className="edit-profile-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="edit-profile-title">Edit Profile</h2>
        
        <div className="edit-profile-avatar-section">
          <div className="edit-profile-avatar">
            <span className="edit-profile-initial">
              {name ? name.charAt(0).toUpperCase() : (userData?.name ? userData.name.charAt(0).toUpperCase() : 'U')}
            </span>
            <div className="edit-avatar-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.50023C18.8978 2.10243 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.10243 21.5 2.50023C21.8978 2.89804 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.10243 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="edit-profile-input-section">
          <div className="edit-profile-input-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="input-icon">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              className="edit-profile-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
        </div>

        <div className="edit-profile-buttons">
          <button className="update-btn" onClick={handleUpdate} disabled={!name.trim()}>
            Update
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  )
}

export default EditProfileModal

