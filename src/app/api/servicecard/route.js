export const servicecard = [
  {
    name: "Budget-Friendly-Travel-Made-Easy",
    title: "Budget-Friendly-Travel-Made-Easy",
    image1: "/Images/HomeImage/service1.jpg",
    description:
      "Planning an affordable vacation can seem challenging but we're here to help make travels fit seamlessly within your budget. Our team consists of professional travel consultants who understand costs incurred and thus strive to get the best package and product deals. Benefiting from a high level of partnerships with airlines, hotels and car rental companies, we can organize attractive promotions and negotiate with suppliers about more favorable rates, which makes our offers profitable for you.",
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
