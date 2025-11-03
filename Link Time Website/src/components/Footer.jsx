// src/components/Footer.jsx
import React from "react";
import { Home, Info, GraduationCap, FileText, MessageSquare, Mail } from "lucide-react";
import logoNew from "../assets/logo_new.png";

const Footer = ({ setCurrentPage }) => {
  const navigation = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'about', name: 'About', icon: Info },
    { id: 'courses', name: 'Courses', icon: GraduationCap },
    { id: 'blog', name: 'Blog', icon: FileText },
    { id: 'testimonials', name: 'Testimonials', icon: MessageSquare },
    { id: 'contact', name: 'Contact', icon: Mail }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={logoNew} alt="Link Time Learning" className="h-10 w-auto" />
              <span className="font-bold text-xl">Link Time Learning</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering individuals and teams with life-saving skills and workplace safety knowledge.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </button>
              <button className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </button>
              <button className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setCurrentPage(item.id)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold text-lg mb-6">Courses</h3>
            <ul className="space-y-3 text-gray-400">
              <li>First Aid Training</li>
              <li>Fire Fighting</li>
              <li>SHE Representative</li>
              <li>Custom Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <p>Polokwane, Limpopo</p>
              <p>+27 (0) 15 123 4567</p>
              <p>info@linktimelearning.co.za</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Link Time Learning Institution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
