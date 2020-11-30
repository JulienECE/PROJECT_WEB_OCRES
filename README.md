# Projet de fin de semestre - Dashboard de suivi de carrière
Pour ce projet, nous avons réalisé un dashboard sur le thème des bougies. Un ami à nous a lancé sa marque de bougies réalisées à partir de bouteilles en verre. Comme widgets, nous avons un graphique des ventes sur les six derniers mois, une liste des dernières ventes, l’âge des utilisateurs, le stock de parfums, le stock de bouteilles et le type de bougies.
Ps: Pour se connecter, il faut utiliser les pseudos aure ou juju et la navigation entre les pages se fait grâce à /home et /admin.

## Organisation du travail
Afin de mener à bien le projet, nous avons divisé le travail et suivi l’avancement du projet sur Trello.

Le lien de notre trello : https://trello.com/b/WowdhY2b/dashboard

## Prototypage

Pour prototyper notre solution, nous avons utilisé l’outil Figma.
Trois pages ont été prototypées:
- la page de connexion
- la page dashboard avec les widgets
- la page admin

Principalement, nous avons chacun géré 2 formulaires et 3 widgets 
Julien :
- prototypage
- widgets
- formulaires
- page connexion

Aurélien :
- widgets
- formulaires
- pages Admin et Home
- storybook



Cela a rendu le travail sur la réalisation du frontend plus efficace. Le design et le css étaient en effet déjà réfléchis.
Le lien du Figma : https://www.figma.com/file/bKVA28IuTECwUGGlKrj8oB/Simple?node-id=0%3A1

## La partie frontend

On retrouve 6 widgets sur notre site :
- Le type de bougies, on y rerrouve les différents types de bougies (photo + nom de la bougie) en cliquant sur le widget.
- Les ventes par mois, on y retrouve les ventes réalisées au cours des 6 derniers mois.
- Les dernières ventes, on y retrouve les 10 commandes les plus récentes.
- Les stocks de parfum, on y retrouve le nombre de bougies actuellement stockées suivant les différents parfums disponibles.
- L'age des acheteurs, on y retrouve un graphique de l'age des différents acheteurs à des fins statistiques.
- Le stock de bouteilles, on y retrouve le stock de bouteilles de vin/bière étant nécessaire à la fabrication des bougies.

La partie frontend est codée grâce au framework Javascript React.js.
L’utilisation de Bootstrap a permis de rendre le site responsive. 
L’utilisation de routes assure la navigation entre les pages.
Trois de nos widgets sont conçus à partir de la bibliothèque Recharts (ventes par mois/Stock parfums/Ages des acheteurs).
Le test des composants se fait à l’aide de l’outil storybook. Chaque composant est affiché individuellement ainsi que l’ensemble des pages.

## La partie backend

La partie backend sera réalisée ultérieurement.

## Comment démarrer le projet

1. Cloner ce repo.


2. Installer les paquets nécessaires en exécutant la commande suivante:

 npm install
 dans /frontend

3. Lancer le projet en exécutant la commande suivante:

 npm start
 dans /frontend

4. Lancer le projet sur storybook avec la commande suivante :
yarn storybook
 Pour se connecter, utilisez les pseudo suivants :
aure
juju

## Auteurs

Aurélien Davodet, Julien Maréchal, TD2B
