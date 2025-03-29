import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertMessageSchema.parse(req.body);
      const message = {
        name: messageData.name,
        email: messageData.email,
        subject: messageData.subject,
        message: messageData.message,
      };
      
      // In a real application, you might want to store this in a database
      // or send it via email. For now, we'll just log it.
      console.log("Contact form submission:", message);
      
      res.status(200).json({ success: true, message: "Message received" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  });

  // Endpoint to download resume (placeholder - in production, would serve actual PDF)
  app.get("/api/resume/download", (req, res) => {
    res.status(200).json({ 
      message: "In a production environment, this would serve the actual resume PDF file." 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
