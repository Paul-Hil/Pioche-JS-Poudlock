// Notre variable qui contient le "module" app (un objet)
let app = {
    // Tableau contenant le nom des 4 maisons
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],
    
    game_mode: 1,

    // Méthode appelée au chargement de la page
    init: function () {
        
        // Pose les écouteurs d'événements
        document.querySelector(".name_form").addEventListener('submit', app.handleformSubmit);

        document.querySelector(".easy_mode").addEventListener('click', app.handleChangeMode);
        document.querySelector(".hard_mode").addEventListener('click', app.handleChangeMode);
    },

    /**
     * Changer le mode selon le bouton clické
     * @param evt 
     */
    handleChangeMode: function (evt) {
        // Vérifie la classe du bouton
        if (evt.currentTarget.className === 'hard_mode') {
            app.game_mode = 2;
        } else {
            app.game_mode = 1;
        }
    },

    /**
     * Fonction déclenchée à l'envoie du form
     * @param  evt 
     */
    handleformSubmit: function (evt) {
        // Evite le refresh de la page
        evt.preventDefault();

        // Récupère la valeur entré dans le champ
        let answer = evt.currentTarget.querySelector('input').value;

        // Récupère la bulle 
        let speech = document.querySelector('.speech');

        // on vérifie si le champ est vide
        if (answer.length !== 0) {
            // vérifie le mode
            if (app.game_mode === 1) { // mode chaotique
                
                // Remplace le contenu et insére l'image 
                speech.innerHTML =  "<img src='images/" + app.houses[Math.round(Math.random() * 3)] + ".png' alt='Maison selectionnée'>";

            } else { // mode organisé
                if (answer.length === 8) {
                    var imgMaison = "<img src='images/maxopus.png' alt='Maison selectionnée'>";

                } else if (answer.charAt(0) === 'L' || answer.charAt(answer.length - 1) === "x") {
                    var imgMaison = "<img src='images/lustrix.png' alt='Maison selectionnée'>";

                } else if((answer.length % 5) === 0 || (answer.length % 3) === 0 ) {
                    var imgMaison = "<img src='images/anthorvus.png' alt='Maison selectionnée'>";
                }
                else {
                    var imgMaison = "<img src='images/darioptera.png' alt='Maison selectionnée'>";  
                }

                speech.innerHTML = imgMaison;
            }
        } else {
            speech.innerHTML = "<p>Ca ne fonctionne qu'avec  un nom, pardi !</p>";
        }
    },
}

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);