const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'client')));
 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

const mockAPIResponse = require('./mockAPI.js')


app.use(express.static('dist'))

console.log(__dirname)


app.get('/', (req, res) => {
    res.sendFile('file.html', { root: path.join(__dirname, 'path', 'to', 'your', 'folder') });
});

