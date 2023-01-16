class Scene {
    #description;
    #illustration;
    #question;
    #choice1;
    #choice2;
    #choice3;
    #choice4;

    constructor(description, illustration, question, choice1, choice2, choice3, choice4) {
        this.#description = description;
        this.#illustration = illustration;
        this.#question = question;
        this.#choice1 = choice1;
        this.#choice2 = choice2;
        this.#choice3 = choice3;
        this.#choice4 = choice4;
    }
    get description() {
        return this.#description;
    }
    get illustration() {
        return this.#illustration;
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

    set description(description) {
        this.#description = description;
    }
    set illustration(illustration) {
        this.#illustration = illustration;
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