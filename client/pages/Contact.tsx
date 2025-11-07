import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "../lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type Contact } from "../../shared/schema";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Send
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<Contact>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: Contact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24-48 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: Contact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: ["RAJA Health Care Clinic", "Arisipalayam", "Salem, Tamil Nadu"],
    },
    {
      icon: Phone,
      label: "Phone",
      value: ["+91 98765 43210"],
      link: "tel:+919876543210",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: ["+91 98765 43210"],
      link: "https://wa.me/919876543210",
    },
    {
      icon: Mail,
      label: "Email",
      value: ["info@rajahealthcare.com"],
      link: "mailto:info@rajahealthcare.com",
    },
  ];

  const clinicHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-accent/30 to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-serif" data-testid="text-contact-title">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are here to help you with all your neurological concerns. Please feel free to 
            contact us to schedule an appointment or to learn more about our services.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6">Send Us a Message</h2>
                  
                  {isSubmitted ? (
                    <div className="py-12 text-center space-y-4" data-testid="success-message">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                        <Send className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll respond within 24-48 hours.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        data-testid="button-send-another"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          {...form.register("name")}
                          data-testid="input-name"
                        />
                        {form.formState.errors.name && (
                          <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          {...form.register("email")}
                          data-testid="input-email"
                        />
                        {form.formState.errors.email && (
                          <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          {...form.register("phone")}
                          data-testid="input-phone"
                        />
                        {form.formState.errors.phone && (
                          <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">
                          Subject <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="subject"
                          placeholder="What is this regarding?"
                          {...form.register("subject")}
                          data-testid="input-subject"
                        />
                        {form.formState.errors.subject && (
                          <p className="text-sm text-destructive">{form.formState.errors.subject.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Please share your concerns or questions..."
                          rows={6}
                          {...form.register("message")}
                          data-testid="input-message"
                        />
                        {form.formState.errors.message && (
                          <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={contactMutation.isPending}
                        data-testid="button-submit"
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Message"}
                        <Send className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold font-serif">Contact Information</h2>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-contact-info-${index}`}>
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="space-y-1">
                              <div className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                                {info.label}
                              </div>
                              {info.link ? (
                                <a 
                                  href={info.link} 
                                  className="text-base hover:text-primary transition-colors"
                                  data-testid={`link-${info.label.toLowerCase()}`}
                                >
                                  {info.value.map((line, i) => (
                                    <div key={i}>{line}</div>
                                  ))}
                                </a>
                              ) : (
                                info.value.map((line, i) => (
                                  <div key={i} className="text-base">{line}</div>
                                ))
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Clinic Hours */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Clinic Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {clinicHours.map((schedule, index) => (
                      <div 
                        key={index} 
                        className="flex justify-between py-2 border-b last:border-0"
                        data-testid={`schedule-${index}`}
                      >
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Directions */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Directions & Parking</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Our clinic is conveniently located in Arisipalayam, Salem, with easy access 
                      from major roads.
                    </p>
                    <p>
                      <strong>By Car:</strong> Ample parking space available for patients
                    </p>
                    <p>
                      <strong>By Public Transport:</strong> Well connected by local bus routes
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-accent/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Card>
            <CardContent className="p-8 md:p-12 text-center">
              <MapPin className="w-16 h-16 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Find Us on the Map</h3>
              <p className="text-muted-foreground mb-6">
                RAJA Health Care Clinic, Arisipalayam, Salem, Tamil Nadu
              </p>
              <p className="text-sm text-muted-foreground">
                {/* Map integration can be added here */}
                Contact us for detailed directions to our clinic
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
