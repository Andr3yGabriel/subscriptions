import "dotenv/config";
import fastify from "fastify";

const PORT = Number(process.env.PORT) || 3000;
const app = fastify();

app.get("/health", async () => {
  return { status: "ok" };
});

const startServer = async () => {
  try {
    app.listen({ port: PORT, host: "0.0.0.0" }, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
};

startServer();
