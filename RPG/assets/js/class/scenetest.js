import { Scene } from './scene.js';
class SceneTest {
    
    #test;
    
     constructor()
        {
            this.#test = test;
        }
        
    test()
    {
        let description = "jambon beurre";
        let illustration = "jambon beurre salade";
        let question = "jambon ou poulet ?";
        let choice1 ="boeuf";
        let choice2 ="steack";
        let choice3 ="haché";
        let choice4 ="nuggets";
        
        this.#test = new test(description, illustration, question, choice1, choice2, choice3, choice4);
        
        console.log(this.#Scene.description);
        console.log(this.#Scene.illustration);
        console.log(this.#Scene.question);
        console.log(this.#Scene.choice1);
        console.log(this.#Scene.choice2);
        console.log(this.#Scene.choice3);
        console.log(this.#Scene.choice4);
        
        this.#Scene.description = "jambon2 beurre2";
        this.#Scene.illustration = "jambon2 beurre2 salade2";
        this.#Scene.question = "jambon2 ou poulet2 ?";
        this.#Scene.choice1 = "boeuf2";
        this.#Scene.choice2 = "steack2";
        this.#Scene.choice3 = "haché2";
        this.#Scene.choice4 = "nuggets2";
        
        console.log(this.#Scene.description);
        console.log(this.#Scene.illustration);
        console.log(this.#Scene.question);
        console.log(this.#Scene.choice1);
        console.log(this.#Scene.choice2);
        console.log(this.#Scene.choice3);
        console.log(this.#Scene.choice4);
        
    }
};
export { SceneTest };