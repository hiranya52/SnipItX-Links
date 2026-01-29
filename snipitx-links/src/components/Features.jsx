import { Zap, Shield, Smile } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Shorten your URLs in milliseconds. No waiting, no delays. Just instant results.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your links are safe with us. We use industry-standard security practices.',
    },
    {
      icon: Smile,
      title: 'Simple & Clean',
      description: 'No complicated setup. No account required. Just paste and shorten.',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FCDFC5] mb-4">
            Why Choose SnipItX?
          </h2>
          <p className="text-[#FCDFC5]/70 text-lg">
            The simplest way to create short links
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#1a1618] rounded-2xl p-8 border border-[#E84F5E]/20 hover:border-[#E84F5E]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,79,94,0.2)] hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#E84F5E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E84F5E]/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-[#E84F5E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FCDFC5] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#FCDFC5]/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
