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

        let description = document.getElementById('description');
        let question = document.getElementById('question');
        let choice1 = document.getElementById('choice1');
        let choice2 = document.getElementById('choice2');
        let choice1Input = document.getElementById('choix1');
        let choice2Input = document.getElementById('choix2');
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

    Choose(){
        let choice = document.querySelectorAll("input[name='choice']");
        let choiceCheked;

        for(let i = 0; i < choice.length; i++){


            if(choice[i].checked === true){
                choiceCheked = choice[i].getAttribute("attr");
                console.log(choiceCheked)
                
                let description = document.getElementById('description');
                let question = document.getElementById('question');
                let choice1 = document.getElementById('choice1');
                let choice2 = document.getElementById('choice2');
                let choice1Input = document.getElementById('choix1');
                let choice2Input = document.getElementById('choix2');
                let img = document.getElementById('img');
                
                let sceneToDisplay = new Scene(choiceCheked);
                
                let descriptionText = document.createTextNode(sceneToDisplay.description);
                let illustrationimg = sceneToDisplay.illustration;
                let illustrationText = sceneToDisplay.imgalt;
                let questionText = document.createTextNode(sceneToDisplay.question);
                let choice1Text = document.createTextNode(sceneToDisplay.choice1);
                let choice1Redirect = sceneToDisplay.redirection1;
                let choice2Text = document.createTextNode(sceneToDisplay.choice2);
                let choice2Redirect = sceneToDisplay.redirection2;
        
                img.setAttribute("src", illustrationimg);
                img.setAttribute("alt", illustrationText);
                choice1Input.setAttribute("attr", choice1Redirect);
                choice2Input.setAttribute("attr", choice2Redirect);
                
                description.innerHTML="";
                question.innerHTML="";
                choice1.innerHTML="";
                choice2.innerHTML="";
                
                description.appendChild(descriptionText);
                question.appendChild(questionText);
                choice1.appendChild(choice1Text);
                choice2.appendChild(choice2Text);
            }
        }
        console.log(choiceCheked)
    }
}

export { Game };
