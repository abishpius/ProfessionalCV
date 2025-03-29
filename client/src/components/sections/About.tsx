import { Mail, Phone, Linkedin, Globe } from 'lucide-react';
import { contactInfo } from '@/data/resumeData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-sans font-bold mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 animate-fade-in">
              <h3 className="text-xl font-sans font-semibold mb-4 text-primary">Professional Profile</h3>
              <p className="mb-4">I'm a Data Scientist and LLM Engineer with extensive experience in building and deploying machine learning models for various industries. My expertise spans from traditional ML to cutting-edge generative AI solutions.</p>
              <p>Currently at United States Steel Corporation, I lead generative AI use cases and develop forecasting models that drive business value. I'm passionate about turning complex data into actionable insights and innovative solutions.</p>
            </div>
            <div className="md:w-1/2 animate-fade-in delay-200">
              <h3 className="text-xl font-sans font-semibold mb-4 text-primary">Contact Details</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail className="w-8 h-8 text-blue-500 mr-2" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-8 h-8 text-blue-500 mr-2" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center">
                  <Linkedin className="w-8 h-8 text-blue-500 mr-2" />
                  <a 
                    href={`https://${contactInfo.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors"
                  >
                    {contactInfo.linkedin}
                  </a>
                </li>
                <li className="flex items-center">
                  <Globe className="w-8 h-8 text-blue-500 mr-2" />
                  <a 
                    href={`https://${contactInfo.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors"
                  >
                    {contactInfo.website}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
