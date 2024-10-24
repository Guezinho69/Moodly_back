// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();

const User = require('./models/User');

// Initialiser l'application Express
const app = express();
app.use(cors());
app.use(express.json()); // Pour traiter les requêtes JSON

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch((err) => console.error('Erreur de connexion à MongoDB:', err));

// Importer le modèle d'humeur
 const Mood = require('./models/Moods.js');
// Route POST pour envoyer une humeur
app.post('/api/mood', async (req, res) => {
  console.log("Requête POST reçue pour /api/mood");
  console.log("Corps de la requête :", req.body);
  const { emoji, details } = req.body;
    console.log("Mood")
  try {
    const newMood = new Mood({ emoji, details, date: new Date() });
    await newMood.save();
    res.status(201).json({ message: 'Humeur enregistrée avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement de l\'humeur' });
  }
});

app.post('/api/create-admin', async (req, res) => {
  console.log("Requête POST reçue sur /api/create-admin");
  const { email, password } = req.body;
  
  // Vérifier si l'utilisateur existe déjà
  // const existingUser = await User.findOne({ email });
  // if (existingUser) {
  //   return res.status(400).json({ message: 'Cet utilisateur existe déjà.' });
  // }

  // Hasher le mot de passe avant de l'enregistrer
  const hashedPassword = await bcrypt.hash(password, 10);

  // Créer un nouvel utilisateur avec le rôle admin
  const newAdmin = new User({
    email,
    password: hashedPassword,
    role: 'admin',
  });

  try {
    await newAdmin.save();
    res.status(201).json({ message: 'Admin créé avec succès.' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'admin.' });
  }
});


app.post('/api/create-user', async (req, res) => {
  console.log("Requête POST reçue sur /api/create-user");
  const { email, password } = req.body;
  
  // Vérifier si l'utilisateur existe déjà
  // const existingUser = await User.findOne({ email });
  // if (existingUser) {
  //   return res.status(400).json({ message: 'Cet utilisateur existe déjà.' });
  // }

  // Hasher le mot de passe avant de l'enregistrer
  const hashedPassword = await bcrypt.hash(password, 10);

  // Créer un nouvel utilisateur avec le rôle admin
  const newUser = new User({
    email,
    password: hashedPassword,
    role: 'employee',
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'utilisateur créé avec succès.' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur.' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Email incorrect' });
    }

    // Comparaison des mots de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    // Vérifier si c'est un admin
    if (user.role === 'admin') {
      return res.json({ isAdmin: true });
    } else {
      return res.json({ isAdmin: false });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Erreur lors de la connexion' });
  }
});


app.get('/', (req, res) => {
  res.send('Le serveur fonctionne');
});


// Route GET pour récupérer toutes les humeurs (pour l'admin)
app.get('/api/moods', async (req, res) => {
  try {
    const moods = await Mood.find();
    res.json(moods);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des humeurs' });
  }
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
const IP_ADDRESS = '10.76.204.34'; // Remplace par ton adresse IP locale ou publique

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Serveur en cours d'exécution sur http://${IP_ADDRESS}:${PORT}`);
});
