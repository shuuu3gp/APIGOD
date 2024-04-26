const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Selamat datang di API DikaGOD!');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
app.get('/api/data', (req, res) => {
    res.json({ message: 'Ini adalah data dari API DikaGOD' });
  });