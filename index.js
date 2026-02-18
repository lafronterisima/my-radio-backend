
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Ruta raíz para prueba
app.get('/', (req, res) => {
    res.send("Servidor funcionando ✅");
});

// Endpoint para devolver la radio
app.get('/radios', (req, res) => {
    const filePath = path.join(__dirname, 'radios.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error leyendo radios.json:', err);
            return res.status(500).json({ error: 'No se ejecuta la radio' });
        }
        res.json(JSON.parse(data));
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
