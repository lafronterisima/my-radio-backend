
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

// Endpoint para devolver la radio
app.get('/radios', (req, res) => {
    fs.readFile('radios.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error leyendo radios.json:', err);
            return res.status(500).json({ error: 'No se pudo leer la lista de radios' });
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Servidor MyRadio corriendo en puerto ${PORT}`));
