import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';

export default function Hero({ onGetStarted }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#E84F5E]/10 border border-[#E84F5E]/30">
          <span className="text-[#E84F5E] text-sm font-medium">
            Fast. Secure. Simple.
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#FCDFC5] leading-tight">
          Short Links.
          <br />
          <span className="text-[#E84F5E] animate-pulse-glow">Big Impact.</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#FCDFC5]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform your long, complex URLs into clean, shareable links in seconds.
          No sign-up required. Just paste, shorten, and share.
        </p>

        <button
          onClick={onGetStarted}
          className="group relative px-8 py-4 bg-[#E84F5E] text-[#FCDFC5] rounded-full font-bold text-lg hover:bg-[#E84F5E]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(232,79,94,0.5)] flex items-center space-x-2 mx-auto"
        >
          <span>Get Started Free</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
}
