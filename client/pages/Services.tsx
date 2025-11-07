import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { 
  Activity, 
  Zap, 
  AlertCircle, 
  Move, 
  Brain, 
  Moon,
  Baby,
  Shield,
  HeartPulse,
  Stethoscope
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Activity,
      title: "Stroke Management",
      description: "Comprehensive care for stroke patients, from initial diagnosis to rehabilitation.",
      details: [
        "Emergency stroke assessment and treatment",
        "Thrombolytic therapy for acute strokes",
        "Post-stroke rehabilitation programs",
        "Secondary stroke prevention strategies",
        "Family counseling and support"
      ]
    },
    {
      icon: Zap,
      title: "Epilepsy and Seizure Disorders",
      description: "Personalized treatment plans to manage and control seizures.",
      details: [
        "Comprehensive epilepsy evaluation",
        "EEG monitoring and analysis",
        "Anti-epileptic medication management",
        "Seizure trigger identification",
        "Lifestyle modification guidance"
      ]
    },
    {
      icon: AlertCircle,
      title: "Headache and Migraine Clinic",
      description: "Advanced diagnostics and treatment for all types of headaches.",
      details: [
        "Detailed headache assessment",
        "Migraine prophylaxis and treatment",
        "Trigger identification and management",
        "Botox therapy for chronic migraines",
        "Stress management techniques"
      ]
    },
    {
      icon: Move,
      title: "Movement Disorders",
      description: "Expert care for conditions like Parkinson's disease, tremors, and dystonia.",
      details: [
        "Parkinson's disease management",
        "Essential tremor treatment",
        "Dystonia therapy",
        "Medication optimization",
        "Rehabilitation and physical therapy referrals"
      ]
    },
    {
      icon: Stethoscope,
      title: "Neuromuscular Disorders",
      description: "Diagnosis and treatment of conditions affecting the nerves and muscles.",
      details: [
        "EMG and nerve conduction studies",
        "Myasthenia gravis management",
        "Peripheral neuropathy treatment",
        "Muscle disease evaluation",
        "Rehabilitation planning"
      ]
    },
    {
      icon: Brain,
      title: "Dementia and Memory Care",
      description: "Compassionate care for patients with Alzheimer's disease and other forms of dementia.",
      details: [
        "Memory clinic assessments",
        "Alzheimer's disease management",
        "Cognitive training programs",
        "Caregiver support and education",
        "Treatment of behavioral symptoms"
      ]
    },
    {
      icon: Moon,
      title: "Sleep Disorders",
      description: "Diagnosis and treatment of sleep-related neurological conditions.",
      details: [
        "Sleep disorder evaluation",
        "Treatment of sleep apnea",
        "Management of insomnia",
        "Narcolepsy and hypersomnia care",
        "Sleep hygiene counseling"
      ]
    },
    {
      icon: Baby,
      title: "Pediatric Neurology",
      description: "Specialized care for children with neurological disorders.",
      details: [
        "Developmental delay assessment",
        "Childhood epilepsy management",
        "Cerebral palsy care",
        "Autism spectrum disorders evaluation",
        "Parent and family support"
      ]
    },
    {
      icon: Shield,
      title: "Neuro-Oncology",
      description: "Treatment of tumors of the brain and spinal cord.",
      details: [
        "Brain tumor evaluation",
        "Treatment planning and coordination",
        "Management of tumor-related symptoms",
        "Post-treatment follow-up",
        "Palliative care support"
      ]
    },
    {
      icon: HeartPulse,
      title: "Pain Management",
      description: "Comprehensive approach to managing chronic neurological pain.",
      details: [
        "Neuropathic pain treatment",
        "Headache and facial pain management",
        "Nerve block procedures",
        "Medication management",
        "Multimodal pain therapy"
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-accent/30 to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-serif" data-testid="text-services-title">
            Our Specialized Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive neurological care tailored to your specific needs. We offer a wide range 
            of specialized services to diagnose, treat, and manage various neurological conditions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl md:text-2xl font-semibold">{service.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pl-0 md:pl-18">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        What We Offer:
                      </h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Schedule a consultation with Dr. Raja to discuss your neurological health concerns 
            and explore the best treatment options for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-appointment" data-testid="link-services-book">
              <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover-elevate active-elevate-2 transition-all duration-300 shadow-md w-full sm:w-auto">
                Book Appointment
              </button>
            </a>
            <a href="/contact" data-testid="link-services-contact">
              <button className="px-8 py-3 border border-border bg-background font-semibold rounded-lg hover-elevate active-elevate-2 transition-all duration-300 w-full sm:w-auto">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
