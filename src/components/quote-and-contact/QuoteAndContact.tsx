export default function QuoteContactSection() {
    return (
      <section id="contact" className="w-full py-16 bg-[ #2A322B];
]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700">
            Leading Way In Building & Construction
          </h2>
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 text-gray-700">
            <div className="flex items-center space-x-2">
              <span className="text-green-600">✔</span>
              <span>Professional Staff</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600">✔</span>
              <span>100% Satisfaction</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600">✔</span>
              <span>Transparent Pricing</span>
            </div>
          </div>
  
          {/* Form & Contact Info */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Request a Quote Form */}
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg text-left sm:max-w-[25rem]">
              <h3 className="text-green-400 text-lg font-semibold">
                Request A Quote
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Complete control over products allows us to give our customers the
                best quality prices and services.
              </p>
  
              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 max-w-[25rem] lg:grid-cols-2 gap-4">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-5/6 lg:max-w-[16rem] px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-5/6 lg:max-w-[16rem] px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid max-w-[25.6rem]  grid-cols-1 lg:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-5/6 lg:max-w-[16rem]  px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none"
                  />
                  <select className="w-5/6 lg:max-w-[16rem] px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none">
                    <option>Select Service</option>
                    <option>Construction</option>
                    <option>Renovation</option>
                    <option>Consulting</option>
                  </select>
                </div>
                <textarea
                  placeholder="Additional Details"
                  className="w-5/6 lg:w-full lg:max-w-[23rem] px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none h-24"
                ></textarea>
  
                <button className="w-full max-w-[26rem] bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition">
                  Submit Request
                </button>
              </form>
            </div>
  
            {/* Contact Info */}
            <div className="grid gap-0 bg-gray-900 text-white p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-green-400 text-lg font-semibold">
                Contact Info
              </h3>
  
              <div className="mt-4 text-gray-300">
                <h4 className="font-semibold">Our Location</h4>
                <p className="text-sm">
                  18 Office Building 4th Floor Unit, Kimana, Kajiado South, Kenya
                </p>
              </div>
  
              <div className="mt-4 text-gray-300">
                <h4 className="font-semibold">Quick Contact</h4>
                <p className="text-sm">Phone: +254 725 706 996</p>
                <p className="text-sm">Email: info@nelberfarmltd.com</p>
              </div>
  
              <div className="mt-4 text-gray-300">
                <h4 className="font-semibold">Opening Hours</h4>
                <p className="text-sm">Monday - Friday</p>
                <p className="text-sm">09:00 AM - 06:00 PM</p>
              </div>
  
              <div className="mt-6 self-end">
                <p className="text-sm text-gray-400 font-semibold">
                  Do You Have Any Question, Just Contact Us To Get Help!
                </p>
                <button className="w-full mt-4 bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition ">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  