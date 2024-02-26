const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/registration', (req, res) => {
  res.sendFile(__dirname + '/registration.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/profile', (req, res) => {
  res.sendFile(__dirname + '/profile.html');
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
