import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg text-teal-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Visit Us</h3>
                    <p className="text-slate-600 mt-1">123 Health Avenue, Bandra West<br />Mumbai, Maharashtra 400050</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg text-teal-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Call Us</h3>
                    <p className="text-slate-600 mt-1">+91 98765 43210</p>
                    <p className="text-slate-500 text-sm">Mon-Sat from 9am to 8pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg text-teal-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email Us</h3>
                    <p className="text-slate-600 mt-1">info@smilecaredental.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-teal-400" /> Opening Hours
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between text-slate-400">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[500px] bg-slate-200 rounded-2xl overflow-hidden relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.441167812345!2d72.8310!3d19.0550!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzE4LjAiTiA3MsKwNDknNTguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy"
               title="Clinic Location"
             ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
