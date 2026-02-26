import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Ongeldige gegevens", errors: parsed.error.flatten() });
      }

      const submission = await storage.createContactSubmission(parsed.data);
      return res.status(201).json({ message: "Bericht succesvol verzonden", id: submission.id });
    } catch (error) {
      console.error("Contact submission error:", error);
      return res.status(500).json({ message: "Er ging iets mis bij het verzenden" });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.json(submissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      return res.status(500).json({ message: "Kon berichten niet ophalen" });
    }
  });

  return httpServer;
}
