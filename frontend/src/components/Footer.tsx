// Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">PersonaEd</h3>
            <p className="text-muted-foreground text-sm">
              Transforming education with AI-powered learning characters that make education 
              personalized, engaging, and effective.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Features</h4>
            <ul className="space-y-2">
              <li><Link to="/characters" className="text-sm text-muted-foreground hover:text-foreground">Characters</Link></li>
              <li><Link to="/quiz" className="text-sm text-muted-foreground hover:text-foreground">Quiz Section</Link></li>
              <li><Link to="/pdf-learning" className="text-sm text-muted-foreground hover:text-foreground">PDF Learning</Link></li>
              <li><Link to="/subjects" className="text-sm text-muted-foreground hover:text-foreground">Subject Library</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} PersonaEd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
