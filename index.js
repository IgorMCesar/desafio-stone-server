const express = requier('express');

const app = express();

app.get('/', (req, res) => {
  res.send('DB Here!');
})

const port = process.env.PORT || 4000;
app.listen(port);