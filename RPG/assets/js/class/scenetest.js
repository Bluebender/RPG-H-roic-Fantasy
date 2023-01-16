import { Scene } from './scene.js';
class SceneTest {

    #test;
<<<<<<< HEAD

    constructor() {
        this.#test = null;
    }

    test() {
        let description = "jambon beurre";
        let illustration = "jambon beurre salade";
        let question = "jambon ou poulet ?";
        let choice1 = "boeuf";
        let choice2 = "steack";
        let choice3 = "haché";
        let choice4 = "nuggets";

        this.#test = new Scene(description, illustration, question, choice1, choice2, choice3, choice4);

=======
    
     constructor()
        {
            this.#test = null;
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
        
        this.#test = new Scene(description, illustration, question, choice1, choice2, choice3, choice4);
        
>>>>>>> bea606614406e3a4758f8195bbd12245809ac088
        console.log(this.#test.description);
        console.log(this.#test.illustration);
        console.log(this.#test.question);
        console.log(this.#test.choice1);
        console.log(this.#test.choice2);
        console.log(this.#test.choice3);
        console.log(this.#test.choice4);
<<<<<<< HEAD

=======
        
>>>>>>> bea606614406e3a4758f8195bbd12245809ac088
        this.#test.description = "jambon2 beurre2";
        this.#test.illustration = "jambon2 beurre2 salade2";
        this.#test.question = "jambon2 ou poulet2 ?";
        this.#test.choice1 = "boeuf2";
        this.#test.choice2 = "steack2";
        this.#test.choice3 = "haché2";
        this.#test.choice4 = "nuggets2";
<<<<<<< HEAD

=======
        
>>>>>>> bea606614406e3a4758f8195bbd12245809ac088
        console.log(this.#test.description);
        console.log(this.#test.illustration);
        console.log(this.#test.question);
        console.log(this.#test.choice1);
        console.log(this.#test.choice2);
        console.log(this.#test.choice3);
        console.log(this.#test.choice4);
<<<<<<< HEAD

=======
        
>>>>>>> bea606614406e3a4758f8195bbd12245809ac088
    }
};
export { SceneTest };
