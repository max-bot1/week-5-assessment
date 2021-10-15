const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res) => {
    const fortunes = ['Pick another fortune.', 
                      'Someone is thinking about you', 
                      'Be kind to the world and it will be kind to you',
                      'Do not worry what others think, for advice look inward.',
                      'Your tongue is sharp, be careful or it may cut those you love']

                      let randomIndex = Math.floor(Math.random() * fortunes.length)
                      let randomFortune = fortunes[randomIndex]
                      res.status(200).send(randomFortune)
})

app.get('/api/movies', (req,res) => {
    const movies = ['Rocky', 'Real Steel', 'A Beautiful Mind', 'Catch Me if You Can', 'The Pursuit of Happyness', 'Scott Pilgrim Vs. The World']

    res.status(200).send(movies)
})

app.listen(4000, () => console.log("Server running on 4000"));
