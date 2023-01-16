class Game {
    #scenes;
    
    constructor(scenes){
        this.#scenes = [];
    }
    
    get scenes (){
        return this.scenes;
    }
    
    
    ActuallyScene(scene){
        this.#scenes.push(scene);
    }
    
    DisplayScene(){
        
        for(let i = 0; i < this.scenes.length; i++){
            
            let intro = document.getElementById('titreIntro');
            let description = document.getElementById('description');
            let question = document.getElementById('question');
            let choice1 = document.getElementById('choice1');
            let choice2 = document.getElementById('choice2');
            let choice3 = document.getElementById('choice3');
            let choice4 = document.getElementById('choice4');
            let img = document.getElementById('img');
            
            
            
        }
        
    }
    
    save(){
        
        
    }
}
export { Game };
