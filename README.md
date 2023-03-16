# Projet 14 OpenClassrooms : appli de gestion des employés - HRnet
#### _Passage de JQuery à React_

 [![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-grammas-recipe.svg)](https://forthebadge.com)

## Objectif
Une grande société financière, WealthHealth, utilise une application web interne, appelée HRnet, qui gère les dossiers des employés. L'application est ancienne et utilise jQuery côté front end, ce qui entraîne des bugs considérables et une augmentation des plaintes en interne. L'objectif est de développer entièrement une nouvelle application en React, en remplaçant chacun des plugins JQuery vers React.

Lien GitHub vers : [ancienne application HRnet](https://github.com/OpenClassrooms-Student-Center/P12_Front-end)
Lien GitHub vers le plugin converti : [modale React](https://github.com/OpenClassrooms-Student-Center/P12_Front-end)
Lien vers la bibliothèque NPM : [modale npm](https://www.npmjs.com/package/confirmation-modal-lib)

## Fonctionnalités :
##### Les tâches principales :
- Convertir l'ensemble du projet HRNet en React. 
- Convertir l'un des quatre plugins jQuery actuels en React. Remplacer les 3 plugins jQuery restants par des composants React que tu coderas toi-même, ou que tu peux importer depuis des libraires existantes si tu manques de temps. 
- Effectuer des tests de performance Lighthouse en comparant l'ancienne et la nouvelle application.

##### Conversion du projet HRNet :
- Développement d'une nouvelle version des pages "Create Employee" et "Employee List" avec React.
- Ajout d'un système de gestion d'état React context.
- Refaire le design de l'application pour changer le style pour quelque chose de plus moderne.
- Tester le code React avec une suite de tests unitaires. 

## Conversion des plugins :
Voici la liste des plugins jQuery actuellement utilisés qui doivent être convertis : 

[Plugin de sélection de date](https://github.com/xdan/datetimepicker)
[Plugin de fenêtre modale - jQuery.modal.js](https://github.com/kylefox/jquery-modal)
[Menus déroulants](https://github.com/jquery/jquery-ui/blob/master/ui/widgets/selectmenu.js)
[Plugin pour les tables de données](https://github.com/DataTables/DataTables)

## Tests de performance :
Mesurer des données quantifiables (ex. : temps de chargement des pages, appels réseau) pour s'assurer que la conversion de l'application à React améliore effectivement les performances. Pour cela, faire des audits de performance Lighthouse.