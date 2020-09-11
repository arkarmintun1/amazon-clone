const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HPuRxKczHnUV9tmkg1i8wDcemhgxTmABeznNhIa26qReqzzOCGrICeGM76Hu5cFjjAzVVFdpK44DsRLtImgP1RO00FgLEte2Y'
);

// App

// App config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('PAYMENT REQUEST >>>', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen
exports.api = functions.https.onRequest(app);
