# Project 9 - Front-end Dashboard

//Ce référentiel contient tout le code source pour exécuter la micro API pour le tableau de bord d'analyse sportive SportSee.

This repo contains all the source code to run the micro API for the sports analytics dashboard SportSee.
Ce référentiel contient tout le code source pour exécuter la micro API pour le tableau de bord d'analyse sportive SportSee.

## 1. General information

//Pour démarrer ce projet, vous êtes libre d'utiliser Docker ou non. Dans cette documentation, nous verrons plusieurs méthodes pour lancer le projet facilement.

To start this project, you are free to use Docker or not. In this documentation, we will see several methods to launch the project easily.

## 2. Project (**without Docker**)

### 2.1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 2.2 Launching the project

//Fourchez le référentiel
//Clonez-le sur votre ordinateur.
//La yarncommande vous permettra d'installer les dépendances.
//La yarn devcommande vous permettra d'exécuter la micro API.

- Fork the repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.

## 3. Project (**with Docker**)

### 2.1 Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

### 2.2 Starting the project

//La docker image build --no-cache -t micro-api .commande vous permettra de construire votre image.
//La docker container run --name micro-api -p 3000:3000 -dt micro-api yarncommande vous permettra de créer votre conteneur Docker et d'exécuter votre image sur le port 3000.
//La docker container stop micro-apicommande vous permettra d'arrêter votre micro-api.
//La docker container rm micro-apicommande vous permettra de supprimer votre conteneur micro-api.

- The `docker image build --no-cache -t micro-api .` command will allow you to build your image.
- The `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn` command will allow you to create your Docker container and run your image on port 3000.
- The `docker container stop micro-api` command will allow you to stop your micro-api.
- The `docker container rm micro-api` command will allow you to delete your micro-api container.

### 2.3 Vscode and container remotes

//Enfin, si vous avez VsCode, vous pouvez facilement lancer votre projet dans un environnement docker.
//Vous aurez besoin de l' extension Remote Development . Une fois cette extension installée, cliquez simplement sur le Reopen in Containerbouton.
//Une fois dans le conteneur, exécutez la yarn devcommande.

Finally, if you have VsCode, you can easily launch your project in a docker environment.

You will need the [Remote Development extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack). Once you have this extension installed, just click on the `Reopen in Container` button.

Once in the container, run the `yarn dev` command.

## 4. Endpoints

### 4.1 Possible endpoints

//4.1 Effets possibles
Ce projet comprend quatre endpoints que vous pourrez utiliser :

http://localhost:3000/user/${userId}- récupère les informations d'un utilisateur. Ce premier point de terminaison comprend l'identifiant de l'utilisateur, les informations de l'utilisateur (prénom, nom et âge), le score du jour en cours (todayScore) et des données clés (calories, macronutriments, etc.).
http://localhost:3000/user/${userId}/activity- récupère l'activité d'un utilisateur jour après jour avec des kilogrammes et des calories.
http://localhost:3000/user/${userId}/average-sessions- récupère les sessions moyennes d'un utilisateur par jour. La semaine commence le lundi.
http://localhost:3000/user/${userId}/performance- récupère les performances d'un utilisateur (énergie, endurance, etc.).
Attention, pour le moment seuls deux utilisateurs ont été moqués. Ils ont respectivement les ID utilisateur 12 et 18.

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### 4.2 Examples of queries

//4.2 Exemples de requêtes
http://localhost:3000/user/12/performance- Récupère les performances de l'utilisateur avec l'id 12
http://localhost:3000/user/18- Récupère les informations principales de l'utilisateur 18.

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.
