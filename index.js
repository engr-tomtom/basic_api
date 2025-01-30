const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS to allow public access
app.use(cors());

app.get("/api/info", (req, res) => {
  const response = {
    email: "olatom.tomiwa@gmail.com",
    datetime: new Date().toISOString(),
    github_url: "https://github.com/your-username/public-api"
  };

  res.json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Public API is running at http://localhost:${PORT}/api/info`);
});
