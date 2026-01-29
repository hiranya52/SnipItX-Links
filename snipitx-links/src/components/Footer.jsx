import { Link2, Heart, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[#E84F5E]/30 bg-[#121012] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link2 className="w-6 h-6 text-[#E84F5E]" />
              <span className="text-xl font-bold text-[#FCDFC5]">
                SnipItX <span className="text-[#E84F5E]">Links</span>
              </span>
            </div>
            <p className="text-[#FCDFC5]/70 text-sm leading-relaxed">
              Making the web more shareable, one link at a time. Fast, secure, and always free.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-[#FCDFC5] font-bold text-lg">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-[#FCDFC5]/70 hover:text-[#E84F5E] transition-colors duration-300 text-sm">
                About Us
              </a>
              <a href="#" className="text-[#FCDFC5]/70 hover:text-[#E84F5E] transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-[#FCDFC5]/70 hover:text-[#E84F5E] transition-colors duration-300 text-sm">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[#FCDFC5] font-bold text-lg">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#E84F5E]/10 rounded-lg flex items-center justify-center hover:bg-[#E84F5E]/20 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-[#E84F5E] group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#E84F5E]/10 rounded-lg flex items-center justify-center hover:bg-[#E84F5E]/20 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-[#E84F5E] group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#E84F5E]/10 rounded-lg flex items-center justify-center hover:bg-[#E84F5E]/20 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-[#E84F5E] group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#FCDFC5]/10 text-center">
          <p className="text-[#FCDFC5]/70 text-sm flex items-center justify-center space-x-1">
            <span>© {currentYear} SnipItX Links. Made with</span>
            <Heart className="w-4 h-4 text-[#E84F5E] fill-[#E84F5E] animate-pulse" />
            <span>for the web</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
