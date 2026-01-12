import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-8">
              <Construction className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              This page is currently under development. Check back soon to explore our 
              collection of innovation projects, lab tours, and event highlights.
            </p>
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h3 className="font-display font-semibold text-lg mb-4">Coming Soon</h3>
              <ul className="text-left text-muted-foreground space-y-2">
                <li>• Project Showcases</li>
                <li>• Lab Virtual Tours</li>
                <li>• Event Photography</li>
                <li>• Innovation Highlights</li>
                <li>• Student Projects Gallery</li>
              </ul>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
