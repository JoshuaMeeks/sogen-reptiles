const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.get("/available", (req, res) => {
  res.json({ available: 
    [
  {
    "id": "JC-022321",
    "morph": "Yellow Lilly White",
    "imgs": ["/resources/IMG_0403.jpg", "/resources/IMG_0413.jpg", "/resources/IMG_0405.jpg", "/resources/IMG_0408.jpg"],
    "dob": "02/23/21",
    "weight": "14g",
    "sex": "male",
    "descriptor": "The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/esl",
    "price": "1200"
  },
  {
    "id": "JC-041220",
    "morph": "Darkbase Harlequin",
    "imgs": ["/resources/IMG_0413.jpg"],
    "dob": "02/23/21",
    "weight": "2g",
    "sex": "female",
    "price": "700"
  },
  {
    "id": "JC-072320",
    "morph": "Lilly White",
    "imgs": ["/resources/IMG_0405.jpg"],
    "dob": "02/23/21",
    "weight": "3g",
    "sex": "male",
    "price": "900"
  },
  {
    "id": "JC-041421",
    "morph": "High Coverage Yellow",
    "imgs": ["/resources/IMG_0408.jpg"],
    "dob": "02/23/21",
    "weight": "4g",
    "sex": "female",
    "price": "1400"
  },
  {
    "id": "JC-062321",
    "morph": "Orange Pinstripe with Portholes",
    "imgs": ["/resources/IMG_0409.jpg"],
    "dob": "02/23/21",
    "weight": "5g",
    "sex": "male",
    "price": "700"
  },
  {
    "id": "JC-082321",
    "morph": "Abnormal Yellow Lilly White",
    "imgs": ["/resources/IMG_0410.jpg"],
    "dob": "02/23/21",
    "weight": "6g",
    "sex": "female",
    "price": "1000"
  },
  {
    "id": "JC-092321",
    "morph": "Darkbase Lilly White",
    "imgs": ["/resources/IMG_0411.jpg"],
    "dob": "02/23/21",
    "weight": "7g",
    "sex": "male",
    "price": "1200"
  },
  {
    "id": "JC-102321",
    "morph": "Harlequin",
    "imgs": ["/resources/IMG_0412.jpg"],
    "dob": "02/23/21",
    "weight": "8g",
    "sex": "female",
    "price": "900"
  }
]

 });
});

app.post('/create-checkout-session', async(req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.lineItems,
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000'
    })
    return res.status(201).json(session.url)
  } catch (error) {
    return res.status(500).json(error)
  }
})

app.listen(process.env.PORT, () => console.log('Server is running successfully'))