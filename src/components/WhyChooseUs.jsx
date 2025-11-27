import './WhyChooseUs.css'

function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Verified Vendors",
      description: "All businesses are verified and trusted"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Best Deals",
      description: "Exclusive offers and discounts"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "24/7 Support",
      description: "Round the clock customer assistance"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Easy Booking",
      description: "Quick and hassle-free service booking"
    }
  ]

  return (
    <div className="why-choose-us-section">
      <h2 className="why-choose-us-title">Why Choose Us</h2>
      <div className="why-choose-us-grid">
        {features.map((feature, index) => (
          <div key={index} className="why-choose-us-card">
            <div className="why-choose-us-icon-wrapper">
              <div className="why-choose-us-icon-outer">
                <div className="why-choose-us-icon-inner">
                  {feature.icon}
                </div>
              </div>
            </div>
            <h3 className="why-choose-us-card-title">{feature.title}</h3>
            <p className="why-choose-us-card-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs

