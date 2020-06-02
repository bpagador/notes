const { Note } = require('./Notes');

describe('Note class', () => {
    let note;
    beforeEach(() => {
        note = new Note()
    });

    it('can add notes', () => {
        const action = {
            type: 'add',
            payload: 'my note'
        };

        expect(note.add(action)).toEqual({
            id: 1, 
            text: 'my note'
        });
    });

    it('can execute a good action and a bad action', () => {
        const action = {
            type: 'add',
            payload: 'my note'
        };
        
        const errorAction = {
            type: 'nonsense',
            payload: 'meaningless'
        };

        expect(note.execute(action)).toEqual({
            id: 1, 
            text: 'my note'
        });

        expect(note.execute(errorAction)).toEqual({
            error: 'try again'
        });

    });
});
