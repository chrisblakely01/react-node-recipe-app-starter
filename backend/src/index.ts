import express from "express";
import cors from "cors";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const app = express();
const prismaClient = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/api/recipes/search", async (req, res) => {});

app.get("/api/recipes/:recipeId/summary", async (req, res) => {});

app.post("/api/recipes/favourite", async (req, res) => {});

app.get("/api/recipes/favourite", async (req, res) => {});

app.delete("/api/recipes/favourite", async (req, res) => {});

app.listen(5000, () => {
  console.log("server running on localhost:5000");
});
