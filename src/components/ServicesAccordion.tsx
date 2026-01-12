import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FlaskConical, 
  Users, 
  Rocket, 
  ChevronDown,
  Cpu,
  Boxes,
  CircuitBoard,
  BrainCircuit,
  Bot,
  GitBranch,
  BookOpen,
  GraduationCap,
  UsersRound,
  Trophy,
  Wrench,
  MessageCircle,
  Lightbulb,
  Cog,
  Building2,
  FileCheck,
  Layers,
  Medal,
  Shield
} from 'lucide-react';
import ideaaImage from '@/assets/ideaa.png';

const services = [
  {
    id: 'research',
    icon: FlaskConical,
    title: 'Research & Development',
    description: 'Empowering innovators with comprehensive support, from initial concept validation to advanced prototype development, fostering groundbreaking solutions.',
    color: 'from-blue-500 to-cyan-500',
    items: [
      { icon: Cog, text: 'Development', fullContent: 'Our development services focus on transforming innovative concepts into tangible products. We provide end-to-end support, including software development, hardware prototyping, and system integration. Our team utilizes agile methodologies to ensure efficient progress and deliver high-quality, scalable solutions tailored to your specific needs. From initial design to final deployment, we guide you through every stage of the development lifecycle, ensuring your vision becomes a reality.' },
      { icon: Shield, text: 'IPR', fullContent: 'Intellectual Property Rights (IPR) are crucial for protecting your innovations. Our IPR services include patent filing assistance, trademark registration, copyright guidance, and strategic advice on intellectual property management. We help you navigate the complexities of IPR law to secure your creations, prevent infringement, and maximize the commercial value of your intellectual assets. Our experts ensure your innovations are legally protected, giving you a competitive edge in the market.' },
    ],
  },
  {
    id: 'collaborative',
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Cultivating a dynamic environment for knowledge exchange, skill enhancement, and interdisciplinary collaboration through expert-led training, mentorship, and networking opportunities.',
    color: 'from-emerald-500 to-teal-500',
    items: [
      { icon: Wrench, text: 'Training', fullContent: 'Our training programs are designed to equip participants with cutting-edge skills and knowledge in various domains. We offer workshops, seminars, and hands-on sessions led by industry experts. These programs cover a wide range of topics, from foundational concepts to advanced techniques, ensuring that individuals can enhance their competencies and stay relevant in a rapidly evolving technological landscape. We focus on practical application and real-world problem-solving.' },
      { icon: MessageCircle, text: 'Mentoring', fullContent: 'Our mentoring initiatives connect aspiring innovators with experienced professionals and entrepreneurs. Mentors provide personalized guidance, share insights, and offer strategic advice to help mentees navigate challenges, develop their projects, and achieve their career goals. This one-on-one support fosters personal and professional growth, building confidence and clarity in their innovation journey.' },
      { icon: GraduationCap, text: 'Internship', fullContent: 'Our internship programs provide invaluable real-world experience within dynamic research and development environments. Interns work on active projects, collaborate with expert teams, and gain practical skills under direct supervision. These opportunities are designed to bridge the gap between academic knowledge and industry demands, preparing individuals for successful careers in innovation and technology.' },
      { icon: UsersRound, text: 'Networking', fullContent: 'Our networking events and platforms facilitate connections between innovators, researchers, industry leaders, and potential collaborators. We organize regular meetups, conferences, and online forums to encourage knowledge sharing, partnership formation, and community building. These opportunities are crucial for expanding professional networks, discovering new opportunities, and fostering a vibrant ecosystem of collaboration and mutual support.' },
    ],
  },
  {
    id: 'innovation',
    icon: Rocket,
    title: 'Innovation Hub',
    description: 'Accelerating the journey from innovative ideas to successful market-ready products through strategic seed funding, dedicated incubation programs, and robust startup support.',
    color: 'from-violet-500 to-purple-500',
    items: [
      { icon: Layers, text: 'Seed Fund', fullContent: 'Our seed fund provides crucial early-stage financial support to promising innovative projects and startups. We invest in ideas with high growth potential, helping entrepreneurs transform their concepts into viable businesses. Beyond capital, we offer strategic guidance and access to a network of investors, facilitating further funding rounds and sustainable growth.' },
      { icon: Lightbulb, text: 'Incubation', fullContent: 'Our incubation program offers a nurturing environment for nascent startups, providing them with essential resources, infrastructure, and expert mentorship. We support ventures through their critical early phases, offering workspace, technical assistance, business development guidance, and access to our extensive network. The program is designed to accelerate growth, refine business models, and prepare startups for market entry and investment.' },
      { icon: Trophy, text: 'Start-up', fullContent: 'We provide comprehensive support for startups, guiding them from ideation to market launch and beyond. Our services include business plan development, legal and regulatory assistance, marketing strategies, and operational support. We help startups build strong foundations, scale their operations, and achieve sustainable success. Our goal is to foster a vibrant entrepreneurial ecosystem where innovative ideas can flourish and make a significant impact.' },
    ],
  },
];

export const ServicesAccordion = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [openSubItemId, setOpenSubItemId] = useState<string | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleSubItemClick = (serviceId: string, subItemId: string) => {
    if (openId !== serviceId) {
      setOpenId(serviceId);
    }
    setOpenSubItemId(openSubItemId === subItemId ? null : subItemId);
  };

  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* IDEA LABS Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">
              IDEA <span className="text-gradient">LABS</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              (Ideation, Development, Evaluation, Application)
            </p>
            <div className="flex justify-center mt-8">
                <img src={ideaaImage} alt="IDEA Labs" className="h-96 w-auto object-contain" />
              </div>
          </motion.div>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent mb-4">
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Core <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support across research, learning, and innovation to help you 
              achieve your goals.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(openId === service.id ? null : service.id)}
                  className="w-full p-6 flex items-center gap-4 text-left hover:bg-secondary/30 transition-colors"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-xl text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {service.description}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: openId === service.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 grid sm:grid-cols-2 gap-3">
                        {service.items.map((item, i) => (
                          <div key={i}>
                            <motion.button
                              onClick={() => handleSubItemClick(service.id, `${service.id}-${item.text}`)}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: i * 0.05 }}
                              className="w-full flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary hover:shadow-md transition-all duration-200 text-left"
                            >
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0`}>
                                <item.icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-base font-medium text-foreground">{item.text}</span>
                              {item.fullContent && (
                                <motion.div
                                  animate={{ rotate: openSubItemId === `${service.id}-${item.text}` ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-auto shrink-0"
                                >
                                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                </motion.div>
                              )}
                            </motion.button>
                            <AnimatePresence>
                              {openSubItemId === `${service.id}-${item.text}` && item.fullContent && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden bg-secondary/20 rounded-b-xl p-4 text-sm text-muted-foreground"
                                >
                                  {item.fullContent}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
