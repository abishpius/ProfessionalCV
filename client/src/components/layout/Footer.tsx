import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="mailto:abishpius@gmail.com" 
              className="text-white hover:text-blue-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/abish-pius-424566b3/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/abishpius" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
          
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Abish Pius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
