class Transition {
    constructor(data) {
        this.duration = data.duration || 0;
        this.easing = data.easing || 'linear';    
    }

    moveIn(anime, target) {
        throw new Error("No move in animation provided...");
    }

    moveOut(anime, target) {
        throw new Error("No move out animation provided...");
    }
}

export default Transition;