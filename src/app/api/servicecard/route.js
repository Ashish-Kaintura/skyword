export async function GET(req) {
  const servicecard = [
    {
      name: "PUNARNAVA EXCLUSIVE Cotages",
      image1: "/Images/HomeImage/banner1.jpeg",
      description:
        "Experience unparalleled luxury in our Punarnava King Room, a 387-square-foot sanctuary with mesmerizing mountain views. Revel in the comfort of a king bed, a spacious wardrobe, and a groom and prep zone. Indulge in the three-fixture bathroom with luxury bath amenities. Stay connected with high-speed wireless internet and savor the breathtaking views that complement the elegance of your surroundings. See the World of Punarnava programme terms for upgrade eligibility.",
    },
    {
      name: "PUNARNAVA EXCLUSIVE Cotagess",
      image1: "/Images/HomeImage/banner1.jpeg",
      description:
        "Experience unparalleled luxury in our Punarnava King Room, a 387-square-foot sanctuary with mesmerizing mountain views. Revel in the comfort of a king bed, a spacious wardrobe, and a groom and prep zone. Indulge in the three-fixture bathroom with luxury bath amenities. Stay connected with high-speed wireless internet and savor the breathtaking views that complement the elegance of your surroundings. See the World of Punarnava programme terms for upgrade eligibility.",
    },
    {
      name: "PUNARNAVA EXCLUSIVE Cotagessss",
      image1: "/Images/HomeImage/banner1.jpeg",
      description:
        "Experience unparalleled luxury in our Punarnava King Room, a 387-square-foot sanctuary with mesmerizing mountain views. Revel in the comfort of a king bed, a spacious wardrobe, and a groom and prep zone. Indulge in the three-fixture bathroom with luxury bath amenities. Stay connected with high-speed wireless internet and savor the breathtaking views that complement the elegance of your surroundings. See the World of Punarnava programme terms for upgrade eligibility.",
    },
  ];

  return new Response(JSON.stringify(servicecard), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
