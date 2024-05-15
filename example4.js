// Sử dụng function để đóng gói logic và giảm lặp code
const nodeEnv = process.env.NODE_ENV
function handleProcess(nodeEnv) {
  console.log("Starting process...");
  if (nodeEnv === "development") {
    console.log("development mode");
    // Development-specific logic
  }
  if (nodeEnv === "production") {
    console.log("production mode");
    // Production-specific logic
  }
  console.log("Process started.");
}