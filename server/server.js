const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

let inventoryDB = [
  {
    "id": "JC-022022",
    "morph": "Darkbase Lilly White",
    "imgs": ["/resources/IMG_0475.jpg", "/resources/IMG_0474.jpg", "/resources/IMG_0473.jpg", "/resources/IMG_0466.jpg", "/resources/IMG_4070"],
    "dob": "02/20/22",
    "weight": "20g",
    "sex": "male",
    "descriptor": "Out of Jerk (Northern Gecko) and Buttercream (KC Geckos). Feeding great on crickets and Pangea.",
    "price": "500"
  }
]


app.get('/available', (req, res) => {
  res.send(inventoryDB);
});

app.post('/create-checkout-session', async(req, res) => {
  const { lineItems, productIDs } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({

      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 5000,
              currency: 'usd',
            },
            display_name: 'Next day air',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 1,
              },
            },
          },
        },
      ],

      line_items: lineItems,
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000',
      payment_intent_data: { metadata: productIDs }
    })
    return res.status(201).json(session.url);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.post('/webhooks', async (req, res) => {
  const event = req.body;
  switch(event.type) {
    case 'payment_intent.succeeded':
    soldInventoryObjectsList = event.data.object.metadata;
    const soldInventory = [];
    for (let i = 0; i < Object.keys(soldInventoryObjectsList).length; i++) {
      soldInventory.push(soldInventoryObjectsList[i]);
    }
    let updatedList = inventoryDB.filter(item => !soldInventory.includes(item.id));
    inventoryDB = updatedList
    console.log(updatedList);
      break;
    default:
      return res.status(400).end();
  }
  
  res.json({received: true});
});

app.listen(process.env.PORT, () => console.log(`Server is running successfully on port ${process.env.PORT}`))