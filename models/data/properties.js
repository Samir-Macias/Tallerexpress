import "dotenv/config.js"
import '../../config/database.js'
import Property from "../Property.js"

const properties = [
    { name: "Ocean View Apartment", type: "Real Estate", value: 300000, user: "6733e4cb1c267c3de0129e62" },
    { name: "Luxury Villa", type: "Real Estate", value: 750000, user: "6733e4cb1c267c3de0129e62" },
    { name: "City Center Condo", type: "Real Estate", value: 450000, user: "6733e4cb1c267c3de0129e62" },
    { name: "Beachfront House", type: "Real Estate", value: 600000, user: "6733e4cb1c267c3de0129e62" },
    { name: "Mountain Cabin", type: "Real Estate", value: 200000, user: "6733e4cb1c267c3de0129e62" },

    { name: "Countryside Farm", type: "Agricultural", value: 150000, user: "6733e4cb1c267c3de0129e63" },
    { name: "Urban Office Space", type: "Commercial", value: 500000, user: "6733e4cb1c267c3de0129e63" },
    { name: "Industrial Warehouse", type: "Industrial", value: 650000, user: "6733e4cb1c267c3de0129e63" },
    { name: "Shopping Mall", type: "Commercial", value: 1200000, user: "6733e4cb1c267c3de0129e63" },
    { name: "Residential Complex", type: "Residential", value: 800000, user: "6733e4cb1c267c3de0129e63" },

    { name: "Forest Retreat", type: "Real Estate", value: 400000, user: "6733e4cb1c267c3de0129e64" },
    { name: "Luxury Penthouse", type: "Residential", value: 950000, user: "6733e4cb1c267c3de0129e64" },
    { name: "Corporate Headquarters", type: "Commercial", value: 2000000, user: "6733e4cb1c267c3de0129e64" },
    { name: "Downtown Loft", type: "Residential", value: 300000, user: "6733e4cb1c267c3de0129e64" },
    { name: "Warehouse Facility", type: "Industrial", value: 700000, user: "6733e4cb1c267c3de0129e64" },

    { name: "Hotel Resort", type: "Hospitality", value: 1500000, user: "6733e4cb1c267c3de0129e65" },
    { name: "Business Park", type: "Commercial", value: 1200000, user: "6733e4cb1c267c3de0129e65" },
    { name: "Private Island", type: "Luxury", value: 5000000, user: "6733e4cb1c267c3de0129e65" },
    { name: "Countryside Cottage", type: "Real Estate", value: 250000, user: "6733e4cb1c267c3de0129e65" },
    { name: "Modern Mansion", type: "Luxury", value: 3500000, user: "6733e4cb1c267c3de0129e65" },

    { name: "Vineyard Estate", type: "Agricultural", value: 900000, user: "6733e4cb1c267c3de0129e66" },
    { name: "City Skyscraper", type: "Commercial", value: 3000000, user: "6733e4cb1c267c3de0129e66" },
    { name: "Beach Resort", type: "Hospitality", value: 2000000, user: "6733e4cb1c267c3de0129e66" },
    { name: "Country Lodge", type: "Hospitality", value: 600000, user: "6733e4cb1c267c3de0129e66" },
    { name: "Apartment Block", type: "Residential", value: 450000, user: "6733e4cb1c267c3de0129e66" },

    { name: "Farm", type: "Real Estate", value: 500000, user: "6733e4cb1c267c3de0129e67" },
    { name: "Sports Car", type: "Vehicle", value: 95000, user: "6733e4cb1c267c3de0129e67" },
    { name: "Rare Stamps", type: "Asset", value: 10000, user: "6733e4cb1c267c3de0129e67" },
    { name: "Luxury Boat", type: "Luxury", value: 200000, user: "6733e4cb1c267c3de0129e67" },
    { name: "Diamond Ring", type: "Asset", value: 35000, user: "6733e4cb1c267c3de0129e67" },

    { name: "Luxury Villa", type: "Real Estate", value: 750000, user: "6733e4cb1c267c3de0129e68" },
    { name: "Sedan Car", type: "Vehicle", value: 30000, user: "6733e4cb1c267c3de0129e68" },
    { name: "Personal Yacht", type: "Luxury", value: 5000000, user: "6733e4cb1c267c3de0129e68" },
    { name: "Office Space", type: "Commercial", value: 250000, user: "6733e4cb1c267c3de0129e68" },
    { name: "Art Collection", type: "Asset", value: 120000, user: "6733e4cb1c267c3de0129e68" },

    { name: "Family House", type: "Real Estate", value: 450000, user: "6733e4cb1c267c3de0129e69" },
    { name: "Electric Car", type: "Vehicle", value: 45000, user: "6733e4cb1c267c3de0129e69" },
    { name: "Motorcycle", type: "Vehicle", value: 15000, user: "6733e4cb1c267c3de0129e69" },
    { name: "Boat", type: "Luxury", value: 100000, user: "6733e4cb1c267c3de0129e69" },
    { name: "Gold Watch", type: "Asset", value: 20000, user: "6733e4cb1c267c3de0129e69" },

    { name: "Apartment", type: "Real Estate", value: 320000, user: "6733e4cb1c267c3de0129e6a" },
    { name: "SUV", type: "Vehicle", value: 50000, user: "6733e4cb1c267c3de0129e6a" },
    { name: "Antique Furniture", type: "Asset", value: 40000, user: "6733e4cb1c267c3de0129e6a" },
    { name: "Private Plane", type: "Luxury", value: 3000000, user: "6733e4cb1c267c3de0129e6a" },
    { name: "Artwork", type: "Asset", value: 80000, user: "6733e4cb1c267c3de0129e6a" },

    { name: "Country Home", type: "Real Estate", value: 280000, user: "6733e4cb1c267c3de0129e6b" },
    { name: "Hybrid Car", type: "Vehicle", value: 35000, user: "6733e4cb1c267c3de0129e6b" },
    { name: "Collectible Coins", type: "Asset", value: 5000, user: "6733e4cb1c267c3de0129e6b" },
    { name: "Speed Boat", type: "Luxury", value: 150000, user: "6733e4cb1c267c3de0129e6b" },
    { name: "Sculpture", type: "Asset", value: 30000, user: "6733e4cb1c267c3de0129e6b" },

    { name: "Beach House", type: "Real Estate", value: 680000, user: "6733e4cb1c267c3de0129e6c" },
    { name: "Luxury Sedan", type: "Vehicle", value: 70000, user: "6733e4cb1c267c3de0129e6c" },
    { name: "Luxury Watch", type: "Asset", value: 25000, user: "6733e4cb1c267c3de0129e6c" },
    { name: "Private Jet", type: "Luxury", value: 5500000, user: "6733e4cb1c267c3de0129e6c" },
    { name: "Art Collection", type: "Asset", value: 140000, user: "6733e4cb1c267c3de0129e6c" },
    // Properties for ObjectId 6733e4cb1c267c3de0129e6d
    { name: "Mountain Cabin", type: "Real Estate", value: 320000, user: "6733e4cb1c267c3de0129e6d" },
    { name: "Convertible", type: "Vehicle", value: 55000, user: "6733e4cb1c267c3de0129e6d" },
    { name: "Vintage Guitar", type: "Asset", value: 15000, user: "6733e4cb1c267c3de0129e6d" },
    { name: "Luxury Yacht", type: "Luxury", value: 1200000, user: "6733e4cb1c267c3de0129e6d" },
    { name: "Designer Handbag", type: "Asset", value: 8000, user: "6733e4cb1c267c3de0129e6d" },

    // Properties for ObjectId 6733e4cb1c267c3de0129e6e
    { name: "Beach Villa", type: "Real Estate", value: 750000, user: "6733e4cb1c267c3de0129e6e" },
    { name: "Motorbike", type: "Vehicle", value: 18000, user: "6733e4cb1c267c3de0129e6e" },
    { name: "Antique Clock", type: "Asset", value: 2500, user: "6733e4cb1c267c3de0129e6e" },
    { name: "Private Island", type: "Luxury", value: 10000000, user: "6733e4cb1c267c3de0129e6e" },
    { name: "Diamond Necklace", type: "Asset", value: 55000, user: "6733e4cb1c267c3de0129e6e" },

    // Properties for ObjectId 6733e4cb1c267c3de0129e6f
    { name: "Penthouse Suite", type: "Real Estate", value: 1200000, user: "6733e4cb1c267c3de0129e6f" },
    { name: "Sports Bike", type: "Vehicle", value: 30000, user: "6733e4cb1c267c3de0129e6f" },
    { name: "Fine Art Painting", type: "Asset", value: 90000, user: "6733e4cb1c267c3de0129e6f" },
    { name: "Helicopter", type: "Luxury", value: 2500000, user: "6733e4cb1c267c3de0129e6f" },
    { name: "Gold Coins", type: "Asset", value: 20000, user: "6733e4cb1c267c3de0129e6f" },

    // Properties for ObjectId 6733e4cb1c267c3de0129e70
    { name: "Downtown Apartment", type: "Real Estate", value: 450000, user: "6733e4cb1c267c3de0129e70" },
    { name: "Luxury SUV", type: "Vehicle", value: 85000, user: "6733e4cb1c267c3de0129e70" },
    { name: "Sculpture Collection", type: "Asset", value: 45000, user: "6733e4cb1c267c3de0129e70" },
    { name: "Private Jet", type: "Luxury", value: 7000000, user: "6733e4cb1c267c3de0129e70" },
    { name: "Ruby Ring", type: "Asset", value: 17000, user: "6733e4cb1c267c3de0129e70" }

];

Property.insertMany(properties)