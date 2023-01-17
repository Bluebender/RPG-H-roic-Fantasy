import { Scene } from './scene.js';
import { SceneTest } from './scenetest.js';
import { GameTest } from './gametest.js';

class Game {
    
    #scenes;
    
    constructor(scenes){
        this.#scenes = [];
    }
    
    get scenes () {
        return this.#scenes;
    }
    
    set scenes(scenes) {
        this.#scenes = scenes;
    }
    
    start() {
<<<<<<< HEAD
        
=======

>>>>>>> 38cc1fbe179bee7d15c72ecc47a55b61a8a79c30
        let description = document.getElementById('description');
        let question = document.getElementById('question');
        let choice1 = document.getElementById('choice1');
        let choice2 = document.getElementById('choice2');
<<<<<<< HEAD
        let inputChoice1 = document.querySelector(" body section:nth-of-type(2) form ul li input:first-of-type ");
        let inputChoice2 = document.querySelector(" body section:nth-of-type(2) form ul li input:last-of-type ");
=======
        let choice1Input = document.getElementById('choix1');
        let choice2Input = document.getElementById('choix2');
>>>>>>> 38cc1fbe179bee7d15c72ecc47a55b61a8a79c30
        let img = document.getElementById('img');
        
        let firstScene = new Scene(0);
        
        let descriptionText = document.createTextNode(firstScene.description);
        let illustrationimg = firstScene.illustration;
        let illustrationText = firstScene.imgalt;
        let questionText = document.createTextNode(firstScene.question);
        let choice1Text = document.createTextNode(firstScene.choice1);
        let choice1Redirect = firstScene.redirection1;
        let choice2Text = document.createTextNode(firstScene.choice2);
        let choice2Redirect = firstScene.redirection2;

        img.setAttribute("src", illustrationimg);
        img.setAttribute("alt", illustrationText);
        choice1Input.setAttribute("attr", choice1Redirect);
        choice2Input.setAttribute("attr", choice2Redirect);
        description.appendChild(descriptionText);
        question.appendChild(questionText);
        choice1.appendChild(choice1Text);
        choice2.appendChild(choice2Text);
    }

    ActuallyScene(scene){
        this.#scenes.push(scene);
    }
    
    DisplayScene(){
            
            let intro = document.getElementById('titreintro');
            let description = document.getElementById('description');
            let question = document.getElementById('question');
            let choice1 = document.getElementById('choice1');
            let choice2 = document.getElementById('choice2');
            let img = document.getElementById('img');
            
            let sceneToDisplay = new Scene(choiceCheked);
            
            let introText = document.createTextNode(sceneToDisplay.id);
            let descriptionText = document.createTextNode(sceneToDisplay.description);
            let illustrationimg = sceneToDisplay.illustration;
            let illustrationText = sceneToDisplay.imgalt;
            let questionText = document.createTextNode(sceneToDisplay.question);
            let choice1Text = document.createTextNode(sceneToDisplay.choice1);
            let choice2Text = document.createTextNode(sceneToDisplay.choice2);

            intro.appendChild(introText);
            img.setAttribute("src", illustrationimg);
            img.setAttribute("alt", illustrationText);
            description.appendChild(descriptionText);
            question.appendChild(questionText);
            choice1.appendChild(choice1Text);
            choice2.appendChild(choice2Text);

        }

    }
    
    Choose(){

        let choice = document.querySelectorAll("input[name='choice']");
        let choiceCheked;

        for(let i = 0; i < choice.length; i++){


            if(choice[i].checked === true){
                choiceCheked = choice[i].getAttribute("attr");
                console.log(choiceCheked)
                return choiceCheked;

            }
        }

    }

}
    
    
    
    // Sauvegarde de l'endroit où l'on est

    /*
    toJSON(){
        let save = [];
        
        for(let i = 0; i < this.#scenes.length; i++){
                let intro = this.#scenes[i];
                let description = this.#scenes[i];
                let question = this.#scenes[i];
                let choice1 = this.#scenes[i];
                let choice2 = this.#scenes[i];
                let choice3 = this.#scenes[i];
                let choice4 = this.#scenes[i];
                let img = this.#scenes[i];
                
                save.push(intro, description, question, choice1, choice2, choice3, choice4, img);
        }
        
       return JSON.stringify(save); 
    }
    */

export { Game };
