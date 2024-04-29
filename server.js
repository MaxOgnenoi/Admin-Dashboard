const express = require("express");
const path = require("path");
const jsonServer = require("json-server");
const apiRouter = jsonServer.router("./api/info.json");

const app = express();
const PORT = process.env.PORT || 5110;

// Serve the React app from the 'build' directory
app.use(express.static(path.join(__dirname, "build")));

// Use json-server for the API
app.use("/api", apiRouter);

// Serve the React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
