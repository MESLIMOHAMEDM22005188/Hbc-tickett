const express = require('express');
const app = express();
const port = 667;
const cors = require('cors');

app.use(cors());

app.use(express.json()); 

const db = require('./db'); 

const defaultroute = require('./routes/default/default');
app.use('/api/default', defaultroute);


const pikachuroute = require('./routes/default/pikachu');
app.use('/api/pickachu', pikachuroute);

const salamecheroute = require('./routes/default/salameche');
app.use('/api/salameche', salamecheroute);

const carapuceroute = require('./routes/default/carapuce');
app.use('/api/carapuce', carapuceroute);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});