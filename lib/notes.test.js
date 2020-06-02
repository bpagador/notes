const { Note } = require('./Notes');

describe('Note class', () => {
    
    it('can add notes', () => {
        const action = {
            type: 'add',
            payload: 'my note'
        };

        expect(Note.add(action)).toEqual({
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

        expect(Note.execute(action)).toEqual({
            id: 1, 
            text: 'my note'
        });

        expect(Note.execute(errorAction)).toEqual({
            error: 'try again'
        });

    });
});
