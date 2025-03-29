import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import profileImage from "../../assets/profile_abish.jpg";

const Hero = () => {
  const { toast } = useToast();

  const handleDownloadResume = () => {
    try {
      // Create a hidden anchor element to trigger the download
      const link = document.createElement('a');
      link.href = '/api/resume/download';
      link.setAttribute('download', 'Abish_Pius_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Resume Download",
        description: "Your resume is being downloaded.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Could not download the resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pb-32 md:pt-40 bg-gradient-to-br from-primary to-primary/70 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-left flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-gold shadow-lg">
                <img 
                  src={profileImage} 
                  alt="Abish Pius" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h1 className="text-4xl md:text-5xl font-sans font-bold mb-2">Abish Pius</h1>
              <h2 className="text-xl md:text-2xl font-light mb-6 text-gold">Data Scientist & LLM Engineer</h2>
              <p className="text-lg mb-8 max-w-xl">Specializing in machine learning, generative AI, and data-driven solutions with expertise in AWS, Azure, and Google Cloud.</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button
                  asChild
                  className="btn-gold px-6 py-6 rounded-lg"
                >
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button 
                  variant="outline"
                  className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-primary transition-colors px-6 py-6 rounded-lg"
                  onClick={handleDownloadResume}
                >
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
