
function Statistics() {
  const stats = [
    { value: "4.9 Crore+", label: "Businesses" },
    { value: "50,000+", label: "Happy Customers" },
    { value: "10,000+", label: "Cities" },
    { value: "24/7", label: "Support" }
  ]

  return (
    <div className="w-full py-[clamp(32px,4vw,48px)] px-4 bg-[#13335a] border-t border-b border-r border-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[clamp(16px,2vw,24px)]">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-white text-[clamp(28px,4vw,40px)] font-bold mb-[clamp(8px,1vw,12px)]">{stat.value}</div>
              <div className="text-white text-[clamp(14px,1.8vw,18px)] font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Statistics

