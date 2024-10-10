import { app } from "./app";
import { expressApp } from "./app";

const start = async () => {
  const app = await expressApp();

  app.listen(8000, () => {
    console.log(`server is running on port: ${8000}`);
  });
};

start();
