import { data } from './data.js'

class Scene {
    #id;
    #description;
    #illustration;
    #imgalt;
    #question;
    #choice1;
    #choice2;
    #choice3;
    #choice4;

    constructor(id) {
        
        this.#id = id;
        this.#description = data[id].description;
        this.#illustration = data[id].illustration;
        this.#question = data[id].question;
        this.#choice1 = date[id].choice1;
        this.#choice2 = data[id].choice2;
        this.#choice3 = data[id].choice3;
        this.#choice4 = data[id].choice4;
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
    get choice3() {
        return this.#choice3;
    }
    get choice4() {
        return this.#choice4;
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
    set choice3(choice3) {
        this.#choice3 = choice3;
    }
    set choice4(choice4) {
        this.#choice4 = choice4;
    }
};
export { Scene };