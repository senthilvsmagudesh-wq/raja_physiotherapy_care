import type { Express } from "express";
import { createServer, type Server } from "http";
import { Resend } from "resend";
import { appointmentSchema, contactSchema } from "@shared/schema";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  // Appointment booking endpoint
  app.post("/api/appointments", async (req, res) => {
    try {
      // Validate request body
      const appointmentData = appointmentSchema.parse(req.body);

      // Format time slot for display
      const timeSlot = {
        morning: "Morning (9:00 AM - 12:00 PM)",
        afternoon: "Afternoon (12:00 PM - 3:00 PM)",
        evening: "Evening (3:00 PM - 6:00 PM)",
      }[appointmentData.preferredTime];

      // Send email using Resend
      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: [process.env.RESEND_TO_EMAIL!], // Change to actual clinic email
        subject: `New Appointment Request from ${appointmentData.fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              New Appointment Request
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1e293b;">Patient Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Full Name:</td>
                  <td style="padding: 8px 0;">${appointmentData.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
                  <td style="padding: 8px 0;">${appointmentData.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone:</td>
                  <td style="padding: 8px 0;">${appointmentData.phone}</td>
                </tr>
              </table>
            </div>

            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1e293b;">Appointment Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Preferred Date:</td>
                  <td style="padding: 8px 0;">${new Date(appointmentData.preferredDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Preferred Time:</td>
                  <td style="padding: 8px 0;">${timeSlot}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Service:</td>
                  <td style="padding: 8px 0;">${appointmentData.service}</td>
                </tr>
              </table>
            </div>

            ${appointmentData.reason ? `
              <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #1e293b;">Reason for Visit</h3>
                <p style="margin: 0; line-height: 1.6;">${appointmentData.reason}</p>
              </div>
            ` : ''}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
              <p>Please contact the patient within 24 hours to confirm the appointment.</p>
              <p style="margin-top: 10px;">
                <strong>RAJA Health Care Clinic</strong><br>
                Arisipalayam, Salem
              </p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ 
          success: false, 
          error: "Failed to send appointment request" 
        });
      }

      res.json({ 
        success: true, 
        message: "Appointment request sent successfully",
        emailId: data?.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          error: "Invalid appointment data", 
          details: error.errors 
        });
      }
      
      console.error("Appointment booking error:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to process appointment request" 
      });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = contactSchema.parse(req.body);

      // Send email using Resend
      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: [process.env.RESEND_TO_EMAIL!], // Change to actual clinic email
        replyTo: contactData.email,
        subject: `Contact Form: ${contactData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1e293b;">Contact Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Name:</td>
                  <td style="padding: 8px 0;">${contactData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
                  <td style="padding: 8px 0;">${contactData.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone:</td>
                  <td style="padding: 8px 0;">${contactData.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Subject:</td>
                  <td style="padding: 8px 0;"><strong>${contactData.subject}</strong></td>
                </tr>
              </table>
            </div>

            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1e293b;">Message</h3>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${contactData.message}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
              <p>Please respond to this inquiry within 24-48 hours.</p>
              <p style="margin-top: 10px;">
                <strong>RAJA Health Care Clinic</strong><br>
                Arisipalayam, Salem
              </p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ 
          success: false, 
          error: "Failed to send contact message" 
        });
      }

      res.json({ 
        success: true, 
        message: "Contact message sent successfully",
        emailId: data?.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          error: "Invalid contact data", 
          details: error.errors 
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to process contact form" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
