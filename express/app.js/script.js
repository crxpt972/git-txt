const express = require('express');
const path = require('path');

const app = express();

// Middleware pour vérifier les heures de travail
const checkWorkingHours = (req, res, next) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // 0 = dimanche, 1 = lundi, ..., 6 = samedi
  const currentHour = currentDate.getHours();

  // Vérifie si la requête a lieu du lundi au vendredi, entre 9h et 17h
  if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
    next(); // Si oui, passe à la suite (le routeur)
  } else {
    res.send('L\'application est disponible uniquement pendant les heures de travail (du lundi au vendredi, de 9h à 17h).');
  }
};

// Appliquer le middleware globalement
app.use(checkWorkingHours);

// Servir les fichiers statiques (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Définir la route pour la page d'accueil
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/styles.css">
        <title>Page d'Accueil</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/services">Nos services</a></li>
            <li><a href="/contact">Nous contacter</a></li>
          </ul>
        </nav>
        <h1>Bienvenue sur notre site !</h1>
        <p>Ceci est la page d'accueil.</p>
      </body>
    </html>
  `);
});

// Définir la route pour la page des services
app.get('/services', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/styles.css">
        <title>Nos services</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/services">Nos services</a></li>
            <li><a href="/contact">Nous contacter</a></li>
          </ul>
        </nav>
        <h1>Nos services</h1>
        <p>Voici la liste de nos services.</p>
      </body>
    </html>
  `);
});

// Définir la route pour la page de contact
app.get('/contact', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/styles.css">
        <title>Nous contacter</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/services">Nos services</a></li>
            <li><a href="/contact">Nous contacter</a></li>
          </ul>
        </nav>
        <h1>Nous contacter</h1>
        <p>Vous pouvez nous contacter via le formulaire ci-dessous.</p>
      </body>
    </html>
  `);
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
