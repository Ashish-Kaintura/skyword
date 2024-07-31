// src/app/api/servicebox/route.js

export const servicebox = [
  {
    id: 1,
    Banner:"/Images/ServicesImage/b2b.jpg",
    name: "B2B-Corporate-Travel-Management",
    Title: "B2B Corporate Travel Management",
    image1: "/Images/ServicesImage/b2b-soltion.jpg",
    description:
      "Being a business to business provider, we provide corporate travel solutions. Oversee all aspects of business trip spending including billing consolidation, approvals, bookings, and reporting. Supply other travel companies in the chain with awesome B2B travel packages at the most affordable prices and cost possible.",
  },
  {
    id: 2,
    Banner:"/Images/ServicesImage/flight bookingBanneer.jpg",
    name: "Flight-Bookings",
    Title: "Flight Bookings",
    image1: "/Images/ServicesImage/flight-booking.jpg",
    description:
      "We compare and sift through hundreds of airlines to ensure that we give you the cheapest flights to your chosen destination. There is an opportunity to view schedules, availability and ticket prices to choose flights that are convenient in terms of dates and cost. After booking, you will be issued with e-tickets and you will be helped to change or cancel your booked tickets.",
  },
  {
    id: 3,
    Banner:"/Images/ServicesImage/hotel reservation banner.png",
    name: "Hotel-Reservations",
    Title: "Hotel Reservations",
    image1: "/Images/ServicesImage/hotel-reservation.png",
    description:
      "Use the links provided below to view our large range of hotels in various destinations worldwide. You can check and compare the ratings, amenities, pictures, and real customers’ reviews to choose a suitable place to stay. We provide offers and promotions for different hotel classes starting from economical to the luxurious ones.",
  },
  {
    id: 4,
    Banner:"/Images/ServicesImage/car rentelbanner.jpg",
    name: "Car-Rentals",
    Title: "Car Rentals",
    image1: "/Images/ServicesImage/car-rentel.jpg",
    description:
      "Hire mini and economy cars, luxury 4x4s, large people carriers or other vehicles to be dropped off at airports or other collection points. Get insurance and free towing services round the clock. Get carefree rentals from well-known brands and many others for highly affordable prices.",
  },
  {
    id: 5,
    Banner:"/Images/ServicesImage/Excursion Bookings.jpg",
    name: "Excursion-Bookings",
    Title: "Excursion Bookings",
    image1: "/Images/ServicesImage/exbooking.jpg",
    description:
      "Discover the regions in their entirety with tailored activity options. Select from a list of recommended tours, performance, leisure activities and attractions. Travel to sights of interest without having to overthink the situation.",
  },
  {
    id: 6,
    Banner:"/Images/ServicesImage/Online Resources.jpeg",
    name: "Online-Resources",
    Title: "Online Resources",
    image1: "/Images/ServicesImage/Online-booking.jpg",
    description:
      "Information about travel guides, destinations, visas, travel warnings and exchange rates can be found on our website. Subscribe to our newsletter to receive special offers and information on new locations to visit. Whether you require a single service or a comprehensive trip, Skyworldtour guarantees exemplary service. Call us today and let us know how we can make your next business or leisure trip hassle-free.",
  },
];

export async function GET(req) {
  return new Response(JSON.stringify(servicebox), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
