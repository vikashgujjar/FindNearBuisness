const PopularCate = () => {
  const popularCategories = [
    "Body Massage Centres", "Cinema Halls", "Schools", "Beauty Spas", "Dermatologists",
    "Hospitals", "Malls", "Gyms", "Beauty Parlours", "Estate Agents", "Banquet Halls",
    "ENT Doctors", "Book Shops", "Bike On Rent", "Sexologist Doctors", "Neurologists",
    "Gynaecologist & Obstetrician Doctors", "Train Ticket Booking Agents", "Travel Agents",
    "Paying Guest Accommodations", "General Physician Doctors", "Dentists", "Orthopaedic Doctors",
    "Chemists", "Motor Training Schools", "Gastroenterologists", "Car Rental", "Salons",
    "Courier Services", "Dance Classes", "Pathology Labs", "Taxi Services", "Cake Shops",
    "AC Repair & Services", "Mobile Phone Dealers", "Pet Shops", "Dmart", "Packers And Movers",
    "Psychiatrists", "Dharamshalas", "Urologist Doctors", "Bakeries", "Bicycle Dealers",
    "Coffee Shops", "Paediatricians", "Sonography Centres", "Yoga Classes", "Hostels",
    "Cardiologists", "Electrical Shops", "Skin Care Clinics", "Diagnostic Centres",
    "Homeopathic Doctors", "Physiotherapists", "Photo Studios", "Plumbers", "Music Classes",
    "Electricians", "Sports Goods Dealers", "Shoe Dealers", "Hair Stylists", "Gift Shops",
    "Ophthalmologists", "Car Repair & Services", "Ayurvedic Doctors", "Eye Clinics", "Restaurants",
    "Carpenters", "Jewellery Showrooms", "Cooks On Hire", "Stationery Shops", "Nephrologists",
    "Caterers", "Interior Designers", "Rehabilitation Center", "Grocery Stores", "Banks", "ATM",
    "5 Star Hotels", "Hotels", "Resorts", "Plastic Surgeons", "Smart Watch Dealers",
    "Drug De-Addiction Centres", "Chinese Restaurants"
  ];

  const dealsAndOffers = [
    "Kotak Mahindra Banks", "INOX Cinemas", "Canara Banks", "Ratnakar Banks", "PVR Cinemas",
    "ICICI Banks", "HDFC Banks", "AU Small Finance Bank", "Bank Of Maharashtra", "Bank Of India",
    "Axis Banks", "IDFC First Banks", "Maharashtra Gramin Banks", "Catholic Syrian Banks",
    "Saraswat Co Operative Banks", "Punjab & Sind Banks", "State Bank Of India", "Union Bank Of India",
    "Punjab National Banks", "Bank Of Baroda", "Lifestyle Stores", "Behrouz Biryani", "Fastrack",
    "The Good Bowl", "Sony", "Yes Banks", "Croma", "Dell Exclusive Stores", "Beverly Hills Polo Club",
    "Joyalukkas Jewellery", "Kalyan Jewellers", "Flying Machine", "Lenovo Exclusive Store",
    "Reliance Digital", "Vijay Sales", "Duroflex", "Anytime Fitness", "Kromakay Salons",
    "Toni&Guy Salons", "Bakingo", "Barbeque Nation Restaurants", "McDonalds", "Sweet Truth Cake Shops",
    "ALDO Stores", "Helios", "Inglot Stores", "LEE Stores", "Max Stores", "US Polo Assn", "Wrangler",
    "Levi's", "Apple Store", "IFB Point", "LGOppo Exclusive Showroom", "Federal Banks", "IDBI Banks",
    "Bandhan Banks", "DBS Banks", "Karur Vysya Banks", "Indusind Banks", "Central Bank Of India"
  ];

  const futureTocuhCollection = [
    "Travel & Tourism", "Beauty & Fashion", "Health & Fitness", "Food & Beverage",
    "Finance", "On demand Services", "Home & Living", "Education & Career", "Recreation", "Jd Business Guide"
  ];

  const popularCities = [
    "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Ahmedabad", "Kolkata", "Jaipur",
    "Chandigarh", "Coimbatore", "Lucknow", "Surat", "Indore", "Patna", "Nagpur", "Ernakulam", "Bhopal",
    "Vadodara", "Ludhiana", "Kanpur", "Nashik", "Varanasi", "Visakhapatnam", "Rajkot", "Raipur-Chhattisgarh",
    "Vijayawada", "Madurai", "Ranchi", "Goa", "Thiruvananthapuram", "Bhubaneshwar", "Allahabad",
    "Aurangabad-Maharashtra", "Dehradun", "Mysore", "Trichy", "Guwahati", "Agra", "Kozhikode", "Jodhpur",
    "Thrissur", "Kolhapur", "Salem", "Meerut", "Mangalore", "Gorakhpur", "Jabalpur", "Jalandhar", "Gwalior"
  ];

  const renderList = (data) =>
    data.map((item, index) => (
      <span key={index} className="text-gray-600 text-sm leading-relaxed flex items-center gap-1">
        {item}
        {index !== data.length - 1 && <span className="text-gray-300">|</span>}
      </span>
    ));

  return (
    <div className="space-y-10 px-5 md:px-12 xl:px-32 py-6 md:py-12">
      <Section title="Popular Categories" data={popularCategories} />
      <Section title="Deals and Offers" data={dealsAndOffers} />
      <Section title="Explore Future Touch Collections" data={futureTocuhCollection} />
      <Section title="Popular Cities" data={popularCities} />
    </div>
  );
};

const Section = ({ title, data }) => (
  <div>
    <h6 className="font-semibold text-gray-700 capitalize text-lg mb-4">{title}</h6>
    <div className="flex flex-wrap gap-2">{data.map((item, idx) => (
      <span key={idx} className="text-gray-600 text-sm flex items-center gap-1">
        {item}
        {idx !== data.length - 1 && <span className="text-gray-300">|</span>}
      </span>
    ))}</div>
  </div>
);

export default PopularCate;
