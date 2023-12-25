import { env } from "process";
import server from "./server";

const hostname = "0.0.0.0";
const port = env.PORT ?? "8080";

server.listen(parseInt(port), hostname, () =>
  console.log(`Server listening at http://${hostname}:${port}/`)
);
