import { exec } from "child_process";

export async function initDatabase() {
  return new Promise<void>((resolve, reject) => {
    console.log("🚀 Setting up database...");

    // 1. Create DB if not exists
    exec("npx sequelize-cli db:create --env development", (err, stdout, stderr) => {
      if (err) {
        if (!stderr.includes("already exists")) {
          console.error("❌ Error creating DB:", stderr);
          return reject(err);
        }
      }
      console.log("✅ Database ready!");

      // 2. Run migrations
      exec("npx sequelize-cli db:migrate --env development", (err2, stdout2, stderr2) => {
        if (err2) {
          console.error("❌ Error running migrations:", stderr2);
          return reject(err2);
        }
        console.log("✅ Migrations applied!");
        resolve();
      });
    });
  });
}
