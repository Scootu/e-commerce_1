const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/validate-code", async (req, res) => {
  try {
    const userCodePromo = req.body.userCodePromo;

    // Add your validation login here
    const isValidCode = validatePromoCode(userCodePromo);

    if (isValidCode) {
      res.json({ ok: true, code: userCodePromo });
    } else {
      res.json({
        ok: false,
        message: "Invalid promotion code",
        code: userCodePromo,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Handle root path
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Handle product API path
app.get("/api/product/:productId", (req, res) => {
  const productId = req.params.productId;

  try {
    // Assuming productData.json is in the public directory
    const productDataPath = path.join(__dirname, "public", "productData.json");
    const products = require(productDataPath);

    const product = products.find((p) => p.id === productId);

    if (product) {
      res.setHeader("Content-Type", "application/json"); // Set Content-Type header
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error("Error reading product data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Function to validate the promotion code (add your validation logic here)
function validatePromoCode(code) {
  // Example: Check if the code is "ABC123"
  return code === "ABC123";
}
