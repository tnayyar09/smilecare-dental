import { motion } from "motion/react";
import { User, Award, GraduationCap } from "lucide-react";

export default function About() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Dentist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Sarah has over 15 years of experience in cosmetic and restorative dentistry. She is passionate about creating beautiful smiles."
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Specializing in braces and Invisalign, Dr. Chen helps patients of all ages achieve perfectly aligned teeth."
    },
    {
      name: "Dr. Emily Davis",
      role: "Pediatric Dentist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Emily loves working with kids and making their dental visits fun and fear-free."
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6"
          >
            About SmileCare
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Founded in 2010, SmileCare Dental has been serving the community with top-notch dental care. Our mission is to provide affordable, high-quality dentistry in a comfortable environment.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To improve the oral health and well-being of our community through education, prevention, and compassionate care. We strive to treat every patient like family.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <GraduationCap className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be the leading dental provider in the region, known for our clinical excellence, innovative technology, and patient-centered approach.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Meet Our Team</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our team of experienced professionals is dedicated to providing you with the best possible care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                <p className="text-teal-600 font-medium text-sm mb-4">{doctor.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{doctor.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
