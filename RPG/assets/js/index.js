import { Scene } from './class/scene.js'
import { SceneTest } from './class/scenetest.js'


window.addEventListener("DOMContentLoaded", function(){

    let scene1 = new Scene("Vous êtes quelque part", "./img/door.png", "Voulez vous faire ça ?", "Oui", "Non", "null", "null");
    let scene2 = new Scene("Vous êtes autre part", "./img/portal.png", "Voulez vous faire ça ?", "Oui", "Non", "null", "null");
    let scene3 = new Scene("Vous êtes mort", "./img/tower.png", "Pas de bol", "null", "null", "null", "null");
<<<<<<< HEAD

    let scenetest = new SceneTest();
    scenetest.test()
    
    console.log(scene1)
    console.log(scene2)
    console.log(scene3)
=======
    
    let test = new SceneTest();
    test.test();
>>>>>>> bea606614406e3a4758f8195bbd12245809ac088
    
});