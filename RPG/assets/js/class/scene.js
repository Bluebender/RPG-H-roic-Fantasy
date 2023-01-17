import { etapes } from './etapes.js'

class Scene {
    #id;
    #description;
    #illustration;
    #imgalt;
    #question;
    #choice1;
    #choice2;
    #redirection1;
    #redirection2;
    
    
    constructor(id) {
        
        this.#id = id;
        this.#description = etapes[id].description;
        this.#illustration = etapes[id].illustration;
        this.#imgalt = etapes[id].imgalt;
        this.#question = etapes[id].question;
        this.#choice1 = etapes[id].choice[0].text;
        this.#choice2 = etapes[id].choice[1].text;
        this.#redirection1 = etapes[id].choice[0].destination;
        this.#redirection2 = etapes[id].choice[1].destination;
    }
    get id() {
        return this.#id;
    }
    get description() {
        return this.#description;
    }
    get illustration() {
        return this.#illustration;
    }
    get imgalt() {
        return this.#imgalt;
    }
    get question() {
        return this.#question;
    }
    get choice1() {
        return this.#choice1;
    }
    get choice2() {
        return this.#choice2;
    }

    set id(id) {
        this.#id = id;
    }
    set description(description) {
        this.#description = description;
    }
    set illustration(illustration) {
        this.#illustration = illustration;
    }
    set imgalt(imgalt) {
        this.#imgalt = imgalt;
    }
    set question(question) {
        this.#question = question;
    }
    set choice1(choice1) {
        this.#choice1 = choice1;
    }
    set choice2(choice2) {
        this.#choice2 = choice2;
    }

};
export { Scene };