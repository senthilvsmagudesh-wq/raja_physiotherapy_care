import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Zap, 
  AlertCircle, 
  Move, 
  Brain, 
  Moon,
  Users,
  Award,
  Clock,
  Star,
  ArrowRight,
  Phone
} from "lucide-react";
import { ReactComponent as HeroImage } from "../src/attached_assets/generated_images/Doctor_in_clinic_hero_80beda9d.png";

export default function Home() {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "5000+", label: "Patients Treated", icon: Users },
    { number: "10+", label: "Specialized Services", icon: Activity },
    { number: "4.9/5", label: "Patient Rating", icon: Star },
  ];

  const services = [
    { 
      title: "Stroke Management", 
      description: "Comprehensive care from diagnosis to rehabilitation",
      icon: Activity,
      id: "stroke"
    },
    { 
      title: "Epilepsy & Seizure Disorders", 
      description: "Personalized treatment plans to control seizures",
      icon: Zap,
      id: "epilepsy"
    },
    { 
      title: "Headache & Migraine Clinic", 
      description: "Advanced diagnostics and effective treatment",
      icon: AlertCircle,
      id: "headache"
    },
    { 
      title: "Movement Disorders", 
      description: "Expert care for Parkinson's, tremors, and dystonia",
      icon: Move,
      id: "movement"
    },
    { 
      title: "Dementia & Memory Care", 
      description: "Compassionate care for Alzheimer's and dementia",
      icon: Brain,
      id: "dementia"
    },
    { 
      title: "Sleep Disorders", 
      description: "Treatment for sleep-related neurological conditions",
      icon: Moon,
      id: "sleep"
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Care",
      description: "Led by Dr. Raja with over 15 years of specialized experience in neurology",
      icon: Award,
    },
    {
      title: "Advanced Diagnostics",
      description: "State-of-the-art diagnostic facilities for accurate assessment",
      icon: Activity,
    },
    {
      title: "Patient-Centered",
      description: "Personalized treatment plans tailored to your unique needs",
      icon: Users,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Dr. Raja's expertise and compassionate care helped me manage my migraines effectively. Highly recommended!",
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "The clinic staff is professional and caring. Dr. Raja took time to explain my condition thoroughly.",
    },
    {
      name: "Anita Reddy",
      rating: 5,
      text: "Excellent treatment for my father's stroke recovery. The follow-up care has been exceptional.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[600px] md:min-h-[700px] flex items-center bg-gradient-to-br from-accent/30 to-background pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight" data-testid="text-hero-headline">
                  Leading Neurology Care in Salem
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Your Partner in Neurological Wellness
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to RAJA Health Care Clinic, a dedicated neurology center in the heart of Arisipalayam, Salem. 
                We are committed to providing exceptional, compassionate care for a wide range of neurological conditions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-appointment" data-testid="link-hero-book">
                  <Button size="lg" className="text-base px-8 shadow-lg w-full sm:w-auto">
                    Book Appointment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/services" data-testid="link-hero-services">
                  <Button size="lg" variant="outline" className="text-base px-8 w-full sm:w-auto">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <HeroImage 
                  alt="Dr. Raja in modern neurology clinic" 
                  className="w-full h-auto object-cover"
                  data-testid="img-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 md:py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-stat-${index}`}>
                  <CardContent className="p-8 text-center space-y-2">
                    <Icon className="w-8 h-8 mx-auto text-primary mb-3" />
                    <div className="text-4xl md:text-5xl font-bold text-primary" data-testid={`text-stat-number-${index}`}>
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base uppercase tracking-wide text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            Welcome to Excellence in Neurological Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our clinic is equipped with state-of-the-art diagnostic facilities, and our expert team 
            is here to guide you on your path to recovery and well-being. We believe in empowering 
            our patients with knowledge and involving them in their own treatment plans.
          </p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 md:py-24 bg-accent/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Our Specialized Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive care for all your neurological needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="hover-elevate transition-all duration-300 group" data-testid={`card-service-${index}`}>
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <Link href="/services" data-testid={`link-service-${service.id}`}>
                      <button className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" data-testid="link-all-services">
              <Button variant="outline" size="lg" className="px-8">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Why Choose RAJA Health Care</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center space-y-4" data-testid={`feature-${index}`}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctor Preview */}
      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif">Meet Dr. Raja</h2>
                    <p className="text-xl text-primary font-semibold">M.D., D.M. (Neurology)</p>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Dr. Raja is a distinguished neurologist with over 15 years of experience in diagnosing 
                    and treating a wide spectrum of neurological disorders. He is dedicated to providing 
                    exceptional, personalized patient care.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Stroke Specialist</Badge>
                    <Badge variant="secondary">Epilepsy Expert</Badge>
                    <Badge variant="secondary">Movement Disorders</Badge>
                  </div>
                  <Link href="/doctor" data-testid="link-doctor-profile">
                    <Button className="mt-4">
                      View Full Profile
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="order-first md:order-last">
                  <div className="text-center md:text-right">
                    <div className="inline-block p-1 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl">
                      <div className="w-full h-full bg-card rounded-xl p-6">
                        <Award className="w-24 h-24 mx-auto text-primary" />
                        <div className="mt-4 space-y-1">
                          <div className="text-2xl font-bold">15+ Years</div>
                          <div className="text-sm text-muted-foreground">Clinical Excellence</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">What Our Patients Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by thousands of patients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t">
                    <div className="font-semibold">{testimonial.name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 bg-primary/10 border-y">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Clock className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <div className="font-semibold text-lg">Clinic Hours</div>
                <div className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM | Sat: 9AM-1PM | Sun: Closed</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <div className="font-semibold text-lg">Emergency Contact</div>
                <a href="tel:+919876543210" className="text-primary font-medium hover:underline" data-testid="link-emergency-phone">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-serif">
            Take the First Step Towards Better Health
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Schedule your consultation today and experience compassionate, expert neurological care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-appointment" data-testid="link-final-book">
              <Button size="lg" className="text-base px-8 shadow-lg w-full sm:w-auto">
                Book Appointment Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact" data-testid="link-final-contact">
              <Button size="lg" variant="outline" className="text-base px-8 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
