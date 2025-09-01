"use client";
import { motion } from "motion/react";
import { Calendar, Clock, Video } from "lucide-react";
import { useEffect } from "react";

declare global {
  interface Window {
    Calendly: any;
  }
}

export const BookingSection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Cleanup
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const features = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for you"
    },
    {
      icon: Clock,
      title: "30 Minute Sessions",
      description: "Focused discussions about your project needs"
    },
    {
      icon: Video,
      title: "Video Call",
      description: "Connect via Google Meet or Zoom"
    }
  ];

  return (
    <section id="booking" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-sm md:text-base text-neutral-300 max-w-3xl mb-8">
            Ready to discuss your project? Schedule a kickoff meeting to explore how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">What to Expect</h3>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
            
            <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-3">
                Perfect for discussing:
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Full-stack web applications</li>
                <li>• API development and integrations</li>
                <li>• System architecture and scalability</li>
                <li>• Technical consulting and code reviews</li>
              </ul>
            </div>
          </motion.div>

          {/* Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-2xl p-1 border border-white/10"
          >
            <div className="bg-white rounded-xl overflow-hidden min-h-[700px]">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/arjungovindan98/kickoff-meeting?background_color=ffffff&text_color=000000&primary_color=000000"
                style={{ minWidth: "100%", height: "700px" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
