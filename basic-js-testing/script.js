const variable1 = 1;

class World {
    constructor() {
        const variable0 = 0;
        this.variable2 = 2
    }

    showVar() {
        // console.log(variable0)
        console.log(variable1)
        console.log(this.variable2);
    }
}

const instance1 = new World()

instance1.showVar();