# Projet de fin de semestre - Dashboard de suivi de carrière
Pour ce projet, nous avons réalisé un dashboard sur le thème des bougies. Un ami à nous a lancé sa marque de bougies réalisées à partir de bouteilles en verre. Comme widgets, nous avons un graphique des ventes sur les six derniers mois, une liste des dernières ventes, l’âge des utilisateurs, le stock de parfums, le stock de bouteilles et le type de bougies.
Ps: Pour se connecter, il faut utiliser les pseudos aure ou juju et la navigation entre les pages se fait grâce à /home et /admin.


<p align="center">
 <a href="https://gitlab.com/Adrien_Kourganoff/instructions_web_ocres_ing4/-/blob/master/README.md">Règles pour le semestre</a>
</p>

## Organisation du travail
Afin de mener à bien le projet, nous avons divisé le travail et suivi l’avancement du projet sur Trello.

image

Le lien de notre trello : https://trello.com/b/WowdhY2b/dashboard

## Prototypage

Pour prototyper notre solution, nous avons utilisé l’outil Figma.
Trois pages ont été prototypées:
- la page de connexion
- la page dashboard avec les widgets
- la page admin

image 

Cela a rendu le travail sur la réalisation du frontend plus efficace. Le design et le css étaient en effet déjà réfléchis.
Le lien du Figma : https://www.figma.com/file/bKVA28IuTECwUGGlKrj8oB/Simple?node-id=0%3A1

## La partie frontend

La partie frontend est codée grâce au framework Javascript React.js. L’utilisation de Bootstrap a permis de rendre le site responsive. L’utilisation de routes assure la navigation entre les pages.
Trois de nos widgets sont conçus à partir de la bibliothèque Recharts. 
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
