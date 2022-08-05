require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const stripe = require("stripe")(process.env.KEY);
app.use(express.static("public"));
app.listen(3000, () => {
  console.log("app running on port 3000");
});
const store = new Map([
  [
    1,
    { price: 1000, name: "product1" },
    2,
    { price: 2000, name: "product2" },
    3,
    { price: 3000, name: "product3" },
  ],
]);
app.post("/checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.session.create({
      payment_method_types:['card'],
      mode:'payment',
      success_url:`${process.env.SERVER_URL}/success.html`,
      cancel_url:`${process.env.SERVER_URL}/cancel.html`
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
