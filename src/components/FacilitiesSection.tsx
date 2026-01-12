import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ArrowRight } from 'lucide-react';
import facilityPrototyping from '@/assets/facility-prototyping.jpg';
import facilityRobotics from '@/assets/facility-robotics.jpg';
import facilityElectronics from '@/assets/facility-electronics.jpg';
import facilityAI from '@/assets/facility-ai.jpg';
import facilityFabrication from '@/assets/facility-fabrication.jpg';

const facilities = [
  {
    id: 1,
    title: 'Prototyping Lab',
    description: 'State-of-the-art prototyping facilities with advanced machinery for rapid product development.',
    fullDescription: 'Our Prototyping Lab is equipped with the latest tools and machinery to help you bring your ideas to life. From concept sketches to working prototypes, our lab provides everything you need including 3D printers, laser cutters, CNC machines, and a comprehensive toolkit for mechanical and electronic prototyping.',
    image: facilityPrototyping,
    features: ['3D Printers', 'Laser Cutters', 'CNC Machines', 'Hand Tools'],
  },
  {
    id: 2,
    title: 'Robotics & Automation Lab',
    description: 'Advanced robotics workspace with industrial-grade equipment for automation projects.',
    fullDescription: 'The Robotics & Automation Lab features industrial robotic arms, drones, autonomous vehicles, and advanced control systems. Students can work on cutting-edge projects in areas like swarm robotics, human-robot interaction, and automated manufacturing systems.',
    image: facilityRobotics,
    features: ['Robotic Arms', 'Drones', 'Motion Capture', 'PLC Systems'],
  },
  {
    id: 3,
    title: 'Electronics & PCB Lab',
    description: 'Complete electronics development environment with professional testing equipment.',
    fullDescription: 'Our Electronics Lab provides a complete environment for circuit design, PCB fabrication, and electronic testing. Equipped with oscilloscopes, function generators, spectrum analyzers, and a dedicated PCB manufacturing unit, students can develop professional-grade electronic projects.',
    image: facilityElectronics,
    features: ['Oscilloscopes', 'PCB Fabrication', 'SMD Soldering', 'Testing Equipment'],
  },
  {
    id: 4,
    title: 'AI & Computing Lab',
    description: 'High-performance computing infrastructure for AI, ML, and data science research.',
    fullDescription: 'The AI & Computing Lab houses powerful GPU clusters, high-performance workstations, and dedicated servers for machine learning training and data analytics. Students have access to popular frameworks and can work on projects ranging from computer vision to natural language processing.',
    image: facilityAI,
    features: ['GPU Clusters', 'ML Frameworks', 'Data Analytics', 'Cloud Access'],
  },
  {
    id: 5,
    title: 'Fabrication & 3D Printing Lab',
    description: 'Industrial-grade fabrication center for manufacturing prototypes and final products.',
    fullDescription: 'Our Fabrication Lab features multiple industrial 3D printers supporting various materials including PLA, ABS, resin, and metal. Combined with CNC machining and traditional workshop tools, students can manufacture everything from simple parts to complex assemblies.',
    image: facilityFabrication,
    features: ['Industrial 3D Printers', 'Metal Printing', 'CNC Machining', 'Material Library'],
  },
];

interface FacilityModalProps {
  facility: typeof facilities[0];
  onClose: () => void;
}

const FacilityModal = ({ facility, onClose }: FacilityModalProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="glass-card rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-64 md:h-80">
        <img
          src={facility.image}
          alt={facility.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="p-8">
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{facility.title}</h3>
        <p className="text-muted-foreground mb-6">{facility.fullDescription}</p>
        <div className="flex flex-wrap gap-2">
          {facility.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export const FacilitiesSection = () => {
  const [selectedFacility, setSelectedFacility] = useState<typeof facilities[0] | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="facilities" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 relative">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Our Facilities
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              World-Class <span className="text-gradient">Labs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access cutting-edge equipment and workspaces designed to bring your innovations to life.
            </p>
          </motion.div>

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedFacility(facility)}
                className="group cursor-pointer rounded-2xl overflow-hidden glass-card hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {facility.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <FacilityModal
            facility={selectedFacility}
            onClose={() => setSelectedFacility(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
