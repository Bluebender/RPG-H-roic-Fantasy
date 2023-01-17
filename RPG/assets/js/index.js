import { Scene } from './class/scene.js';
import { Game } from './class/game.js';
import { etapes } from './class/etapes.js';


window.addEventListener("DOMContentLoaded", function(){

    let demarrer = new Game();
    demarrer.start();
    
    let form = document.getElementById('form');
        form.addEventListener('submit', function(e){
            e.preventDefault();
            e.Choose();
        })
});