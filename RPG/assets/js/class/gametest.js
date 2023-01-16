import { Game } from './game.js';
class GameTest {
    
    
    #test2;
    
     constructor()
        {
            this.#test2 = null;
        }
        
    test2()
    {
        let scenes = ["rougail"];
        
        this.#test2 = new Game(scenes);
        
        console.log(this.#test2.scenes);
        
        this.#test2.scenes = ["saucisses"];
        
        console.log(this.#test2.scenes);

    }
};
export { GameTest };