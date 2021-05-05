import Transition from "./Transition.js";

class Fade extends Transition {
    constructor(data) {
        super(data);
    }

    moveIn(anime, target) {
        anime({
            targets: target,
            duration: this.duration,
            opacity: 0,
            easing: this.easing
        });
    }

    moveOut(anime, target) {
        // Don't do anything. The OnReady function already does this for us.
    }
}

export default Fade;