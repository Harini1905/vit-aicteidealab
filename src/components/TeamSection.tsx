import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin } from 'lucide-react';
import PortraitPlaceholder from '@/assets/Portrait_Placeholder.png';

const teamCategories = [
  {
    title: 'Chairperson',
    members: [
      {
        name: 'Person 1',
        designation: 'Designation',
        image: PortraitPlaceholder,
        linkedin: '#',
      },
    ],
  },
  {
    title: 'Coordinators',
    members: [
      {
        name: 'Person 2',
        designation: 'Designation',
        image: PortraitPlaceholder,
        linkedin: '#',
      },
      {
        name: 'Person 3',
        designation: 'Designation',
        image: PortraitPlaceholder,
        linkedin: '#',
      },
    ],
  },
  {
    title: 'Faculty Members',
    members: [
      {
        name: 'Person 4',
        designation: 'Designation',
        image: PortraitPlaceholder,
        linkedin: '#',
      },
      {
        name: 'Person 5',
        designation: 'Designation',
        image: PortraitPlaceholder,
        linkedin: '#',
      },
      {
        name: 'Person 6',
        designation: 'Designation',
        image: PortraitPlaceholder,
        linkedin: '#',
      },
    ],
  },
  {
    title: 'Student Ambassadors',
    members: [
      {
        name: 'Person 7',
        designation: 'Designation',
        image: PortraitPlaceholder,
        linkedin: '#',
      },
      {
        name: 'Person 8',
        designation: 'Designation',
        image: PortraitPlaceholder,
        linkedin: '#',
      },
      {
        name: 'Person 9',
        designation: 'Designation',
        image: PortraitPlaceholder,
        linkedin: '#',
      },
      {
        name: 'Person 10',
        designation: 'Designation',
        image: PortraitPlaceholder,
        linkedin: '#',
      },
    ],
  },
];

export const TeamSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent mb-4">
              Our Team
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Leadership & <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary minds and dedicated mentors who form the backbone of our innovation ecosystem, guiding and inspiring the next generation of changemakers.
            </p>
          </motion.div>

          {/* Team Categories */}
          <div className="space-y-16">
            {teamCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="font-display text-xl font-semibold mb-6 text-center text-muted-foreground">
                  {category.title}
                </h3>
                <div className={`grid gap-6 ${
                  category.members.length === 1 
                    ? 'max-w-xs mx-auto' 
                    : category.members.length === 2 
                    ? 'md:grid-cols-2 max-w-2xl mx-auto'
                    : 'md:grid-cols-3 lg:grid-cols-4'
                }`}>
                  {category.members.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group relative p-4 rounded-2xl glass-card text-center hover:border-primary/50 transition-all duration-300 hover-lift"
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Avatar */}
                      <div className="relative w-48 h-64 mx-auto mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="relative w-full h-full object-cover border-2 border-border group-hover:border-primary transition-colors"
                        />
                      </div>

                      {/* Info */}
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {member.designation}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
