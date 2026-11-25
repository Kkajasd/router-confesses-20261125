import { mkdirSync, writeFileSync } from "node:fs";

// The Router Confesses — one line, a home Wi-Fi router excusing itself
// for dropping the connection at the exact moment a movie hits its climax.
const line =
  "The movie's twist was so predictable I disconnected out of pure embarrassment — for both of us.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
