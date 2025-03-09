import { Home, DollarSign, MapPin } from "react-feather";

const Choose = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Home,
              title: "Wide Range of Properties",
              description: "From cozy apartments to luxurious estates",
            },
            {
              icon: DollarSign,
              title: "Competitive Prices",
              description: "Find the best deals in the market",
            },
            {
              icon: MapPin,
              title: "Prime Locations",
              description: "Properties in the most sought-after areas",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-6 text-center">
              <item.icon className="w-12 h-12 text-[#0676E6] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Choose;
