import { Scene } from './class/scene.js';
import { Game } from './class/game.js';
import { etapes } from './class/etapes.js';


window.addEventListener("DOMContentLoaded", function(){

    let demarrer = new Game();
    demarrer.start();
<<<<<<< HEAD
    
    
=======

>>>>>>> 38cc1fbe179bee7d15c72ecc47a55b61a8a79c30
    let form = document.getElementById('form');
        form.addEventListener('submit', function(e)
        {
            e.preventDefault();
<<<<<<< HEAD
=======

>>>>>>> 38cc1fbe179bee7d15c72ecc47a55b61a8a79c30
            demarrer.Choose();
        })

});