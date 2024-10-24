Moodly - Application de Suivi d'Humeur
Moodly est une application mobile permettant aux employés de partager leur humeur quotidienne et de permettre aux administrateurs de visualiser les résultats de ces humeurs afin de prendre des actions. Les employés peuvent se connecter, renseigner leur humeur via un formulaire, et un administrateur a accès à une interface spécifique où il peut visualiser les statistiques et les détails des humeurs envoyées.

Fonctionnalités
1. Connexion
Page Login2 : Une page de connexion où les utilisateurs entrent leur email et mot de passe. Si l'utilisateur est un administrateur, il est redirigé vers une page spécifique pour visualiser les résultats des humeurs. Les autres utilisateurs sont redirigés vers un formulaire pour renseigner leur humeur.
2. Système d'Authentification
Le projet inclut une API /api/create-admin permettant de créer un administrateur avec un email et un mot de passe. Lors de la connexion, les informations de l'utilisateur sont vérifiées :
Si l'utilisateur est un admin, il est redirigé vers la page administrateur.
Si c'est un utilisateur régulier, il est redirigé vers le formulaire d'humeur.
3. Envoi des Humeurs
Page Form : Une page où les employés peuvent sélectionner un emoji représentant leur humeur du jour et l'envoyer.
4. Visualisation des Résultats
Page Administrateur : L'administrateur accède à un tableau de bord avec un cercle représentant un pourcentage global des humeurs positives. Les émotions négatives diminuent ce pourcentage. Un bouton "Afficher les détails" permet de voir le pourcentage et les détails de chaque emoji.
5. Écran de Confirmation
Page ThankYouScreen : Après avoir envoyé leur humeur, les utilisateurs sont redirigés vers une page de remerciement. Un bouton leur permet de revenir à la page d'accueil.


Voici un exemple de fichier README.md pour ton projet, décrivant les différentes parties et fonctionnalités que tu as développées :

Moodly - Application de Suivi d'Humeur
Moodly est une application mobile permettant aux employés de partager leur humeur quotidienne et de permettre aux administrateurs de visualiser les résultats de ces humeurs afin de prendre des actions. Les employés peuvent se connecter, renseigner leur humeur via un formulaire, et un administrateur a accès à une interface spécifique où il peut visualiser les statistiques et les détails des humeurs envoyées.

Fonctionnalités
1. Connexion
Page Login2 : Une page de connexion où les utilisateurs entrent leur email et mot de passe. Si l'utilisateur est un administrateur, il est redirigé vers une page spécifique pour visualiser les résultats des humeurs. Les autres utilisateurs sont redirigés vers un formulaire pour renseigner leur humeur.
2. Système d'Authentification
Le projet inclut une API /api/create-admin permettant de créer un administrateur avec un email et un mot de passe. Lors de la connexion, les informations de l'utilisateur sont vérifiées :
Si l'utilisateur est un admin, il est redirigé vers la page administrateur.
Si c'est un utilisateur régulier, il est redirigé vers le formulaire d'humeur.
3. Envoi des Humeurs
Page Form : Une page où les employés peuvent sélectionner un emoji représentant leur humeur du jour et l'envoyer.
4. Visualisation des Résultats
Page Administrateur : L'administrateur accède à un tableau de bord avec un cercle représentant un pourcentage global des humeurs positives. Les émotions négatives diminuent ce pourcentage. Un bouton "Afficher les détails" permet de voir le pourcentage et les détails de chaque emoji.
5. Écran de Confirmation
Page ThankYouScreen : Après avoir envoyé leur humeur, les utilisateurs sont redirigés vers une page de remerciement. Un bouton leur permet de revenir à la page d'accueil.
Installation
Cloner le dépôt :

bash
Copier le code
git clone https://github.com/votre-repo/moodly.git
cd moodly
Installation des dépendances : Utilisez npm pour installer les dépendances du projet :

bash
Copier le code
npm install
Démarrer l'application : Pour démarrer l'application en développement, lancez la commande suivante :

bash
Copier le code
npm start
Démarrer le serveur API : Pour démarrer le serveur back-end Node.js, lancez la commande suivante :

bash
Copier le code
node server.js
Accéder à l'application :

Utilisez Expo pour scanner le QR code depuis votre appareil mobile ou un émulateur Android/iOS pour lancer l'application.


Configuration
Fichier server.js
Le serveur back-end utilise Node.js pour gérer les API et l'authentification des utilisateurs.
L'API /api/create-admin est utilisée pour créer un administrateur manuellement avec email et mot de passe. Cette route est protégée et accessible uniquement aux administrateurs.
Routes API :
POST /api/login : Authentifie les utilisateurs (admin ou employé).
POST /api/create-admin : Permet de créer un administrateur.
GET /api/moods : Récupère les humeurs soumises par les utilisateurs.
Base de données
Les humeurs et les utilisateurs sont stockés dans une base de données MongoDB.
Les utilisateurs sont créés avec deux rôles : admin et employé.
Navigation dans l'Application
L'application utilise React Navigation pour la gestion des routes :

Login2 : Écran de connexion.
Form : Écran de soumission de l'humeur.
ThankYouScreen : Écran de confirmation après l'envoi de l'humeur.
Admin : Tableau de bord pour visualiser les humeurs si l'utilisateur est un admin.
Technologies Utilisées
React Native : Pour le développement de l'interface mobile.
Expo : Pour faciliter le développement et tester sur différents appareils.
React Navigation : Gestion des routes et de la navigation entre les écrans.
Node.js et Express.js : Backend pour les API et la gestion des utilisateurs.
MongoDB : Base de données NoSQL pour stocker les utilisateurs et les humeurs.
Postman : Pour tester les routes de l'API.
Problèmes Courants et Solutions
Erreur 401 lors de la connexion
Assurez-vous que l'email et le mot de passe sont corrects et que l'utilisateur existe dans la base de données.

Problème de redirection après connexion de l'admin
Vérifiez que le champ isAdmin de l'utilisateur est bien défini sur true dans la base de données.

Améliorations Futures
Ajouter des fonctionnalités pour afficher les humeurs avec plus de détails (heures de soumission, filtres par date, etc.).
Permettre aux utilisateurs de laisser des commentaires en plus de soumettre une humeur.
Ajouter des notifications pour rappeler aux employés de soumettre leur humeur quotidienne.
