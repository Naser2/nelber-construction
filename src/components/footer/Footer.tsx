import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-theme--main-surface py-10 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section - Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b pb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center rounded-full">
              <FaEnvelope />
            </div>
            <div>
              <p className="font-semibold">Mail Us</p>
              <p className="text-sm">info@nelberfarmltd.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center rounded-full">
              <FaPhone />
            </div>
            <div>
              <p className="font-semibold">Call Us</p>
              <p className="text-sm">+254 725 706 996</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-sm">Kimana, Kajiado South, Kenya</p>
            </div>
          </div>
        </div>

        {/* Middle Section - Company Info & Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Left - Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">NELBER</h3>
            <p className="text-gray-700 text-sm mt-2">
              Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-8 h-8 bg-green-600 text-white flex items-center justify-center rounded-full">
                <FaInstagram />
              </a>
              <a href="#" className="w-8 h-8 bg-green-600 text-white flex items-center justify-center rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="w-8 h-8 bg-green-600 text-white flex items-center justify-center rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="w-8 h-8 bg-green-600 text-white flex items-center justify-center rounded-full">
                <FaPinterest />
              </a>
            </div>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:text-green-700">About Us</a></li>
              <li><a href="#" className="hover:text-green-700">Services</a></li>
              <li><a href="#" className="hover:text-green-700">Service Request</a></li>
              <li><a href="#" className="hover:text-green-700">Contact Us</a></li>
            </ul>
          </div>

          {/* Right - Newsletter */}
          <div>
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-gray-700 text-sm mt-2">
              Subscribe to our newsletter to stay up-to-date with the latest news, tips, and trends in the industry.
            </p>
            <div className="mt-4 flex items-center bg-gray-100 p-2 rounded-lg">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent outline-none px-2 text-sm text-gray-900"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-center text-sm text-gray-600 mt-8 border-t pt-4">
          Copyright © 2025 | Nelber Farm Ltd.
        </div>
      </div>
    </footer>
  );
}
