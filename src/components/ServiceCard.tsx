import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
}

export function ServiceCard({ title, description, icon: Icon, link = "/services" }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md border border-slate-100">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-50 transition-all group-hover:scale-150 group-hover:bg-teal-100/50" />
      
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        
        <h3 className="mb-2 text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mb-4 text-slate-600 leading-relaxed text-sm">{description}</p>
        
        <Link 
          to={link} 
          className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700"
        >
          Learn more <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
