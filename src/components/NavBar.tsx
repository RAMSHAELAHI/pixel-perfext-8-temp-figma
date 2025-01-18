import Link from "next/link";
import { GiSofa } from "react-icons/gi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiShoppingCart } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function NavBar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/products", label: "Product" },
    { href: "/pages", label: "Pages" },
    { href: "/about", label: "About" },
  ];

  const cartItems = [
    { href: "/cart", label: "Cart", icon: <PiShoppingCart />, count: 2 },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-blue-950 text-white py-2 text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6">
          <p className="text-center mb-2 sm:mb-0">
            Free Shipping On All Orders Over $50
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span>English</span>
              <RiArrowDropDownLine
                className="text-3xl"
                aria-label="Change Language"
              />
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/faq"
                className="flex items-center gap-2 text-white hover:text-gray-300"
              >
                FAQ's
                <IoIosHelpCircleOutline
                  className="text-xl"
                  aria-label="FAQ Help"
                />
              </Link>
              <Link href="/support" className="hover:text-gray-300">
                Need Help
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-0">
              <div className="p-1 border-2 border-yellow-500 rounded">
                <GiSofa className="text-teal-500 text-3xl" aria-label="Logo" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                Comforty
              </h1>
            </Link>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm font-medium">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Cart and Contact Section */}
            <div className="flex items-center gap-6 mt-4 sm:mt-0">
              {cartItems.map(({ href, label, icon, count }) => (
                <div key={href} className="flex items-center gap-2">
                  {icon}
                  <Link href={href} className="text-gray-800 font-medium">
                    {label}
                  </Link>
                  <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {count}
                  </span>
                </div>
              ))}
              {/* Contact */}
              <div>
                <a
                  href="tel:03238277117"
                  className="text-gray-600 hover:text-gray-800 font-medium"
                >
                  Contact: 0323-8277117
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

