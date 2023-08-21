import { TomasLogger } from "@tomasjs/logging";

async function main() {
  const logger = new TomasLogger("main", "debug");
  logger.info("Hello World!");
}

main();
