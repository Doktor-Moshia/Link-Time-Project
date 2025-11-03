// src/pages/CoursesPage.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, DollarSign, Search, Heart, Flame, Shield, Award, Users, Calendar, Briefcase, BookOpen, CheckCircle, X } from "lucide-react";
import { coursesData } from "../data/coursesData";

const CoursesPage = ({ setCurrentPage, setBookingModalOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const allCourses = useMemo(() => {
    return Object.entries(coursesData).flatMap(([category, courses]) =>
      courses.map(course => ({ ...course, category }))
    );
  }, []);

  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allCourses, searchTerm, selectedCategory]);

  return (
    <div className="pt-16">
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Training Courses
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Explore our range of accredited courses designed to equip you with essential real-world skills for safety and emergency response.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="all">All Categories</option>
                <option value="firstAid">First Aid</option>
                <option value="fireFighting">Fire Fighting</option>
                <option value="occupationalSafety">Occupational Safety</option>
              </select>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      {course.badge}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{course.level}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
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
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => setBookingModalOpen(true)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Course Categories */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Course Categories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <Heart className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">First Aid Training</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  From basic first aid to advanced emergency response, learn life-saving skills with our comprehensive first aid programs.
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {coursesData.firstAid.map(course => (
                    <div key={course.id}>{course.title}: {course.price} ({course.duration})</div>
                  ))}
                </div>
              </div>

              <div className="text-center p-8 bg-red-50 dark:bg-red-900/20 rounded-xl">
                <Flame className="w-16 h-16 text-red-600 dark:text-red-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Fire Fighting</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Essential fire safety skills for immediate response to fire emergencies in any environment.
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {coursesData.fireFighting.map(course => (
                    <div key={course.id}>{course.title}: {course.price} ({course.duration})</div>
                  ))}
                </div>
              </div>

              <div className="text-center p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <Shield className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Occupational Safety</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Comprehensive workplace safety training for representatives, investigators, and safety leaders.
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {coursesData.occupationalSafety.map(course => (
                    <div key={course.id}>{course.title}: {course.price} ({course.duration})</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Our Courses */}
          <div className="mt-20 bg-gray-50 dark:bg-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Why Choose Our Courses?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Fully Accredited</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">QCTO recognized certificates</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Expert Instructors</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Experienced professionals</p>
              </div>
              <div className="text-center">
                <Calendar className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Public & onsite training</p>
              </div>
              <div className="text-center">
                <Briefcase className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Practical Training</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Hands-on learning experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedCourse.title}</h2>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full h-64 object-cover rounded-lg mb-6" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Course Details</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700 dark:text-gray-300">Duration: {selectedCourse.duration}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <DollarSign className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700 dark:text-gray-300">Price: {selectedCourse.price}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BookOpen className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700 dark:text-gray-300">Level: {selectedCourse.level}</span>
                      </div>
                    </div>

                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Admission Requirements:</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedCourse.admissionRequirements}</p>

                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Learning Outcomes:</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedCourse.outcomes}</p>

                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Certificate:</h4>
                    <p className="text-gray-600 dark:text-gray-400">{selectedCourse.certificate}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Course Chapters</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedCourse.chapters.map((chapter, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{chapter}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          setBookingModalOpen(true);
                          setSelectedCourse(null);
                        }}
                        className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Enroll Now
                      </button>
                      <button
                        onClick={() => setCurrentPage('contact')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Contact for Group Booking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoursesPage;
