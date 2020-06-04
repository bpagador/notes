const minimist = require('minimist');


const validTypes = {
    add: true, 
    list: true, 
    delete:true
}


class Input {
    constructor (arr) {
        const object = minimist(arr);
        delete object._;

        const [[ type, payload ]] = Object.entries(object);

        this.type = type;
        this.payload = payload;
    }


    isValid() {
        return validTypes[this.type] && this.payload;
    };

}

module.exports = {
    Input
}
