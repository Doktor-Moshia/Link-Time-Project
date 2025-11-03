import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart, Flame, Shield, Clock, DollarSign } from "lucide-react";

import firstaidHero from "../assets/firstaid_hero.png";
import firefightingHero from "../assets/firefighting_hero.png";
import sheHero from "../assets/she_hero.png";
import { coursesData } from "../data/coursesData";

function HomePage({ setCurrentPage }) {
  const heroSlides = [
    {
      title: "Professional First Aid Training",
      subtitle: "Learn life-saving skills with our certified instructors",
      image: firstaidHero,
      cta: "Explore First Aid Courses",
    },
    {
      title: "Fire Safety & Emergency Response",
      subtitle: "Protect lives and property with proper fire safety training",
      image: firefightingHero,
      cta: "Learn Fire Safety",
    },
    {
      title: "Occupational Health & Safety",
      subtitle: "Create safer workplaces with comprehensive safety training",
      image: sheHero,
      cta: "Safety Training Programs",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide auto-rotation (only affects this component)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const popularCourses = [
    coursesData.firstAid[0],
    coursesData.fireFighting[0],
    coursesData.occupationalSafety[0],
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            {heroSlides[currentSlide].subtitle}
          </motion.p>
          <motion.button
            type="button"
            key={`cta-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            onClick={() => setCurrentPage("courses")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <span>{heroSlides[currentSlide].cta}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Link Time Learning?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We empower individuals and teams to respond with confidence in
              emergencies. Your knowledge can save lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Heart className="w-8 h-8 text-green-600 dark:text-green-400" />}
              bgColor="bg-green-100 dark:bg-green-900"
              title="Hands-On First Aid"
              text="Learn how to assess, treat, and stabilize injuries before help arrives. Practical, accredited training that builds real confidence."
              delay={0.1}
            />
            <FeatureCard
              icon={<Flame className="w-8 h-8 text-red-600 dark:text-red-400" />}
              bgColor="bg-red-100 dark:bg-red-900"
              title="Fire Fighting Essentials"
              text="Prevent fires, act quickly, and handle extinguishers like a pro. Real-world, hands-on readiness."
              delay={0.2}
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
              bgColor="bg-blue-100 dark:bg-blue-900"
              title="Workplace Safety Leadership"
              text="Lead safety with SHE Rep and Incident Investigation training. Reduce risks and protect your team."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Get started with our most popular training programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      {course.badge}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{course.price}</span>
                      </span>
                    </div>
                    <button
                      onClick={() => setCurrentPage("courses")}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage("courses")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Courses</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Feature Card
const FeatureCard = ({ icon, bgColor, title, text, delay }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay }}
    className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
  >
    <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{text}</p>
  </motion.div>
);

export default React.memo(HomePage);
