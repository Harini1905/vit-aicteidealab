import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import visionIllustration from '@/assets/vision-illustration.svg';
import man101 from '@/assets/man101.jpg';
import ideaa from '@/assets/ideaa.png';

const features = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Fostering innovation and research excellence to solve real-world challenges.',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'Bringing together students, faculty, and industry for impactful projects.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-First',
    description: 'Providing resources and mentorship to turn ideas into viable solutions.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to producing world-class research and industry-ready innovations.',
  },
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="text-center md:text-left md:w-1/2">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  Our Story
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Empowering the Next Generation of{' '}
                  <span className="text-gradient">Innovators</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  The VIT Chennai Innovation & Research Hub is a state-of-the-art ecosystem designed to 
                  nurture creativity, foster research, and transform groundbreaking ideas into 
                  real-world solutions that make a difference.
                </p>
              </div>
              <img src={man101} alt="Man with lightbulb" className="h-[400px] w-[500px] object-contain" />
            </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.15)" }}
                viewport={{ once: true, margin: "-100px" }}
                className="group p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300"
                >
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2 text-primary group-hover:text-primary transition-colors duration-300"
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Vision and Mission Statements */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Vision Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 md:p-12 rounded-3xl glass-card relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-700/20 blur-3xl -z-10" />
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-black">
                  Our Vision
                </h3>
                <p className="text-black mb-6">
                  To be a globally recognized innovation hub that bridges the gap between 
                  academic research and industry needs, creating a sustainable ecosystem 
                  for technological advancement and entrepreneurship.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Research', 'Innovation', 'Collaboration', 'Excellence'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white text-purple-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-8 md:p-12 rounded-3xl glass-card relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-700/20 blur-3xl -z-10" />
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-black">
                  Our Mission
                </h3>
                <p className="text-black mb-6">
                  To cultivate a dynamic environment that empowers students and faculty to engage in cutting-edge research, develop innovative solutions, and foster entrepreneurial ventures that address societal needs and contribute to economic growth.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Empowerment', 'Research', 'Solutions', 'Entrepreneurship'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white text-purple-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
