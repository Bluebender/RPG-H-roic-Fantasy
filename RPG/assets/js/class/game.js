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
            
            let intro = document.getElementById('titreIntro');
            let description = document.getElementById('description');
            let question = document.getElementById('question');
            let choice1 = document.getElementById('choice1');
            let choice2 = document.getElementById('choice2');
            let choice3 = document.getElementById('choice3');
            let choice4 = document.getElementById('choice4');
            let img = document.getElementById('img');
            
            let introText = document.createTextNode(this.#scenes[i]);
            let descriptionText = document.createTextNode(this.#scenes[i]);
            let questionText = document.createTextNode(this.#scenes[i]);
            let choice1Text = document.createTextNode(this.#scenes[i]);
            let choice2Text = document.createTextNode(this.#scenes[i]);
            let choice3Text = document.createTextNode(this.#scenes[i]);
            let choice4Text = document.createTextNode(this.#scenes[i]);
            
            intro.appendChild(introText);
            img.setAttribute("src", this.#scenes[i].file);
            img.setAttribute("alt", this.#scenes[i].name);
            description.appendChild(descriptionText);
            question.appendChild(questionText);
            choice1.appendChild(choice1Text);
            choice2.appendChild(choice2Text);
            choice3.appendChild(choice3Text);
            choice4.appendChild(choice4Text);
        }
        
    }
    
    save(){
        
        
    }
}
export { Game };
