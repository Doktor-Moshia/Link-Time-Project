// src/pages/AboutPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Target, TrendingUp, Globe } from "lucide-react";
import sheHero from "../assets/she_hero.png";
import maryNdlovu from "../assets/mary_ndlovu.png";
import johnMoyo from "../assets/john_moyo.png";
import lindaMaseko from "../assets/linda_maseko.png";

const teamMembers = [
  {
    name: "Mary Ndlovu",
    role: "Lead First Aid Instructor",
    experience: "15+ years",
    description: "Certified paramedic with extensive experience in emergency medical training and workplace safety.",
    specialties: ["First Aid", "CPR", "Emergency Response"],
    image: maryNdlovu
  },
  {
    name: "John Moyo",
    role: "Fire Safety Specialist",
    experience: "12+ years",
    description: "Former firefighter specializing in fire prevention, emergency evacuation, and safety compliance.",
    specialties: ["Fire Fighting", "Safety Audits", "Risk Assessment"],
    image: johnMoyo
  },
  {
    name: "Linda Maseko",
    role: "SHE Training Coordinator",
    experience: "10+ years",
    description: "Expert in occupational health and safety with a focus on regulatory compliance and workplace wellness.",
    specialties: ["SHE Rep", "OHS Act", "Incident Investigation"],
    image: lindaMaseko
  }
];

const AboutPage = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Link Time Learning Institution
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A 100% Black Youth-owned company committed to affordable, accredited safety training that empowers your team to lead with confidence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                LINK TIME TRADING promotes proper, transparent, and professional business practice in South Africa, helping businesses reach their full potential while empowering our own company. We believe in growing our company through the growth of others.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">QCTO Accredited</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Expert Instructors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Practical Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Flexible Scheduling</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={sheHero} alt="Our Mission" className="rounded-xl shadow-lg" />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Reducing Unemployment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Creating opportunities through skills development</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <Target className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Supporting BEE</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Grassroots-level BEE implementation</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <TrendingUp className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Service Quality</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Improving services for struggling businesses</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <Globe className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Growth & Sustainability</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Driving growth in Polokwane</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Meet Our Expert Team
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Our certified and experienced team is dedicated to promoting safety and emergency preparedness.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{member.experience} experience</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
