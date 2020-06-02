const minimist = require('minimist');

const parse = arr => {
    const object = minimist(arr);
    delete object._;

    const [[ type, payload ]] = Object.entries(object);


    return {
        type,
        payload
    }
};

const isValid = action => {
    return action.type === 'add' && action.payload;
};

module.exports = {
    parse, 
    isValid
}
