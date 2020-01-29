# NodeJS Workshop

## 1. Présentation NodeJS

- historique
- langage asynchrone

## 2. Préparation Environnement

- Git

  - Fork & GitClone le repo du workshop
  - .gitignore

- NPM
  - Qu'est-ce que NPM ?
  - Comment utiliser NPM ?
  - NPM install

## 3. Creation du serveur

- Module
    - comment cherche dans la doc
    - Comment require un module
- créer le serveur
  - listen le port 80 (ou 8080 en local)
  - Parler des ports systèmes : besoin de SUDO pour le 80
  - console.log sur la requête serveur pour voir la tête de la requête

## 4. Router ses premières pages

- Comment servir une page ?
    - Require module filesystem : "fs"
        - Small explanation about "fs"
    - protocle HTTP
        - modèle client-serveur (schéma Louis)
        
- Router les premières pages : Bienvenue
    - Routage de la racine du site vers index.html
        - Ajouter console.log(req.url)
        - Pas de style, c'est normal
    - Routage d'une ref vers une page random.html
    - Routage page 404
        - hardcoder le html sous forme de string
        - Les Status Code 
            - 200
            - 404
            - 418 
    - Apprendre à servir les assets
        - Ajouter le link dans l'HTML et constater que c'est insuffisant
        - Type mimes et gestion -> servir en fonction du type Mimes
        - montrer le snippet en Express.js (plus rapide)
    - Ajouter une image de chat
        - dans le serveur 
        - ajouter l'image à l'html
        - servir l'image
    - Prendre en charge le form fourni
        - requête POST
            - récupérer le formulaire sous forme de JSON
            - Expliquer le concept de sanitization et sanitizer (Un snippet de sanitization est fourni)
    
    ## 5. Socket.IO

    - Installer Socket.io
    - 

    ## Myworkforce et Wesmart
    - Python (très peu de chance)
        - (Flask)
    - GULP
    - YARN
    - API REST
    - NODEJS (peu)
    - PHP
        - LARAVEL (principal)
    - SASS
        - + Suzie
    - WEBPACK
    - VUE.JS (peu)
        - + NUXT
    - ZAPPIER (linker des api)
    - (arduino)
    - Wordpress


        
        
        
        
        - GET, POST
        - Status Code


