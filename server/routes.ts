import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, id: message.id });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Invalid data' 
      });
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Internal server error' 
      });
    }
  });

  // GitHub repositories proxy to avoid CORS issues
  app.get("/api/github/repos", async (req, res) => {
    try {
      const response = await fetch('https://api.github.com/users/RajaMuhammadAwais/repos?sort=updated&per_page=6');
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
      }
      const repos = await response.json();
      res.json(repos);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to fetch repositories' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
