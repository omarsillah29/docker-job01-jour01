# Jour 4 – Job 06 – Application multi-conteneurs Docker

## Création du fichier docker-compose.yml

Résultat :  
![](images/docker-compose_yml.png)

---

## Construction des images Docker

Résultat :  
![](images/docker_compose_build.png)

---

## Lancement des conteneurs Docker

Résultat :  
![](images/docker-compose-up-d.png)

---

## Vérification des conteneurs en cours d’exécution

Résultat :  
![](images/docker-compose-ps.png)

---

## Accès à Adminer (gestion de la base de données)

Adresse:
http://localhost:8081/

Paramètres de connexion :

Serveur : database
Utilisateur : root
Mot de passe : root
Base de données : projetdb

Résultat :  
![](images/Adminer.png)

---

## Test du backend Node.js

Adresse:
http://localhost:3000/

Résultat :  
![](images/backend.png)

---

## Test de l’API (connexion Backend ↔ MySQL)

Adresse:
http://localhost:3000/api/status

Résultat :  
![](images/api.png)

---

## Accès au frontend via Nginx

Adresse:
http://localhost:8080/

Résultat :  
![](images/nginx.png)

---


## Fin du Job 06

Application multi-conteneurs fonctionnelle avec communication réseau entre services, persistance des données et interface d’administration graphique.