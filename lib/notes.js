class Note {

    static add(action) {
        const note = {
            id: 1,
            text: action.payload
        };
        return note;
    }

    static execute(action) {
        if (action.type === 'add') {
            return this.add(action);
        } else {
            return {
                error: 'try again'
            };
        }
    }
};

module.exports = {
    Note
};