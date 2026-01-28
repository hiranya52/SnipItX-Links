import { Link2 } from "lucide-react";

export default function Navbar({ onNavigate }) {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#121012]/80 border-b border-[#E84F5E]/20">

      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => onNavigate("home")}
          >
            <Link2 className="w-7 h-7 text-[#E84F5E] group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-bold text-[#FCDFC5] tracking-tight">
              SnipItX <span className="text-[#E84F5E]">Links</span>
            </span>
          </div>

          <div className="flex items-center space-x-8">
            <button
              onClick={() => onNavigate("home")}
              className="text-[#FCDFC5]/80 hover:text-[#E84F5E] transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("shorten")}
              className="text-[#FCDFC5]/80 hover:text-[#E84F5E] transition-colors duration-300 font-medium"
            >
              Shorten
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="text-[#FCDFC5]/80 hover:text-[#E84F5E] transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
