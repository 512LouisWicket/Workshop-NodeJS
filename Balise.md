# NodeJS Workshop

## [1. Présentation NodeJS](/Parcours/1.%20Introduction%20à%20Node.js.md)

- historique
- langage asynchrone

## [2. Préparation Environnement](/Parcours/2.%20Mise%20en%20place%20de%20l’environnement.md)


- Git
  - Fork & GitClone le repo du workshop
  - .gitignore

- NPM
  - Qu'est-ce que NPM ?
  - Comment utiliser NPM ?
  - NPM install

## [3. Creation du serveur](/Parcours/3.%20Création%20d’un%20premier%20serveur.md)

- Module
    - comment cherche dans la doc
    - Comment require un module
- créer le serveur
  - listen le port 80 (ou 8080 en local)
  - Parler des ports systèmes : besoin de SUDO pour le 80
  - console.log sur la requête serveur pour voir la tête de la requête

## [4. Servir ses premières pages](/Parcours/4.%20Routage.md)

### 4.1

- Comment servir une page ?
    - Require module filesystem : "fs"
    - protocle HTTP
        - modèle client-serveur (schéma Louis)

### 4.2

- Router les premières pages : Bienvenue
    - Routage de la racine du site vers index.html
        - Ajouter console.log(req.url)
        - Pas de style, c'est normal
    - Routage page 404
        - hardcoder le html sous forme de string
        – les status codes (404, 200, 418)


### 4.3

#### 4.3.1

- Apprendre à servir les assets
    - Ajouter le link dans l'HTML et constater que c'est insuffisant
    - Type mimes et gestion -> servir en fonction du type Mimes
    - montrer le snippet en Express.js (plus rapide)

#### 4.3.2

- Ajouter une image de chat
    - dans le serveur 
    - ajouter l'image à l'html
    - servir l'image

#### 4.3.3

- Prendre en charge le form fourni
    - requête POST
        - récupérer le formulaire sous forme de JSON
        - Expliquer le concept de sanitization et sanitizer (Un snippet de sanitization est fourni)
    
## [5. Socket.IO](/Parcours/5.%20Socket.IO.md)

- Qu'est-ce qu'un socket
- Installer Socket.io
