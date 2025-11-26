// Import images for category sections
import weddingPlans from '../assets/wedding plans.jpg'
import hotelPg from '../assets/hotel and pg.jpg'
import foodDining from '../assets/food and Dining.jpg'
import beautyCare from '../assets/beauty care.jpg'
import repair from '../assets/repair.png'
import transportationTravel from '../assets/transortation and travel.png'
import dailyServices from '../assets/daily services.jpg'
import homeServices from '../assets/home services.jpg'

// Category Sections Data - Contains category name, subcategory names, and their images
// Subcategories with isPopular: true will appear in Popular Searches section
export const categorySectionsData = [
  {
    categoryName: "Wedding Requisites",
    subCategories: [
      { name: "Banquet Halls", image: hotelPg, isPopular: true },
      { name: "Bridal Requisite", image: weddingPlans },
      { name: "Caterers", image: foodDining, isPopular: true },
      { name: "Wedding Planners", image: weddingPlans },
      { name: "Photographers", image: weddingPlans },
      { name: "Makeup Artists", image: beautyCare },
      { name: "Mehndi Artists", image: beautyCare },
      { name: "DJ Booking", image: dailyServices },
      { name: "Choreographer", image: dailyServices },
      { name: "Bridal Wear & Jewellery", image: weddingPlans },
      { name: "Groom Wear", image: weddingPlans },
      { name: "Pandit Ji", image: dailyServices },
      { name: "Rath Booking", image: transportationTravel },
      { name: "Decoration & Tents Service", image: homeServices }
    ]
  },
  {
    categoryName: "Beauty & Spa",
    subCategories: [
      { name: "Beauty Parlours", image: beautyCare },
      { name: "Spa & Massages", image: beautyCare },
      { name: "Salons", image: beautyCare },
      { name: "Hair Stylists", image: beautyCare },
      { name: "Nail Salons", image: beautyCare },
      { name: "Skin Care", image: beautyCare },
      { name: "Hair Color & Highlights", image: beautyCare },
      { name: "Facial Treatments", image: beautyCare }
    ]
  },
  {
    categoryName: "Repairs & Services",
    subCategories: [
      { name: "AC Service", image: repair },
      { name: "Car Service", image: transportationTravel },
      { name: "Bike Service", image: transportationTravel },
      { name: "Plumbing", image: repair },
      { name: "Appliance Repair", image: repair },
      { name: "Home Maintenance", image: homeServices },
      { name: "Electrical Repairs", image: repair },
      { name: "Carpentry", image: repair }
    ]
  },
  {
    categoryName: "Daily Needs",
    subCategories: [
      { name: "Movies", image: dailyServices },
      { name: "Grocery", image: foodDining },
      { name: "Electricians", image: homeServices },
      { name: "Pharmacy", image: dailyServices },
      { name: "Laundry", image: dailyServices },
      { name: "Home Delivery", image: foodDining },
      { name: "Pet Care", image: dailyServices },
      { name: "Cleaning Services", image: homeServices }
    ]
  },
  {
    categoryName: "Real Estate",
    subCategories: [
      { name: "Estate Agents For Residential Rental", image: homeServices, isPopular: true },
      { name: "Interior Designers", image: homeServices, isPopular: true },
      { name: "Real Estate Agents", image: homeServices, isPopular: true }
    ]
  }
]

