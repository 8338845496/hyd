const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/api/location', async (req, res) => {
    try {
        // Simulated location data
        const location = {
            latitude: 37.7749,
            longitude: -122.4194
        };
        
        // Fetch city name
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.latitude}&longitude=${location.longitude}&localityLanguage=en`);
        const data = await response.json();
        const city = data.city;

        res.json({ location, city });
    } catch (error) {
        console.error('Error fetching location:', error);
        res.status(500).json({ error: 'Failed to fetch location' });
    }
});

app.get('/api/ip', (req, res) => {
    // Simulated IP data
    const ip = req.ip;
    res.json({ ip });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
