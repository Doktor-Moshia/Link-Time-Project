import React, { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X, Phone, Mail, MapPin, Clock, Star, Users, Award, Shield, Heart, Flame, HardHat, Calendar, MessageCircle, CheckCircle, ArrowRight, Sun, Moon, BookOpen, FileText, TrendingUp, DollarSign, Globe, Zap, Target, Briefcase, Search, Filter, User, CreditCard, Bell, Settings, Home, Info, GraduationCap, MessageSquare } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation";     
import HomePage from "./pages/HomePage";              
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import BlogPage from "./pages/BlogPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // Booking Modal Component
  const BookingModal = () => (
    <AnimatePresence>
      {bookingModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setBookingModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Book Your Course</h2>
                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">🎉 Online Booking System</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our advanced online booking system is coming soon! For now, please contact us directly to secure your spot in our training programs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">Quick Booking Options:</h4>
                  <a href="tel:+27151234567" className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call +27 72 922 1977</span>
                  </a>
                  <a href="mailto:hlanhlamashaba@gmail.com" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </a>
                  <button
                    onClick={() => {
                      setBookingModalOpen(false);
                      setCurrentPage('contact');
                    }}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Contact Form</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">Coming Soon Features:</h4>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Real-time availability</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Instant confirmation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Online payments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Group discounts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Calendar integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Animation variants (optional)
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="relative z-0">
        <AnimatePresence mode="wait">
          {currentPage === "home" && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <HomePage setCurrentPage={setCurrentPage} />
            </motion.div>
          )}

          {currentPage === "about" && (
            <motion.div key="about" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <AboutPage />
            </motion.div>
          )}

          {currentPage === "courses" && (
            <motion.div key="courses" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <CoursesPage setCurrentPage={setCurrentPage} setBookingModalOpen={setBookingModalOpen} />
            </motion.div>
          )}

          {currentPage === "blog" && (
            <motion.div key="blog" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <BlogPage />
            </motion.div>
          )}

          {currentPage === "testimonials" && (
            <motion.div key="testimonials" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <TestimonialsPage setCurrentPage={setCurrentPage} />
            </motion.div>
          )}

          {currentPage === "contact" && (
            <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ContactPage setBookingModalOpen={setBookingModalOpen} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <BookingModal />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
