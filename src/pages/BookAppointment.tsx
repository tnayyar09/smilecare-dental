import { useState } from "react";
import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Stethoscope } from "lucide-react";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert("Appointment request submitted! We will contact you shortly to confirm.");
    console.log(formData);
  };

  return (
    <div className="flex flex-col gap-20 pb-20">
      <section className="bg-teal-50 py-20">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Book an Appointment</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Schedule your visit with us easily. Fill out the form below and we'll get back to you to confirm your appointment.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-900 flex items-center gap-2">
                  <User className="h-4 w-4 text-teal-500" /> Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-900 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-teal-500" /> Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-900 flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal-500" /> Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium text-slate-900 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-teal-500" /> Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-medium text-slate-900 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-teal-500" /> Preferred Time
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">Select Time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 8PM)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-slate-900 flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-teal-500" /> Service Required
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                <option value="general">General Checkup</option>
                <option value="cleaning">Teeth Cleaning</option>
                <option value="whitening">Teeth Whitening</option>
                <option value="braces">Braces / Orthodontics</option>
                <option value="implants">Dental Implants</option>
                <option value="rootcanal">Root Canal</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-900 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-teal-500" /> Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
                placeholder="Any specific concerns or questions?"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <Button type="submit" size="lg" className="w-full text-lg py-6">
              Confirm Appointment
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
