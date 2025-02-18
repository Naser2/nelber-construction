import { FaArrowLeft } from "react-icons/fa";
import { Service } from "@/types";
import { title, subtitle } from "@/components/primitives";

const ServicePanel = ({ service, isOpen, onClose }: { service: Service, isOpen: boolean, onClose: () => void }) => {
    if (!service) return null;
  
    return (
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          
      >
        <div 
          className={`fixed inset-y-0 left-0 w-full md:w-2/3 bg-white  
            transform transition-transform duration-300 ease-in-out z-50
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between p-4 border-b shadow-lg">
            <button 
              onClick={onClose}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <FaArrowLeft className="w-6 h-6 mr-2" />
              <span>Back</span>
            </button>
            <h2 className="font-bold text-slate-400 py-6">{service.title}</h2>
          </div>
  
          {/* Panel Content */}
          <div className="h-[calc(100%-10rem)] overflow-y-auto p-6 text-left">
            <h2 className="text-2xl font-bold text-green-700 mb-4 ">{service.title}</h2>
            <p className="text-gray-700 mb-6">{service.description}</p>
  
            {/* Additional Details Section */}
            {service.addtionalDetails && (
              <div className="space-y-8">
                
                {service.addtionalDetails.map((detail, index) => (
                  <div key={index} className="border-b pb-6 last:border-b-0">
                    
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="mb-4">
                        <img
                            src={detail.image}
                            alt={detail.title}
                            className="w-full h-64 object-cover rounded-lg shadow-xl"
                        />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-green-700 mb-2">
                              {detail.title}
                            </h4>
                            <p className="text-gray-700">{detail.description}</p>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
        </div>
      </div>
    );
  };

  export default ServicePanel;
  