import React from "react";
import { Facebook, Twitter, Instagram,  Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="text-teal-500 text-3xl mr-2">🛋️</div> {/* Icon */}
            <h1 className="text-xl font-bold">Comforty</h1>
          </div>
          <p className="text-gray-600 mb-4">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
            Cras egestas purus.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons */}
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-teal-500">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-teal-500">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-teal-500">
              <Instagram size={20} />
            </a>
            
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-teal-500">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Category Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Category</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-teal-500">Sofa</a></li>
            <li><a href="#" className="hover:text-teal-500">Armchair</a></li>
            <li><a href="#" className="hover:text-teal-500">Wing Chair</a></li>
            <li><a href="#" className="hover:text-teal-500">Desk Chair</a></li>
            <li><a href="#" className="hover:text-teal-500">Wooden Chair</a></li>
            <li><a href="#" className="hover:text-teal-500">Park Bench</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-teal-500">Help & Support</a></li>
            <li><a href="#" className="hover:text-teal-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-teal-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-teal-500">Help</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Newsletter</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded-md shadow hover:bg-teal-600 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-600 mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
