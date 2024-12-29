// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2",
//     price: 2200,
//     location: "Miami",
//     country: "United States",
//   },

//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Beachfront Villa with Private Pool",
//     description:
//       "Relax and unwind in this stunning beachfront villa with your own private pool and direct beach access.",
//     image: "https://images.unsplash.com/photo-1558024920-3f9a19d461cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJlYWNoJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     price: 2500,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Cozy Cottage in the Countryside",
//     description:
//       "Escape the hustle and bustle of city life in this charming countryside cottage.",
//     image: "https://images.unsplash.com/photo-1585608210117-8ec0ed2e4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29wcGVyJTIwY290dGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 700,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Modern Apartment in Downtown",
//     description:
//       "Enjoy the convenience of city living in this stylish and modern apartment located downtown.",
//     image: "https://images.unsplash.com/photo-1508884022426-1f7d4e6d764d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRvd250b3duJTIwYXB0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 1500,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Breathe in the fresh mountain air and relax in this secluded retreat surrounded by nature.",
//     image: "https://images.unsplash.com/photo-1569913486515-18a55d367637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1vdW50YWluJTIwY2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1200,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Overwater Bungalow",
//     description:
//       "Experience ultimate luxury and tranquility in an overwater bungalow with stunning ocean views.",
//     image: "https://images.unsplash.com/photo-1569785302522-d40384247aa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3ZlcndhdGVyJTIwYnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     price: 5000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Eco-Friendly Treehouse",
//     description:
//       "Reconnect with nature in this eco-friendly treehouse nestled in a lush forest.",
//     image: "https://images.unsplash.com/photo-1508973378693-19d470a69655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRyZWVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1300,
//     location: "Ubud",
//     country: "Indonesia",
//   },

//   {
//   title: "Historic Cottage in Charleston",
//   description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//   image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   price: 1600,
//   location: "Charleston",
//   country: "United States"
// },
// {
//   title: "Modern Apartment in Tokyo",
//   description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//   image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   price: 2000,
//   location: "Tokyo",
//   country: "Japan"
// },
// {
//   title: "Lakefront Cabin in New Hampshire",
//   description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//   image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//   price: 1200,
//   location: "New Hampshire",
//   country: "United States"
// },
// {
//   title: "Luxury Villa in the Maldives",
//   description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//   image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   price: 6000,
//   location: "Maldives",
//   country: "Maldives"
// },
// {
//   title: "Ski Chalet in Aspen",
//   description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//   image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//   price: 4000,
//   location: "Aspen",
//   country: "United States"
// },
// {
//   title: "Secluded Beach House in Costa Rica",
//   description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//   image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   price: 1800,
//   location: "Costa Rica",
//   country: "Costa Rica"
// }

// ];

// module.exports = { data: sampleListings };
