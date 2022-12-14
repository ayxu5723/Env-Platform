const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config();

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const storeItems = new Map ([
  [1, {priceInCents: 500, name:'$5 Donation'}],
  [2, {priceInCents: 1000, name:'$10 Donation'}],
  [3, {priceInCents: 2000, name:'$20 Donation'}],
  [4, {priceInCents: 5000, name:'$50 Donation'}],
  [5, {priceInCents: 10000, name:'$100 Donation'}],
])

app.post('/donation', async (req, res) => {
const url = new URL(req.headers.referer).origin;
  try { 
      const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          mode: 'payment',
          line_items: req.body.items.map(item => {
              const storeItem = storeItems.get(item.id)
              return {
                  price_data: {
                      currency: 'aud',
                      product_data: {
                          name: storeItem.name
                      },
                      unit_amount: storeItem.priceInCents
                  },
                  quantity: item.quantity
              }
          }),
          success_url: `${url}/donate`,
          cancel_url: `${url}/donate`,
      })
      res.json({ url: session.url})
  } catch (e) {
      res.status(500).json({error: e.message})
  }
})



if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
