import './Statistics.css'

function Statistics() {
  const stats = [
    { number: '4.9 Crore+', label: 'Businesses' },
    { number: '10,000+', label: 'Cities' },
    { number: '50,000+', label: 'Happy Customers' },
    { number: '24/7', label: 'Support' }
  ]

  return (
    <div className="statistics-section">
      <div className="statistics-container">
        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Statistics
