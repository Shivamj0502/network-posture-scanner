import express from "express";
import cors from "cors";
import deviceRoutes from "./routes/deviceRoutes.js";
import cisRoutes from "./routes/cisRoutes.js";
import firewallRoutes from "./routes/firewallRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", deviceRoutes);
app.use("/", cisRoutes);
app.use("/", firewallRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

export default app;