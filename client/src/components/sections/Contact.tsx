import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Phone, Linkedin, Globe } from 'lucide-react';
import { contactInfo } from '@/data/resumeData';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

// Contact form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-sans font-bold mb-12 text-center text-gold">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-xl font-sans font-semibold mb-6 text-gold">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 mr-4 text-gold">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-gold transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 mr-4 text-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-gold transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 mr-4 text-gold">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a 
                      href={`https://${contactInfo.linkedin}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-gold transition-colors"
                    >
                      {contactInfo.linkedin}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 mr-4 text-gold">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Website</h4>
                    <a 
                      href={`https://${contactInfo.website}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-gold transition-colors"
                    >
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in delay-200">
              <h3 className="text-xl font-sans font-semibold mb-6 text-gold">Send Me a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gold">Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gold border-opacity-70 focus:outline-none focus:border-gold text-white" 
                          />
                        </FormControl>
                        <FormMessage className="text-gold" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gold">Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gold border-opacity-70 focus:outline-none focus:border-gold text-white" 
                          />
                        </FormControl>
                        <FormMessage className="text-gold" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gold">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gold border-opacity-70 focus:outline-none focus:border-gold text-white" 
                          />
                        </FormControl>
                        <FormMessage className="text-gold" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gold">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gold border-opacity-70 focus:outline-none focus:border-gold text-white" 
                          />
                        </FormControl>
                        <FormMessage className="text-gold" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-gold w-full font-medium px-6 py-6 rounded-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
