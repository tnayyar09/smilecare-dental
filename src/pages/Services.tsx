import { ServiceCard } from "@/components/ServiceCard";
import { Stethoscope, Smile, Activity, Sparkles, Baby, Syringe, ScanFace, HeartPulse } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "General Dentistry",
      description: "Routine checkups, cleanings, fillings, and extractions to maintain optimal oral health for the whole family.",
      icon: Stethoscope
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, porcelain veneers, and bonding to enhance your smile's appearance and boost confidence.",
      icon: Sparkles
    },
    {
      title: "Orthodontics",
      description: "Traditional braces and clear aligners (Invisalign) to straighten teeth and correct bite issues.",
      icon: Smile
    },
    {
      title: "Dental Implants",
      description: "Permanent, natural-looking solutions for missing teeth that restore function and aesthetics.",
      icon: Activity
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized care for children, focusing on preventive treatments and building positive dental habits.",
      icon: Baby
    },
    {
      title: "Root Canal Therapy",
      description: "Advanced endodontic treatment to save infected teeth and relieve pain effectively.",
      icon: Syringe
    },
    {
      title: "Oral Surgery",
      description: "Wisdom teeth removal, jaw surgery, and other surgical procedures performed by specialists.",
      icon: ScanFace
    },
    {
      title: "Periodontics",
      description: "Treatment of gum disease and maintenance of gum health to prevent tooth loss.",
      icon: HeartPulse
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero */}
      <section className="bg-teal-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Our Services</h1>
          <p className="text-lg text-teal-100 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of dental treatments using the latest technology and techniques.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link="/book-appointment"
            />
          ))}
        </div>
      </section>
      
      {/* FAQ Section (Optional but good for SEO/UX) */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How often should I visit the dentist?", a: "It is generally recommended to visit the dentist every 6 months for a routine checkup and cleaning." },
              { q: "Do you accept insurance?", a: "Yes, we accept most major dental insurance plans. Please contact our office to verify your specific coverage." },
              { q: "What should I do in a dental emergency?", a: "Contact us immediately. We offer emergency dental services and will do our best to see you as soon as possible." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
