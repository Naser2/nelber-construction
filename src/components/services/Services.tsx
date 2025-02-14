import { useState } from "react";
import { FaBuilding, FaIndustry, FaHome } from "react-icons/fa";
import {Icon} from "@iconify/react";
import FadeInImage from "../Hero/fade-in-image";

const services = [
  { id: "residential", name: "Residential", icon:  (<FaHome />) },
  { id: "commercial", name: "Commercial", icon: <FaBuilding /> },
  { id: "industrial", name: "Industrial", icon: <FaIndustry /> },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState("residential");

  return (
    <section className="w-full py-16 bg-theme--main-surface">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800">Main Services</h2>
        <p className="text-gray-600 mt-2">
          Expeditions commenti usue errore, moerori funmii vel molitium iusto sufficit. 
          Co non reverti atque. Louor nicolae in pede tui nibh destituta.
        </p>

        {/* Service Tabs */}
        <div className="flex justify-center mt-6 space-x-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`flex items-center px-6 py-3 rounded-lg text-lg font-semibold transition
                ${
                  selectedService === service.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
            >
              {service.icon} <span className="ml-2">{service.name}</span>
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
             <FadeInImage className="w-full h-[70vh] lg:max-h-[60vh] md:w-1/2 rounded-lg shadow-lg"
                 fill
                 priority
                 alt="Gradient background"
                //  src="/1b1db52023fe2bddc41cd1ec98faa4c8.jpeg"
                 src="/1b1db52023fe2bddc41cd1ec98faa4c8.jpeg"
               />
{/*        
         <img
            src="/1b1db52023fe2bddc41cd1ec98faa4c8.jpeg"
            alt={selectedService}
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          /> */}
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold">{selectedService.charAt(0).toUpperCase() + selectedService.slice(1)}</h3>
            <p className="mt-4 text-gray-700">
              Earum lorem magni iis nibh, condimentum rationibus illo, non ab intestinum 
              et sessio si videre eodem restat. At iure eu scaturiat methodo antichristus 
              natione nuntios iste in imperii ad ad mercede praelcusa.
            </p>
            <p className="mt-2 text-gray-700">
              Duis fuga lacus natus at oppugnationem mi formastis fiant nemo vincit specie 
              ex tacite totam laborant. Fructum indolem wisi te civitas me eu armorum propheta.
            </p>
            <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
