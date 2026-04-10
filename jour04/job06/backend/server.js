const express = require('express');
const mysql = require('mysql2');

// Configuration de la base de données
const dbConfig = {
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'projetdb',
};

let connection;

// Fonction pour établir la connexion à la base de données
function connectToDatabase() {
  connection = mysql.createConnection(dbConfig);

  connection.connect(err => {
    if (err) {
      console.error('Erreur de connexion à la base de données. Nouvelle tentative dans 5s...', err);
      setTimeout(connectToDatabase, 5000);
    } else {
      console.log('Connecté à la base de données');
    }
  });

  connection.on('error', err => {
    console.error('Erreur base de données', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log('Reconnexion à la base de données...');
      connectToDatabase();
    } else {
      throw err;
    }
  });
}

// Initialisation de la connexion
connectToDatabase();

const app = express();

// Route racine
app.get('/', (req, res) => {
  res.send("Bienvenue sur l'API backend de votre projet Docker !");
});

// Route pour vérifier le statut de l'API
app.get('/api/status', (req, res) => {
  connection.query('SELECT NOW() AS currentTime', (err, results) => {
    if (err) {
      console.error('Erreur lors de la requête:', err);
      res.status(500).send('Erreur base de données');
    } else {
      res.json({ status: 'success', currentTime: results[0].currentTime });
    }
  });
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend en écoute sur le port ${PORT}`);
});
