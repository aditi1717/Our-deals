import './Statistics.css'

function Statistics() {
  const stats = [
    { value: "4.9 Crore+", label: "Businesses" },
    { value: "50,000+", label: "Happy Customers" },
    { value: "10,000+", label: "Cities" },
    { value: "24/7", label: "Support" }
  ]

  return (
    <div className="statistics-section">
      <div className="statistics-container">
        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <div key={index} className="statistics-item">
              <div className="statistics-value">{stat.value}</div>
              <div className="statistics-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Statistics

