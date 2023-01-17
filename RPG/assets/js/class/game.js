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
<<<<<<< HEAD
        inputChoice1.setAttribute("attr", choice1Redirect);
        inputChoice2.setAttribute("attr", choice2Redirect);
        
        
=======
        choice1Input.setAttribute("attr", choice1Redirect);
        choice2Input.setAttribute("attr", choice2Redirect);

>>>>>>> 38cc1fbe179bee7d15c72ecc47a55b61a8a79c30
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
<<<<<<< HEAD

=======
        }
>>>>>>> 38cc1fbe179bee7d15c72ecc47a55b61a8a79c30
    }
    
<<<<<<< HEAD
  
=======
    Choose(){
<<<<<<< HEAD
        
        let choice = document.querySelectorAll("input");
        console.log(choice);
            for(let i = 0; i < choice.length; i++){
                console.log("choose boucle for");
                if(choice[i].checked === true){
                    let choiceCheked = choice[i].getAttribute("attr");
                    console.log(choiceCheked);
                    return choiceCheked;
                }
                
            }
        
=======
        let choice = document.querySelectorAll("input[name='choice']");

        for(let i = 0; i < choice.length; i++){
            if(choice[i].checked === true){
                let choiceCheked = choice[i].getAttribute("attr");
                console.log(choiceCheked)
                return choiceCheked;

            }
        }
>>>>>>> 38cc1fbe179bee7d15c72ecc47a55b61a8a79c30
    }
>>>>>>> 4698d5ed197ed2e9f1eb0b0c463834776f55b74c
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

import { Scene } from './class/scene.js';
import { SceneTest } from './class/scenetest.js';
import { GameTest } from './class/gametest.js';

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
    
    start(){
        let intro = document.getElementById('titreintro');
        let description = document.getElementById('description');
        let question = document.getElementById('question');
        let choice1 = document.getElementById('choice1');
        let choice2 = document.getElementById('choice2');
        let choice3 = document.getElementById('choice3');
        let choice4 = document.getElementById('choice4');
        let img = document.getElementById('img');
        
        let introText = document.createTextNode(this.#scenes[0].titreIntro);
        let descriptionText = document.createTextNode(this.#scenes[0].description);
        let illustrationimg = document.createTextNode(this.#scenes[0].illustration);
        let illustrationText = document.createTextNode(this.#scenes[0].imgalt);
        let questionText = document.createTextNode(this.#scenes[0].question);
        let choice1Text = document.createTextNode(this.#scenes[0].choice1);
        let choice2Text = document.createTextNode(this.#scenes[0].choice2);
        let choice3Text = document.createTextNode(this.#scenes[0].choice3);
        let choice4Text = document.createTextNode(this.#scenes[0].choice4);
        
        intro.appendChild(introText);
        img.setAttribute("src", illustrationimg);
        img.setAttribute("alt", illustrationText);
        description.appendChild(descriptionText);
        question.appendChild(questionText);
        choice1.appendChild(choice1Text);
    }

    ActuallyScene(scene){
        this.#scenes.push(scene);
    }
    
    DisplayScene(){
        
        for(let i = 0; i < this.#scenes.length; i++){
            
            let intro = document.getElementById('titreintro');
            let description = document.getElementById('description');
            let question = document.getElementById('question');
            let choice1 = document.getElementById('choice1');
            let choice2 = document.getElementById('choice2');
            let choice3 = document.getElementById('choice3');
            let choice4 = document.getElementById('choice4');
            let img = document.getElementById('img');
            
            let introText = document.createTextNode(this.#scenes[i].titreIntro);
            let descriptionText = document.createTextNode(this.#scenes[i].description);
            let illustrationimg = document.createTextNode(this.#scenes[i].illustration);
            let illustrationText = document.createTextNode(this.#scenes[i].imgalt);
            let questionText = document.createTextNode(this.#scenes[i].question);
            let choice1Text = document.createTextNode(this.#scenes[i].choice1);
            let choice2Text = document.createTextNode(this.#scenes[i].choice2);
            let choice3Text = document.createTextNode(this.#scenes[i].choice3);
            let choice4Text = document.createTextNode(this.#scenes[i].choice4);
            
            intro.appendChild(introText);
            img.setAttribute("src", illustrationimg);
            img.setAttribute("alt", illustrationText);
            description.appendChild(descriptionText);
            question.appendChild(questionText);
            choice1.appendChild(choice1Text);
            
            if (this.#scenes[i].choice4 === "null")
            {
                choice4.classList.add("null");
            }
            else
            {
                choice4.classList.remove("null");
                choice4.appendChild(choice4Text);
            }
            
            if (this.#scenes[i].choice3 === "null")
            {
                choice3.classList.add("null");
            }
            else
            {
                choice4.classList.remove("null");
                choice3.appendChild(choice3Text);
            }
            if (this.#scenes[i].choice2 === "null")
            {
                choice2.classList.add("null");
            }
            else
            {
                choice4.classList.remove("null");
                choice2.appendChild(choice2Text);
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
