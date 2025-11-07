import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useToast } from "../hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "../lib/queryClient";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema, type Appointment, servicesData } from "../../shared/schema";
import { Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function BookAppointment() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<Appointment>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "morning",
      service: "",
      reason: "",
    },
  });

  const appointmentMutation = useMutation({
    mutationFn: async (data: Appointment) => {
      return await apiRequest("POST", "/api/appointments", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Appointment Request Received!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit appointment request. Please try again or call us.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: Appointment) => {
    appointmentMutation.mutate(data);
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-accent/30 to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-serif" data-testid="text-appointment-title">
            Book Your Appointment
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Schedule your consultation with Dr. Raja. Fill out the form below and our staff 
            will get in touch with you shortly to confirm your booking.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 md:py-24">
        <div className="max-w-2xl mx-auto px-6 md:px-8">
          <Card>
            <CardContent className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6" data-testid="success-message">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-12 h-12 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold font-serif">
                      Appointment Request Received!
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Thank you for choosing RAJA Health Care Clinic.
                    </p>
                  </div>
                  <div className="bg-accent/50 rounded-lg p-6 space-y-3 text-left">
                    <h3 className="font-semibold flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-primary" />
                      What Happens Next?
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Our staff will review your appointment request</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>You'll receive a confirmation call within 24 hours</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Please bring any relevant medical records to your appointment</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Arrive 15 minutes early for registration</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      data-testid="button-book-another"
                    >
                      Book Another Appointment
                    </Button>
                    <Button 
                      onClick={() => window.location.href = "/"}
                      data-testid="button-home"
                    >
                      Return to Home
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8">
                    Schedule Your Consultation
                  </h2>

                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          {...form.register("fullName")}
                          data-testid="input-fullname"
                        />
                        {form.formState.errors.fullName && (
                          <p className="text-sm text-destructive">{form.formState.errors.fullName.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address <span className="text-destructive">*</span>
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
                          Phone Number <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          {...form.register("phone")}
                          data-testid="input-phone"
                        />
                        <p className="text-xs text-muted-foreground">
                          We'll call you to confirm the appointment
                        </p>
                        {form.formState.errors.phone && (
                          <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="border-t pt-6 space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">
                          Preferred Date <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                          <Input
                            id="preferredDate"
                            type="date"
                            min={today}
                            className="pl-10"
                            {...form.register("preferredDate")}
                            data-testid="input-date"
                          />
                        </div>
                        {form.formState.errors.preferredDate && (
                          <p className="text-sm text-destructive">{form.formState.errors.preferredDate.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">
                          Preferred Time <span className="text-destructive">*</span>
                        </Label>
                        <Controller
                          name="preferredTime"
                          control={form.control}
                          render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger className="w-full" data-testid="select-time">
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-muted-foreground" />
                                  <SelectValue placeholder="Select preferred time" />
                                </div>
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                                <SelectItem value="afternoon">Afternoon (12:00 PM - 3:00 PM)</SelectItem>
                                <SelectItem value="evening">Evening (3:00 PM - 6:00 PM)</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {form.formState.errors.preferredTime && (
                          <p className="text-sm text-destructive">{form.formState.errors.preferredTime.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">
                          Department/Service <span className="text-destructive">*</span>
                        </Label>
                        <Controller
                          name="service"
                          control={form.control}
                          render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger className="w-full" data-testid="select-service">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                {servicesData.map((service) => (
                                  <SelectItem key={service.id} value={service.id}>
                                    {service.title}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {form.formState.errors.service && (
                          <p className="text-sm text-destructive">{form.formState.errors.service.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reason">
                          Reason for Visit <span className="text-muted-foreground text-xs">(Optional)</span>
                        </Label>
                        <Textarea
                          id="reason"
                          placeholder="Please briefly describe your symptoms or reason for consultation..."
                          rows={4}
                          {...form.register("reason")}
                          data-testid="input-reason"
                        />
                        <p className="text-xs text-muted-foreground">
                          This helps us prepare for your consultation
                        </p>
                        {form.formState.errors.reason && (
                          <p className="text-sm text-destructive">{form.formState.errors.reason.message}</p>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={appointmentMutation.isPending}
                      data-testid="button-submit"
                    >
                      {appointmentMutation.isPending ? "Submitting..." : "Submit Appointment Request"}
                    </Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Information Section */}
      {!isSubmitted && (
        <section className="py-12 bg-accent/20">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    Before Your Appointment
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Bring any previous medical records or test results</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>List of current medications you are taking</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Valid ID proof and insurance details (if applicable)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Clinic Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="font-medium">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
