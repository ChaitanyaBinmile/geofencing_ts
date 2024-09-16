const center = { lat: 28.609687, lng: 77.369188 }; // Center of the square

const scaleFactor = 0.002; // Adjust this to modify the overall size of the polygon

// Define vertices relative to the center
export const route = [
  { lat: center.lat + scaleFactor * 0.5, lng: center.lng - scaleFactor * 1.0 }, // Point 1
  { lat: center.lat + scaleFactor * 1.0, lng: center.lng - scaleFactor * 0.5 }, // Point 2
  { lat: center.lat + scaleFactor * 0.5, lng: center.lng + scaleFactor * 0.5 }, // Point 3
  { lat: center.lat - scaleFactor * 0.5, lng: center.lng + scaleFactor * 1.0 }, // Point 4
  { lat: center.lat - scaleFactor * 1.0, lng: center.lng + scaleFactor * 0.5 }, // Point 5
  { lat: center.lat - scaleFactor * 0.5, lng: center.lng - scaleFactor * 0.5 },  // Closing the polygon
  { lat: center.lat + scaleFactor * 0.5, lng: center.lng - scaleFactor * 1.0 }, // Point 1
];
