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
    "imgs": 
      [
        "/resources/JC-022022/IMG_0475.jpg", 
        "/resources/JC-022022/IMG_0474.jpg", 
        "/resources/JC-022022/IMG_0473.jpg", 
        "/resources/JC-022022/IMG_0466.jpg", 
        "/resources/JC-022022/IMG_4070.jpg"
      ],
    "dob": "02/20/22",
    "weight": "20g",
    "sex": "male",
    "descriptor": "Out of Jerk (Northern Gecko) and Buttercream (KC Geckos). Fires up an impressive dark black. Photos of this one as a hatchling can be found on our Instagram account. Feeding great on crickets and dry-mix.",
    "price": "500"
  },
  {
    "id": "JL-021422",
    "morph": "Yellow Phantom Lilly White",
    "imgs": 
      [
        "/resources/JL-021422/phantomlw/IMG_0656.jpg", 
        "/resources/JL-021422/phantomlw/IMG_0661.jpg", 
        "/resources/JL-021422/phantomlw/IMG_0660.jpg", 
        "/resources/JL-021422/phantomlw/IMG_0659.jpg"
      ],
    "dob": "02/14/22",
    "weight": "19g",
    "sex": "male",
    "descriptor": "Out of Jerk (Northern Gecko) and Lags (Southern Genetics). An oddly patterned phantom lilly. I had a red one produced by this same pairing that I sold under the name of 'Splash'. This gecko is part of my work on a yellow phantom lilly line I've been working on for several seasons now. Feeding great on crickets and dry-mix.",
    "price": "350"
  },
  {
    "id": "JB-012822",
    "morph": "Dark Base Cream Harlequin",
    "imgs": 
      [
        "/resources/JB-012822/jb012822/IMG_0677.jpg", 
        "/resources/JB-012822/jb012822/IMG_0678.jpg", 
        "/resources/JB-012822/jb012822/IMG_0679.jpg", 
        "/resources/JB-012822/jb012822/IMG_0680.jpg"
      ],
    "dob": "01/28/22",
    "weight": "22g",
    "sex": "male",
    "descriptor": "Out of Jerk (Northern Gecko) and Buttercream (KC Geckos). Fires up a very dark base with cream/off-white pattern. Feeding great on crickets and dry-mix.",
    "price": "150"
  },
  {
    "id": "JB-012822-2",
    "morph": "Pastel Harlequin",
    "imgs": 
      [
        "/resources/JB-012822-2/IMG_0685.jpg", 
        "/resources/JB-012822-2/IMG_0682.jpg", 
        "/resources/JB-012822-2/IMG_0681.jpg", 
        "/resources/JB-012822-2/IMG_0683.jpg"
      ],
    "dob": "01/28/22",
    "weight": "22g",
    "sex": "male",
    "descriptor": "Out of Jerk (Northern Gecko) and Buttercream (KC Geckos). The pattern on this one is so wacky. Pastel coloring with faint off-white lateral dashing. Feeding great on crickets and dry-mix.",
    "price": "150"
  },
  {
    "id": "JB-123021",
    "morph": "Harlequin",
    "imgs": 
      [
        "/resources/JB-123021/IMG_0691.jpg", 
        "/resources/JB-123021/IMG_0693.jpg", 
        "/resources/JB-123021/IMG_0692.jpg", 
        "/resources/JB-123021/IMG_0694.jpg"
      ],
    "dob": "12/30/21",
    "weight": "25g",
    "sex": "female",
    "descriptor": "Out of Jerk (Northern Gecko) and Buttercream (KC Geckos). Tailless female harlequin with faint brindling on the base and a few black spots.",
    "price": "150"
  },
]


app.get('/', (req, res) => {
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