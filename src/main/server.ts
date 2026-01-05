import "dotenv/config";
import fastify from "fastify";

const PORT = Number(process.env.PORT) || 3000;
const app = fastify();

app.get("/health", async () => {
  return { status: "ok" };
});

app.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
