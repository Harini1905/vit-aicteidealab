import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction, Calendar, MapPin, Clock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const upcomingEvents = [
  {
    title: 'Innovation Hackathon 2024',
    date: 'Coming Soon',
    location: 'VIT Chennai Campus',
    type: 'Hackathon',
  },
  {
    title: 'AI & ML Workshop Series',
    date: 'Coming Soon',
    location: 'AI Computing Lab',
    type: 'Workshop',
  },
  {
    title: 'Startup Pitch Day',
    date: 'Coming Soon',
    location: 'Innovation Hub',
    type: 'Event',
  },
  {
    title: 'Robotics Competition',
    date: 'Coming Soon',
    location: 'Robotics Lab',
    type: 'Competition',
  },
];

export const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-8">
                <Construction className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Events</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                This page is under development. Stay tuned for upcoming hackathons, 
                workshops, and innovation events.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all"
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent mb-4">
                    {event.type}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                    {event.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
