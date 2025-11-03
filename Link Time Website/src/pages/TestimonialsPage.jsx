// src/pages/TestimonialsPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight, Phone } from "lucide-react";
import maryNdlovu from "../assets/mary_ndlovu.png";
import johnMoyo from "../assets/john_moyo.png";
import lindaMaseko from "../assets/linda_maseko.png";

const testimonials = [
  {
    id: 1,
    name: 'Thabo Mthembu',
    role: 'Safety Officer',
    company: 'Mining Corp Ltd',
    rating: 5,
    text: 'The trainers were professional and very helpful. I now feel confident in handling first aid situations! The practical approach made all the difference.',
    image: maryNdlovu
  },
  {
    id: 2,
    name: 'Nompumelelo Dlamini',
    role: 'HR Manager',
    company: 'Tech Solutions SA',
    rating: 5,
    text: 'I brought my whole team to Link Time — best decision for our company safety. The training was comprehensive and engaging.',
    image: johnMoyo
  },
  {
    id: 3,
    name: 'Sipho Radebe',
    role: 'Factory Supervisor',
    company: 'Manufacturing Plus',
    rating: 5,
    text: 'Excellent fire safety training! The hands-on experience with fire extinguishers was invaluable. Highly recommend Link Time Learning.',
    image: lindaMaseko
  },
  {
    id: 4,
    name: 'Lerato Mokwena',
    role: 'Office Manager',
    company: 'Business Hub',
    rating: 5,
    text: 'Outstanding SHE Representative course. The instructors are knowledgeable and the content is directly applicable to our workplace.',
    image: maryNdlovu
  }
];

const TestimonialsPage = ({ setCurrentPage }) => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Students Say
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Hear from our satisfied students who have transformed their careers and gained life-saving skills through our training programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Start your safety training journey today and become part of our growing community of certified professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage && setCurrentPage('courses')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Browse Courses</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentPage && setCurrentPage('contact')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
