import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg fill="none" width="36" height="36" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            />
          </svg>
          <p className="font-bold text-gray-800">ACME</p>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden sm:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-black cursor-pointer">Features</li>
          <li className="text-blue-600 font-bold cursor-pointer">Customers</li>
          <li className="hover:text-black cursor-pointer">Integrations</li>
        </ul>

        {/* Ações Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-gray-700 hover:text-black">Login</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="sm:hidden text-2xl text-gray-800"
        >
          <GoKebabHorizontal  />
        </button>
      </div>

      {/* Menu Mobile (Overlay) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <p className="font-bold text-lg">Menu</p>
          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl text-gray-800"
          >
            <IoClose />
          </button>
        </div>

        <ul className="flex flex-col p-4 gap-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`text-lg ${
                index === 2
                  ? "text-blue-600 font-bold"
                  : index === menuItems.length - 1
                  ? "text-red-600 font-medium"
                  : "text-gray-800"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
