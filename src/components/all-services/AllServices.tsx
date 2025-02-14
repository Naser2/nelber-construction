import { useState } from "react";

export default function ServicesGrid() {
  const [service, SetService] = useState()
  const [showMore, setShowMore] = useState(false)

  function handleSeeMore({val}:{val:boolean}) {
    // setShowMore(val);
   alert(`See More Value-${val}`)
    
    // Navigate to the services page
  }
    const services = [
      {
        title: "Construction Services",
        image: "/1b1db52023fe2bddc41cd1ec98faa4c8.jpeg",
        description:
          "Nibh aliquet aenean feugiat eget semper nibh vel. Et suspendisse massa amet urna tristique et. Aliquam ac enim diam turpis. Quis id nullam.",
          addtionalDetails:[
            {
              title: "Construction Materials",
              image: "/services/construction-materials/2beceb80432631df2823c79188b3ced9.jpeg",
              description:"",
            }, {
              title: "Construction Materials",
              image: "/services/construction-materials/2beceb80432631df2823c79188b3ced9.jpeg",
              description:
                "Nibh aliquet aenean feugiat eget semper nibh vel. Et suspendisse massa amet urna tristique et. Aliquam ac enim diam turpis. Quis id nullam.",
            }, {
              title: "Construction Materials",
              image: "/services/construction-materials/2beceb80432631df2823c79188b3ced9.jpeg",
              description:
                "Nibh aliquet aenean feugiat eget semper nibh vel. Et suspendisse massa amet urna tristique et. Aliquam ac enim diam turpis. Quis id nullam.",
            }, {
              title: "Construction Materials",
              image: "/services/construction-materials/2beceb80432631df2823c79188b3ced9.jpeg",
              description:
                "Nibh aliquet aenean feugiat eget semper nibh vel. Et suspendisse massa amet urna tristique et. Aliquam ac enim diam turpis. Quis id nullam.",
            }, {
              title: "Construction Materials",
              image: "/services/construction-materials/2beceb80432631df2823c79188b3ced9.jpeg",
              description:
                "Nibh aliquet aenean feugiat eget semper nibh vel. Et suspendisse massa amet urna tristique et. Aliquam ac enim diam turpis. Quis id nullam.",
            },

          ]
      },
      {
        title: "Construction Materials",
        image: "/2beceb80432631df2823c79188b3ced9.jpeg",
        description:
          "Nibh aliquet aenean feugiat eget semper nibh vel. Et suspendisse massa amet urna tristique et. Aliquam ac enim diam turpis. Quis id nullam.",
      },
      // {
      //   title: "Equipment Hiring",
      //   image: "/7ae62523656dc67cfafeb27d10619571.jpeg",
      //   description:
      //     "Nibh aliquet aenean feugiat eget semper nibh vel. Et suspendisse massa amet urna tristique et. Aliquam ac enim diam turpis. Quis id nullam.",
      // },
      // {
      //   title: "Laying of Pipes",
      //   image: "/c7a59c4e9412cf769cebfb29d05561ee.jpeg", // Use a placeholder if missing
      //   description:
      //     "Nibh aliquet aenean feugiat eget semper nibh vel. Et suspendisse massa amet urna tristique et. Aliquam ac enim diam turpis. Quis id nullam.",
      // },
    ];
  
    return (
      <section className="w-full py-16 bg-theme--main-surface">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700">Services</h2>
          <p className="text-gray-600 mt-2">
            Expeditionem commenti usus error, moeruni funmii vel molitium iusto
            sufficit. Se non reverti atque. Louor nicolae in pede tui nibh
            destituta.
          </p>
  
          {/* Grid Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-left">
                <div className="w-full h-60 bg-gray-300 rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-green-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-700">{service.description}</p>
                <button onClick={()=>handleSeeMore({val:true})}
                  type="button"
                  className="mt-4 inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition"
                >
                  Learn More <span className="ml-2">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  