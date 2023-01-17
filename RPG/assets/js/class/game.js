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
 
    // toJSON(){
    //     let save = [];
        
    //     for(let i = 0; i < this.#scenes.length; i++){
    //             let intro = this.#scenes[i];
    //             let description = this.#scenes[i];
    //             let question = this.#scenes[i];
    //             let choice1 = this.#scenes[i];
    //             let choice2 = this.#scenes[i];
    //             let choice3 = this.#scenes[i];
    //             let choice4 = this.#scenes[i];
    //             let img = this.#scenes[i];
                
    //             save.push(intro, description, question, choice1, choice2, choice3, choice4, img);
    //     }
        
        
        
    //   return JSON.stringify(save); 
    // }


}
export { Game };
