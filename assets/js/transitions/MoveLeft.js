import Transition from "./Transition.js";

class MoveLeft extends Transition {
    constructor(data) {
        super(data);
    }

    moveIn(anime, target) {
        anime({
            targets: target,
            duration: this.duration,
            translateX: '-25px',
            easing: this.easing
        });

        anime({
            targets: target,
            duration: this.duration,
            opacity: 0,
            easing: this.easing
        });
    }

    moveOut(anime, target) {
        anime({
            targets: target,
            duration: 0,
            translateX: '25px',
        });
    }
}

export default MoveLeft;