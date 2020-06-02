const minimist = require('minimist');

class Input {
    constructor (arr) {
        const object = minimist(arr);
        delete object._;

        const [[ type, payload ]] = Object.entries(object);

        this.type = type;
        this.payload = payload;
    }


    isValid() {
        return this.type === 'add' && this.payload;
    };

}

module.exports = {
    Input
}
