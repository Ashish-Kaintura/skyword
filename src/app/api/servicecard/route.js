export const servicecard = [
  {
    name: "Budget-Friendly-Travel-Made-Easy",
    title: "Budget-Friendly-Travel-Made-Easy",
    image1: "/Images/HomeImage/service1.jpg",
    description:
      "Experience unparalleled luxury in our Punarnava King Room, a 387-square-foot sanctuary with mesmerizing mountain views. Revel in the comfort of a king bed, a spacious wardrobe, and a groom and prep zone. Indulge in the three-fixture bathroom with luxury bath amenities. Stay connected with high-speed wireless internet and savor the breathtaking views that complement the elegance of your surroundings. See the World of Punarnava program terms for upgrade eligibility.",
  },
  {
    name: "Easy-Appointments-and-Support-for-Clients",
    title: "Easy Appointments and Support for Clients",
    image1: "/Images/HomeImage/service2.webp",
    description:
      "Travel booking using Skyworldtour Corp is easy, fast, and efficient. Explore our vast collection of products right on this intuitive website or connect with our helpful representatives over the call, email, or chat. We aim to make booking as easy as possible so you can book your flights, hotels, and vehicles in a few simple steps.",
  },
  {
    name: "Facilities-for-business-and-leisure-tourists",
    title: "Facilities for business and leisure tourists",
    image1: "/Images/HomeImage/service3.jpg",
    description:
      "We also cater to other business-related travelers seeking a convenient corporate travel management service. Since we are a B2B organization providing travel management solutions, we assist several companies in managing their entire travel. Other services include consolidation billing, emergency support, reports, and branded booking interfaces. This serves to benefit corporations that can minimize travel expenses and clients who are in a position to obtain bookings without much struggle.",
  },
  {
    name: "Travel-Made-Even-Easier-with-Ancillary-Services",
    title: "Travel Made Even Easier with Ancillary Services",
    image1: "/Images/HomeImage/service4.png",
    description:
      "In addition to transportation and accommodations, Skyworldtour Corp offers extra services to enhance your travels. You can book affordable car rentals right from the comfort of our website. You can select from cheap, small-sized vehicles that are perfect for city use or large, comfortable cars that are perfect for long drives or families. Our vehicles are clean and sourced from some of the most reputable brands.",
  },
];
export async function GET(req) {
  return new Response(JSON.stringify(servicecard), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
