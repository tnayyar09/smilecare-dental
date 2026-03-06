import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ServiceCard } from "@/components/ServiceCard";
import { Stethoscope, Smile, Activity, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-16 pb-32 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Accepting New Patients
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-6">
                Your Smile, Our <span className="text-teal-600">Passion</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Experience world-class dental care with a gentle touch. From routine checkups to advanced cosmetic procedures, we are dedicated to your oral health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-appointment">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View Services
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-8 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-teal-600" />
                  Certified Experts
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-teal-600" />
                  Award Winning
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-teal-600" />
                  24/7 Support
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:h-[600px] hidden lg:block"
            >
              <div className="absolute inset-0 bg-teal-200 rounded-full blur-3xl opacity-20 animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Happy patient with beautiful smile" 
                className="relative rounded-3xl shadow-2xl object-cover h-full w-full"
              />
              
              {/* Floating Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="h-8 w-8 rounded-full border-2 border-white" alt="Avatar" />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-slate-900">500+ Happy Patients</div>
                </div>
                <div className="flex items-center gap-1 text-yellow-400 text-xs">
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <span className="text-slate-400 ml-1">(4.9/5 Reviews)</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Comprehensive Dental Care</h2>
          <p className="text-lg text-slate-600">We offer a wide range of dental services to ensure your smile stays healthy and beautiful for a lifetime.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="General Dentistry" 
            description="Routine checkups, cleanings, and fillings to maintain optimal oral health."
            icon={Stethoscope}
          />
          <ServiceCard 
            title="Cosmetic Dentistry" 
            description="Teeth whitening, veneers, and bonding to enhance your smile's appearance."
            icon={Sparkles}
          />
          <ServiceCard 
            title="Orthodontics" 
            description="Braces and clear aligners to straighten teeth and correct bite issues."
            icon={Smile}
          />
          <ServiceCard 
            title="Dental Implants" 
            description="Permanent solutions for missing teeth that look and feel natural."
            icon={Activity}
          />
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button variant="outline" size="lg">View All Services</Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-teal-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why Choose SmileCare?</h2>
              <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                We combine advanced technology with compassionate care to provide the best dental experience possible. Our clinic is designed to make you feel comfortable and relaxed.
              </p>
              
              <ul className="space-y-4">
                {[
                  "State-of-the-art dental technology",
                  "Experienced and friendly staff",
                  "Comfortable and relaxing environment",
                  "Affordable payment plans",
                  "Emergency dental care available"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 rounded-2xl rotate-3 opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern dental clinic interior" 
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="bg-teal-50 rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Book your appointment today and take the first step towards a healthier, brighter smile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book-appointment">
              <Button size="lg">Book Appointment Now</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
