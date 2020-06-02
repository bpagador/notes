const add = action => {
    const note = {
        id: 1,
        text: action.payload
    };
    return note;
}

const execute = action => {
    if(action.type === 'add') {
        return add(action);
    } else {
        return {
            error: 'try again'
        };   
    }
};

module.exports = {
    add, 
    execute
};