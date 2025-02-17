import { title } from "process";
import { useState } from "react";
import { Service } from "@/types";
import ServiceDetailPanel from "../service-detail/ServiceDetailPanel";

export default function ServicesGrid() {

  const services = [
    {
      title: "Construction Services",
      image: "/1b1db52023fe2bddc41cd1ec98faa4c8.jpeg",
      description:
        "Nelber Farm is your trusted partner in construction, specializing in residential homes, roads, commercial buildings, and classrooms. We take you through the entire process—from initial consultation and accurate quotations to material supply, transportation, and expert construction. Our team ensures quality craftsmanship, timely project completion, and a seamless experience from start to finish.",
        addtionalDetails:[
          {
            title: "Road Construction and Repair",
            image: "/services/construction-materials/2beceb80432631df2823c79188b3ced9.jpeg",
            description:"We specialize in the construction of new roads and the repair of old roads, ensuring durable, well-paved, and smooth surfaces for long-term use. Our team handles everything from site preparation and grading to asphalt laying and finishing, delivering high-quality roads for urban and rural areas.",
          }, {
            title: "Residential, Commercial & Classroom Construction",
            image: "/services/construction-materials/2beceb80432631df2823c79188b3ced9.jpeg",
            description:
              "We provide comprehensive construction services for residential homes, commercial buildings, and classrooms, ensuring quality workmanship and timely project completion. Our team handles everything from foundation laying and wall construction to roofing, finishing, and interior design, giving you a turnkey solution for your building needs.",
          },

        ]
    },
    {
      title: "Construction Materials",
      image: "/2beceb80432631df2823c79188b3ced9.jpeg",
      description:
        "At Nelber Farm, we provide a reliable and efficient supply of high-quality construction materials to meet your building needs. We deliver ballast, sand, murram, hardcore volcanic rock, machine-cut stones, and foundation blocks directly to your site, ensuring timely transportation and competitive pricing. Our fleet includes 13, 20, and 30-ton trucks, giving you flexibility based on your project requirements. Whether you're building a home, commercial space, or infrastructure project, trust us to supply top-grade materials.",
        addtionalDetails:[
          {
            title: "Ballast(Three Types – Different Sizes)",
            image: "/services/construction-materials/ballast.jpg",
            description:" We supply three types of ballast, each available in various sizes to suit different construction needs. Delivered in 13, 20, and 30-ton trucks, ensuring you get the right quantity for your project: 1 ¾\" ballast – Ideal for concrete mixing and structural foundations. 2 ½\" ballast – Suitable for plastering and finishing works. 3 ¼\" ballast – Perfect for screeding and flooring projects.",
          }, {
            title: "Sand",
            image: "/services/construction-materials/sand.jpg",
            description:
              "Our high-quality river sand and coarse sand are perfect for plastering, block making, and concrete work. We ensure clean and debris-free sand for superior building strength. Available in 13, 20, and 30-ton truckloads.",
          }, {
            title: "Murram",
            image: "/services/construction-materials/murram.jpg",
            description:
              "We supply premium-grade murram, commonly used for road construction, landscaping, and ground leveling. Our murram is well-compacted and free from impurities, delivered in 13, 20, and 30-ton trucks to meet your site requirements.",
          }, {
            title: "Hardcore Volcanic Rock",
            image: "/services/construction-materials/hardcore.jpg",
            description:
              "Hardcore volcanic rock is essential for sturdy foundations, road base layers, and filling works. Our high-density, durable hardcore provides the perfect base for any structure, ensuring long-term stability.",
          }, {
            title: "Machine cut Taveta stones",
            image: "/services/construction-materials/machinetaveta.jpg",
            description:
              "We supply Taveta machine-cut stones, known for their uniform size, durability, and smooth finish, making them ideal for wall construction and exterior finishing. These stones reduce mortar use and speed up construction time.",
          },
          {
            title: "Foundation Taveta Quarry Blocks",
            image: "/services/construction-materials/foundation.jpg",
            description:
              "Our high-quality foundation blocks are perfect for building strong, stable foundations for homes, commercial buildings, and infrastructure projects. These blocks are durable, easy to install, and provide excellent structural support.",
          },
          {
            title: "Machine Cut Thika Ndarugu Stones",
            image: "/services/construction-materials/machinethika.jpg",
            description:
              "We supply Thika Ndarugu machine-cut stones, known for their high strength, durability, and uniform size. These stones are ideal for wall construction, providing a smooth finish and reducing mortar use.",

          },

        ]
    },
    
    {
      title: "Equipment Hiring",
      image: "/7ae62523656dc67cfafeb27d10619571.jpeg",
      description:
        "At Nelber Farm, we offer reliable construction equipment for hire, including a back loader, wheel loader, and excavator. Our machines come with skilled operators to ensure efficiency and safety on your site. Whether you need to dig, lift, load, or clear land, our equipment is well-maintained and available for flexible rental terms.",
        addtionalDetails:[
          {
            title: "Back hoe",
            image: "/services/equipment-hiring/Backhoe.jpg",
            description:"Our back hoe is a versatile machine used for digging, trenching, and material handling. It features a front bucket for loading and a rear arm for excavation, making it perfect for small to medium construction projects. This machine is ideal for foundation digging, backfilling, and clearing debris, ensuring efficiency on your site.",
          }, {
            title: "Wheel Loader",
            image: "/services/equipment-hiring/wheelloader.jpg",
            description:
              "The wheel loader is designed for lifting and transporting heavy materials like sand, gravel, and ballast. With its large bucket capacity, it speeds up material handling, making it essential for construction sites, roadworks, and quarries. Our well-maintained wheel loader ensures fast and efficient loading to keep your project moving.",
          }, {
            title: "Excavator",
            image: "/services/equipment-hiring/excavator.jpg",
            description:
              "Our excavator is built for heavy-duty digging, land clearing, and foundation excavation. It features a powerful hydraulic arm for precision work in trenching, rock breaking, and large-scale earthmoving. Whether you're working on building foundations or site preparation, this machine delivers strength and reliability for your project.",
          },

        ]
    },
    {
      title: "Laying of Pipes",
      image: "/c7a59c4e9412cf769cebfb29d05561ee.jpeg", // Use a placeholder if missing
      description:
        "We provide professional pipe laying services for water, drainage, and sewage systems, ensuring strong, leak-proof, and long-lasting installations. Our team handles everything from excavation and trenching to pipe fitting and backfilling, using high-quality materials and precise techniques. Whether for residential, commercial, or industrial projects, we guarantee efficient and reliable pipeline solutions.",
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0])
  const [showMore, setShowMore] = useState(false)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  function handleSeeMore({val}:{val:Service}) {
    // setShowMore(val);
    setSelectedService(val);
    // Prevent body scroll when panel is open
    document.body.style.overflow = 'hidden';
    // Navigate to the services page
    setIsPanelOpen(true);
  }

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    // Restore body scroll when panel is closed
    document.body.style.overflow = 'auto';
  };
  
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
                <button onClick={()=>handleSeeMore({val:service})}
                  type="button"
                  className="mt-4 inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition"
                >
                  Learn More <span className="ml-2">→</span>
                </button>
              </div>
            ))}
          </div>
          {/* Sliding Panel */}
          <ServiceDetailPanel 
            service={selectedService}
            isOpen={isPanelOpen}
            onClose={handleClosePanel}
          />
        </div>
      </section>
    );
  }
  