const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {    
    res.send('Server Running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
}); 