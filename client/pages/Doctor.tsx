import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "wouter";
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  BookOpen,
  ArrowRight,
  Stethoscope
} from "lucide-react";
import doctorImage from "../src/attached_assets/generated_images/Doctor_professional_headshot_portrait_1b61ad5d.png";

export default function Doctor() {
  const expertise = [
    "Stroke",
    "Epilepsy",
    "Movement Disorders",
    "Headaches & Migraines",
    "Neuromuscular Disorders",
    "Dementia Care",
  ];

  const qualifications = [
    {
      degree: "M.D. (Internal Medicine)",
      institution: "Prestigious Medical Institution",
      year: "2005"
    },
    {
      degree: "D.M. (Neurology)",
      institution: "Leading Neurology Institute",
      year: "2008"
    },
  ];

  const memberships = [
    "Indian Academy of Neurology",
    "Neurological Society of India",
    "Indian Epilepsy Society",
    "Movement Disorder Society of India",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-accent/30 to-background">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-last lg:order-first">
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img 
                  src={doctorImage} 
                  alt="Dr. Raja - Neurologist" 
                  className="w-full h-auto object-cover"
                  data-testid="img-doctor"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold font-serif" data-testid="text-doctor-name">
                  Dr. Raja
                </h1>
                <p className="text-2xl text-primary font-semibold">M.D., D.M. (Neurology)</p>
                <p className="text-lg text-muted-foreground">
                  Distinguished Neurologist | 15+ Years Experience
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {expertise.slice(0, 4).map((area) => (
                  <Badge key={area} variant="secondary" className="text-sm">
                    {area}
                  </Badge>
                ))}
              </div>

              <Link href="/book-appointment" data-testid="link-doctor-book">
                <Button size="lg" className="mt-4">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Message */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Stethoscope className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold font-serif">A Message from Dr. Raja</h2>
                </div>
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/20 pl-6">
                  "I believe in a holistic approach to neurological care, where I partner with my patients 
                  to understand their concerns and develop a personalized treatment plan that works for them. 
                  My goal is to not only treat the condition but also to improve the overall quality of life 
                  for my patients. I am passionate about staying at the forefront of neurological research 
                  and bringing the latest advancements in treatment to my practice."
                </blockquote>
                <div className="pt-4">
                  <p className="font-semibold">- Dr. Raja</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Dr. Raja */}
      <section className="py-20 md:py-24 bg-accent/20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">About Dr. Raja</h2>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. Raja is a distinguished neurologist with over 15 years of experience in diagnosing 
              and treating a wide spectrum of neurological disorders. He completed his M.D. and D.M. 
              in Neurology from prestigious medical institutions and has since dedicated his career 
              to providing exceptional patient care.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With extensive experience in managing complex neurological conditions, Dr. Raja brings 
              a wealth of knowledge and expertise to every patient interaction. His commitment to 
              continuous learning ensures that his patients benefit from the most current and effective 
              treatment approaches available in neurology.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-10 h-10 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Educational Qualifications</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualifications.map((qual, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-qualification-${index}`}>
                <CardContent className="p-8">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{qual.degree}</h3>
                    <p className="text-base text-muted-foreground">{qual.institution}</p>
                    <p className="text-sm text-primary font-semibold">{qual.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-10 h-10 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Areas of Expertise</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((area, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-expertise-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-3 h-3 rounded-full bg-primary mx-auto mb-3"></div>
                  <p className="font-semibold">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-10 h-10 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Professional Memberships</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {memberships.map((membership, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-membership-${index}`}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <p className="font-medium">{membership}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            Experience Expert Neurological Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Schedule your consultation with Dr. Raja today and take the first step towards 
            better neurological health.
          </p>
          <Link href="/book-appointment" data-testid="link-doctor-cta">
            <Button size="lg" className="text-base px-8 shadow-lg">
              Book Your Appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
