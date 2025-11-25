import weddingPlans from '../assets/wedding plans.jpg'
import hotelPg from '../assets/hotel and pg.jpg'
import foodDining from '../assets/food and Dining.jpg'
import beautyCare from '../assets/beauty care.jpg'
import repair from '../assets/repair.png'
import transportationTravel from '../assets/transortation and travel.png'
import dailyServices from '../assets/daily services.jpg'
import homeServices from '../assets/home services.jpg'
import './CategorySections.css'

function CategorySections() {
  const categorySections = [
    {
      title: "Wedding Requisites",
      subCategories: [
        { name: "Banquet Halls", image: hotelPg },
        { name: "Bridal Requisite", image: weddingPlans },
        { name: "Caterers", image: foodDining }
      ]
    },
    {
      title: "Beauty & Spa",
      subCategories: [
        { name: "Beauty Parlours", image: beautyCare },
        { name: "Spa & Massages", image: beautyCare },
        { name: "Salons", image: beautyCare }
      ]
    },
    {
      title: "Repairs & Services",
      subCategories: [
        { name: "AC Service", image: repair },
        { name: "Car Service", image: transportationTravel },
        { name: "Bike Service", image: transportationTravel }
      ]
    },
    {
      title: "Daily Needs",
      subCategories: [
        { name: "Movies", image: dailyServices },
        { name: "Grocery", image: foodDining },
        { name: "Electricians", image: homeServices }
      ]
    }
  ]

  return (
    <div className="category-sections-container">
      {categorySections.map((section, index) => (
        <div key={index} className="category-section-card">
          <h3 className="category-section-title">{section.title}</h3>
          <div className="sub-categories">
            {section.subCategories.map((subCat, subIndex) => (
              <div key={subIndex} className="sub-category-card">
                <div className="sub-category-image">
                  <img src={subCat.image} alt={subCat.name} />
                </div>
                <span className="sub-category-name">{subCat.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategorySections

