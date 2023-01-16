import { Scene } from './class/scene.js'
import { Game } from './class/game.js'
import { SceneTest } from './class/scenetest.js'
import { GameTest } from './class/gametest.js'


window.addEventListener("DOMContentLoaded", function(){

    let scene1 = new Scene("Vous êtes quelque part", "./img/door.png", "Voulez vous faire ça ?", "Oui", "Non", "null", "null");
    let scene2 = new Scene("Vous êtes autre part", "./img/portal.png", "Voulez vous faire ça ?", "Oui", "Non", "null", "null");
    let scene3 = new Scene("Vous êtes mort", "./img/tower.png", "Pas de bol", "null", "null", "null", "null");
    
    let test = new SceneTest();
    test.test();

   let gametest = new GameTest();
    gametest.test2();
    
});