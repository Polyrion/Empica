
## Installation

Lancer le projet

```bash
  yarn
  yarn start
```
### Remarque

Durée total pour compléter le test : 2h \
Vous pourrez voir tout mes commits et les modifications apporté issue par issue qui sont décrite dans mes message de commits

J'ai ajouter un ficher index.js et modifier le script start avec nodemon pour me facilité la vie sinon j'aurais pris 2h de plus juste pour tester chaque ligne de code en relancant le server avec le clean cache ^^!

Il ce peux que vous tombiez sur une erreur de chargement au rafraichissement de la page du projet qui est du au code suivant : 
```
    function getTranslations() {
        return new Promise((resolve, reject) => {
            var isZero = Math.floor(Math.random() * 2);
            if(isZero){
                resolve(translations);
             } else {
                console.warn('error while loading translations');
                reject(); // The translations server has some issue and don't always respond.
            }
        });
    }
```
Celui ci ce situe à la ligne 47 du fichier data.service.js qui ne devait pas être modifier, que j'aurais bien modifier pour le coup 

Les issues suivante n'ont pas été reproduite
Pour la N°4 peux être que c'est moi qui ai mal compris je ne sais pas.

#### Issue N° 2
La liste des « company » ne s'affiche pas toujours correctement

#### Issue N° 4 
Les traductions du type d’absence ne fonctionne pas toujours
Lors de certains chargements, le nom interne des absences est affiché au lieu de sa traduction. Attendu : la colonne type affiche toujours le nom traduit (celui avec la majuscule)

