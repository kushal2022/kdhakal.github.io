class Duck {

    constructor() {
        this.flying = false;
        this.quaking = false;
        this.xPos = 0;
        this.yPos = 0;
    }

    takeOff() {
        this.flying = true;
    }

    land() {
        this.flying = false;
    }

    startQuaking() {
        this.quaking = true;
    }

    stopQuaking() {
        this.quaking = false;
    }

    moveTo(x, y) {
        this.xPos = x;
        this.yPos = y;
        var message = `The duck is `;
        if(this.flying) {
            message += `flying to ${x}, ${y}`;
        } else {
            message += `swimming to ${x}, ${y}`;
        }

        if(this.quaking) {
            message += ` while quaking`;
        }

        console.log(message);
    }
}

module.exports = Duck;


